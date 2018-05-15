import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Pagination = ({
  isFirstPage,
  isLastPage,
  currentPage,
  totalPages,
  linkBase,
}) => (
  <div>
    {!isFirstPage &&
      currentPage !== 2 && (
        <Link to={linkBase} title="jump to newest posts">
          « <span className="screen-reader-text">newest posts</span>
        </Link>
      )}
    {!isFirstPage && (
      <Link to={`${linkBase}${currentPage - 1 === 1 ? '' : currentPage - 1}`}>
        ‹ newer posts
      </Link>
    )}
    {!isLastPage && (
      <Link to={`${linkBase}${currentPage + 1}`}>older posts ›</Link>
    )}
    {!isLastPage &&
      currentPage !== totalPages - 1 && (
        <Link to={`${linkBase}${totalPages}`} title="jump to oldest posts">
          <span className="screen-reader-text">oldest posts</span> »
        </Link>
      )}
  </div>
);

Pagination.propTypes = {
  isFirstPage: PropTypes.bool.isRequired,
  isLastPage: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  linkBase: PropTypes.string.isRequired,
};

export default Pagination;
