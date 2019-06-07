import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

const paginationStyles = css`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;

  a {
    display: inline-block;
    margin: 0 0.5rem;
    padding: 0.25rem;

    &:first-of-type {
      margin-left: 0;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  .newer {
    margin-right: auto;
  }

  .older {
    margin-left: auto;
  }
`;

const Pagination = ({
  isFirstPage,
  isLastPage,
  currentPage,
  totalPages,
  linkBase,
  ...props
}) => (
  <div className="pagination" css={paginationStyles} {...props}>
    {!isFirstPage && currentPage !== 2 && (
      <Link to={linkBase} title="jump to newest posts" className="newest">
        « <span className="screen-reader-text">newest posts</span>
      </Link>
    )}
    {!isFirstPage && (
      <Link
        to={`${linkBase}${currentPage - 1 === 1 ? '' : currentPage - 1}`}
        className="newer"
      >
        ‹ newer posts
      </Link>
    )}
    {!isLastPage && (
      <Link to={`${linkBase}${currentPage + 1}`} className="older">
        older posts ›
      </Link>
    )}
    {!isLastPage && currentPage !== totalPages - 1 && (
      <Link to={`${linkBase}${totalPages}`} title="jump to oldest posts">
        <span className="screen-reader-text">oldest post</span> »
      </Link>
    )}
  </div>
);

export default Pagination;
