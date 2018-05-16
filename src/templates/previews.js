/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Content from '../components/Content';
import Preview from '../components/Preview';
import Pagination from '../components/Pagination';
import { categories } from '../config';

const getHeading = (isFirstPage, currentPage, totalPages, type, value) => {
  if (type === 'category' && value) {
    return `Articles in the category “${categories[value] || value}”`;
  }

  if (type === 'all' && isFirstPage) {
    return 'Latest Articles';
  }

  return `Articles, page ${currentPage} of ${totalPages}`;
};

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
    <Heading
      text={getHeading(isFirstPage, currentPage, totalPages, type, value)}
    />
    <Content>
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
    </Content>
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
