/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/shared/Layout';
import Section from '../components/shared/Section';
import Preview from '../components/Blog/Preview';
import PreviewHeading from '../components/Blog/PreviewHeading';
import Pagination from '../components/Blog/Pagination';

const Previews = ({
  data,
  pageContext: {
    postGroup,
    isFirstPage,
    isLastPage,
    currentPage,
    totalPages,
    linkBase,
    type,
    value,
  },
  location,
}) => (
  <Layout location={location}>
    <Section>
      <PreviewHeading
        isFirstPage={isFirstPage}
        currentPage={currentPage}
        totalPages={totalPages}
        type={type}
        value={value}
      />
      {isFirstPage &&
        type === 'all' && (
          <section dangerouslySetInnerHTML={{ __html: data.intro.html }} />
        )}
      {postGroup.map(({ node: post }) => <Preview key={post.id} post={post} />)}

      <Pagination
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        currentPage={currentPage}
        totalPages={totalPages}
        linkBase={linkBase}
      />
    </Section>
  </Layout>
);

Previews.propTypes = {
  data: PropTypes.shape({
    intro: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    postGroup: PropTypes.any,
    isFirstPage: PropTypes.bool,
    isLastPage: PropTypes.bool,
    currentPage: PropTypes.number,
  }).isRequired,
};

export default Previews;

export const previewsQuery = graphql`
  query PreviewsQuery {
    intro: markdownRemark(fileAbsolutePath: { regex: "/articles/" }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
