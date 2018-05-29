import React from 'react';
import { StaticQuery } from 'gatsby';
import { css } from 'react-emotion';
import MarkdownSection from '../shared/MarkdownSection';

const styles = css`
  && {
    padding-top: 0;
  }

  h2 {
    font-weight: 100;
    margin: 4rem 0 2rem;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 4rem;
      margin-top: 5rem;
      margin-bottom: 3rem;
    }
  }

  > div > p:first-of-type {
    font-size: 110%;

    @media (min-width: 768px) {
      font-size: 115%;
    }
  }
`;

export default ({ updateCurrentSection, updateRefMap }) => (
  <StaticQuery
    query={graphql`
      query AboutSection {
        markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
          # See ../../utils/graphql-fragments for details.
          ...MarkdownFragment
        }
      }
    `}
    render={data => (
      <MarkdownSection
        id="about"
        className={styles}
        data={data}
        observeOnScroll
        updateCurrentSection={updateCurrentSection}
        updateRefMap={updateRefMap}
      />
    )}
  />
);
