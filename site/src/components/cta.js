import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const CTA = ({ to, children }) => (
  <Link
    css={css`
      display: block;
      margin-left: auto;
      margin-right: auto;

      :active,
      :focus,
      :hover {
        cursor: pointer;
        outline: none;
      }
    `}
    to={to}
  >
    {children}
  </Link>
);

export default CTA;
