import React from 'react';
import { css } from '@emotion/core';
import BasePagination from 'gatsby-theme-blog-sanity/src/components/pagination';
import { colors } from '../../tokens';

const paginationStyles = css`
  a {
    color: ${colors.textLight};
    text-decoration: none;
  }
`;

const Pagination = props => (
  <BasePagination {...props} css={paginationStyles} />
);

export default Pagination;
