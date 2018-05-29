import React from 'react';
import { StaticQuery } from 'gatsby';
import { css } from 'react-emotion';
import MarkdownSection from '../shared/MarkdownSection';
import { color } from '../../utils/style';

const praiseStyles = css`
  blockquote {
    margin: 0;
    padding: 1.5rem 0;
    border-bottom: 1px solid ${color.accent};
  }
`;

export default () => (
  <StaticQuery
    query={graphql`
      query PraiseSection {
        markdownRemark(fileAbsolutePath: { regex: "/praise.md/" }) {
          # See ../../utils/graphql-fragments for details.
          ...MarkdownFragment
        }
      }
    `}
    render={data => (
      <MarkdownSection id="praise" className={praiseStyles} data={data} />
    )}
  />
);
