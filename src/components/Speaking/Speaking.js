import React from 'react';
import { StaticQuery } from 'gatsby';
import styled from 'react-emotion';
import Section from '../shared/Section';

const ContactLink = styled('a')`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export default ({ updateCurrentSection, updateRefMap }) => (
  <StaticQuery
    query={graphql`
      query SpeakingSection {
        markdownRemark(fileAbsolutePath: { regex: "/speaking.md/" }) {
          # See ../../utils/graphql-fragments for details.
          ...MarkdownFragment
        }
        speakingEngagements: allAirtableSpeakingEngagements(
          limit: 5
          sort: { fields: Start_Date, order: DESC }
        ) {
          edges {
            node {
              Conference
              Link
              Start_Date
              End_Date
            }
          }
        }
      }
    `}
    render={({ markdownRemark, speakingEngagements }) => {
      const talks = speakingEngagements.edges.map(edge => ({ ...edge.node }));
      const today = new Date();
      const upcoming = talks.filter(talk => new Date(talk.Start_Date) >= today);
      const past = talks.filter(talk => new Date(talk.Start_Date) < today);

      return (
        <Section
          id="speaking"
          updateCurrentSection={updateCurrentSection}
          updateRefMap={updateRefMap}
          isTinted
          observeOnScroll
        >
          <h2
            dangerouslySetInnerHTML={{
              __html: markdownRemark.frontmatter.title,
            }}
          />
          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
          <h3>Upcoming Talks</h3>
          <ul>
            {upcoming.map(talk => (
              <li key={`talk-${talk.Conference}`}>
                <a href={talk.Link}>{talk.Conference}</a>
              </li>
            ))}
          </ul>
          <h3>Some of My Previous Talks</h3>
          <ul>
            {past.map(talk => (
              <li key={`talk-${talk.Conference}`}>
                {talk.Link ? (
                  <a href={talk.Link}>{talk.Conference}</a>
                ) : (
                  talk.Conference
                )}
              </li>
            ))}
          </ul>
          <p>
            You can also see a{' '}
            <a href="https://airtable.com/shrwPPmpE6Ny7p0Wk">
              full list of my talks
            </a>{' '}
            or check out my
            <a href="https://github.com/marisamorby/presentations">
              current presentations on GitHub
            </a>.
          </p>
          <h3>Want me to speak at your event?</h3>
          <ContactLink href="#contact" className="button">
            <span>Get in touch!</span>
          </ContactLink>
        </Section>
      );
    }}
  />
);
