import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { Link } from 'gatsby';

const Wrapper = styled('aside')`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const moveLeft = css`
  margin-right: auto;
`;
const moveRight = css`
  margin-left: auto;
`;

const PageLink = styled(Link)`
  font-size: 0.75rem;
  font-weight: 100;
  letter-spacing: 0.2rem;
  margin: 0 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
`;

const Pagination = ({
  isFirstPage,
  isLastPage,
  currentPage,
  totalPages,
  linkBase,
}) => (
  <Wrapper>
    {!isFirstPage &&
      currentPage !== 2 && (
        <PageLink to={linkBase} title="jump to newest posts">
          « <span className="screen-reader-text">newest posts</span>
        </PageLink>
      )}
    {!isFirstPage && (
      <PageLink
        to={`${linkBase}${currentPage - 1 === 1 ? '' : currentPage - 1}`}
        className={moveLeft}
      >
        ‹ newer posts
      </PageLink>
    )}
    {!isLastPage && (
      <PageLink to={`${linkBase}${currentPage + 1}`} className={moveRight}>
        older posts ›
      </PageLink>
    )}
    {!isLastPage &&
      currentPage !== totalPages - 1 && (
        <PageLink to={`${linkBase}${totalPages}`} title="jump to oldest posts">
          <span className="screen-reader-text">oldest posts</span> »
        </PageLink>
      )}
  </Wrapper>
);

Pagination.propTypes = {
  isFirstPage: PropTypes.bool.isRequired,
  isLastPage: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  linkBase: PropTypes.string.isRequired,
};

export default Pagination;
