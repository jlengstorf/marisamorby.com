import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { colors, typography } from '../tokens';

const Button = ({ to, children, centered, ...props }) => {
  const isRelative = !to.startsWith('http');
  const Component = isRelative ? Link : 'a';
  const destinationProp = isRelative ? { to } : { href: to };

  return (
    <div
      css={css`
        margin-top: 2rem;
        text-align: ${centered ? 'center' : 'inherit'};
      `}
    >
      <Component
        css={css`
          background: ${colors.brand};
          border: 2px solid transparent;
          border-radius: 0.5rem;
          color: ${colors.white};
          display: inline-block;
          font-family: ${typography.heading.fontFamily};
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.125rem;
          line-height: 2;
          max-width: 100%;
          overflow: hidden;
          padding: 0 1rem;
          text-decoration: none;
          text-transform: uppercase;

          :active,
          :hover,
          :focus {
            border: 2px solid ${colors.brandDark};
            cursor: pointer;
            outline: none;
          }
        `}
        {...destinationProp}
        {...props}
      >
        {children}
      </Component>
    </div>
  );
};

export default Button;
