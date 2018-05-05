/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import CategoryLink from '../components/CategoryLink';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import { categories } from '../config';
import styles from '../styles/blog.module.css';

const getHeading = (isFirstPage, currentPage, totalPages, type, value) => {
  if (type === 'category' && value) {
    return `Articles in the category “${categories[value].display || value}”`;
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
}) => (
  <Layout>
    {isFirstPage ? (
      <header>
        <h1 className={styles.previewPageHeading}>
          {data.intro.frontmatter.title}
        </h1>
        <section dangerouslySetInnerHTML={{ __html: data.intro.html }} />
      </header>
    ) : (
      <h1 className={styles.previewPageHeading}>
        {getHeading(isFirstPage, currentPage, totalPages, type, value)}
      </h1>
    )}
    {postGroup.map(({ node: post }) => (
      <section key={post.id} className={styles.preview}>
        <h2 className={styles.previewHeading}>
          <Link className={styles.link} to={`/${post.frontmatter.slug}`}>
            {post.frontmatter.title}
          </Link>
        </h2>
        <div className={styles.categoryList}>
          <CategoryLink
            key={`category-${post.frontmatter.category}`}
            category={post.frontmatter.category}
          />
        </div>
        <p className={styles.excerpt}>
          {post.frontmatter.description
            ? post.frontmatter.description
            : post.excerpt}
        </p>
        <Link className={styles.readMore} to={`/${post.frontmatter.slug}`}>
          Read post ›
        </Link>
      </section>
    ))}

    <Pagination
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
      currentPage={currentPage}
      totalPages={totalPages}
      linkBase={linkBase}
    />
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
    intro: markdownRemark(id: { regex: "/articles/" }) {
      frontmatter {
        title
      }
      html
    }
  }
`;
