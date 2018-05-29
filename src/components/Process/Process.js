import React from 'react';
import { StaticQuery } from 'gatsby';
import { css } from 'react-emotion';
import MarkdownSection from '../shared/MarkdownSection';

const processStyles = css`
  h3 {
    margin-top: 1rem;
  }
  .gatsby-resp-image-wrapper {
    margin-top: 3rem;
  }
`;

export default ({ updateCurrentSection, updateRefMap }) => (
  <StaticQuery
    query={graphql`
      query ProcessSection {
        markdownRemark(fileAbsolutePath: { regex: "/process.md/" }) {
          # See ../../utils/graphql-fragments for details.
          ...MarkdownFragment
        }
      }
    `}
    render={data => (
      <MarkdownSection
        id="process"
        data={data}
        className={processStyles}
        isTinted
        updateCurrentSection={updateCurrentSection}
        updateRefMap={updateRefMap}
        observeOnScroll
      />
    )}
  />
);
