import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const SpeakingCalendar = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(
        limit: 5
        filter: { table: { eq: "Speaking Engagements" } }
        sort: { fields: data___Start_Date, order: DESC }
      ) {
        nodes {
          data {
            conference: Conference
            link: Link
            start: Start_Date
            end: End_Date
          }
        }
      }
    }
  `);

  const talks = data.allAirtable.nodes.map(node => node.data);
  const today = new Date();
  const upcoming = talks.filter(talk => new Date(talk.end) >= today);
  const past = talks.filter(talk => new Date(talk.end) < today);

  const getTalkList = talkArr => {
    return talkArr.map(talk => (
      <li key={`talk-${talk.conference}`}>
        <a href={talk.link}>{talk.conference}</a>
      </li>
    ));
  };

  return (
    <>
      {upcoming.length > 0 && (
        <>
          <h3>Upcoming Talks</h3>
          <ul>{getTalkList(upcoming)}</ul>
        </>
      )}
      {past.length > 0 && (
        <>
          <h3>Some of My Previous Talks</h3>
          <ul>{getTalkList(past)}</ul>
        </>
      )}
    </>
  );
};

export default SpeakingCalendar;
