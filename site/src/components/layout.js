import React from 'react';
import { Global, css } from '@emotion/core';
import { colors, typography, dimensions } from '../tokens';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }

        * + * {
          margin-top: 1rem;
        }

        html,
        body {
          color: ${colors.text};
          font-family: ${typography.fontFamily};
          font-size: ${typography.fontSize};
          font-weight: ${typography.fontWeight};
          line-height: 1.45;
        }

        body,
        #___gatsby {
          margin-top: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: ${typography.heading.fontFamily};
          font-weight: ${typography.heading.fontWeight};
          line-height: 1.1;

          em,
          i,
          strong,
          b {
            font-weight: inherit;
          }

          + * {
            margin-top: 0.5rem;
          }
        }

        h1 {
          font-size: 2.5rem;
        }

        h2 {
          font-size: 2rem;
          margin-top: 2rem;
        }

        h3,
        h4,
        h5,
        h6 {
          color: ${colors.text};
          font-size: 1.125rem;
          font-weight: 700;
          letter-spacing: 0.125em;
          margin: 2.5rem 0 0;
          text-transform: uppercase;

          + * {
            margin-top: 0.5rem;
          }
        }

        a {
          padding: 0.125em;

          &:hover,
          &:active,
          &:focus {
            outline: 2px solid ${colors.accent};
          }
        }

        li {
          margin-top: 0.25rem;
        }

        blockquote {
          color: ${colors.textLight};
          font-style: italic;

          > :last-child {
            font-size: 87.5%;
            text-align: right;
          }
        }

        .gatsby-image-wrapper {
          img {
            margin-top: 0;
          }
        }

        .screen-reader-text {
          clip: rect(0 0 0 0);
          overflow: hidden;
          position: absolute;
          height: 1px;
          width: 1px;
        }
      `}
    />
    <Header />
    <main
      css={css`
        margin-left: auto;
        margin-right: auto;
        max-width: ${dimensions.maxWidth};
        width: 90vw;
      `}
    >
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
