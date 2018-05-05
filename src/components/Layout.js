import React from 'react';
import Helmet from 'react-helmet';
import { injectGlobal } from 'emotion';
import styled from 'react-emotion';
import { site } from '../config';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PageTransition from './PageTransition';

// Import the @font-face rules for custom font support.
import '../fonts/style.css';

// Define global/shared styles.
injectGlobal`
  /* Define site-wide variables. */
  :root {
    /* COLORS */
    --color-lightest: #fff;
    --color-darkest: #2b4b54;
    --color-accent: #39bbdf;
    --color-accent-dark: #1791b3;

    --text-color: var(--color-darkest);
    --text-light: #627980;
    --text-inverted: color(var(--color-lightest) lightness(- 10%));

    /* FONTS */
    --font-size-sm: 18px;
    --font-size-md: 21px;
    --font-family-default: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    --font-family-heading: eveleth, var(--font-family-default);
    --font-family-heading-shadow: eveleth-shadow;

    /* ANIMATION */
    --transition-length: 150ms;
    --transition-easing: linear;
    --transition-property: all;
    --transition-default: var(--transition-length) var(--transition-property)
      var(--transition-easing);
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    margin: 0;
  }

  body * + * {
    margin-top: 1rem;
  }

  body {
    margin: 0 auto;
    color: var(--text-color);
    font-family: var(--font-family-default);
    font-size: var(--font-size-sm);
    line-height: 1.45;
    text-decoration-skip: ink;

    @media (min-width: 480px) {
      font-size: var(--font-size-md);
    }
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--color-darkest);
    font-family: var(--font-family-heading);
    font-weight: normal;
    line-height: 1;
    position: relative;

    /* Super-sweet multi-colored shadow effect! */
    &::after {
      color: var(--color-accent-dark);
      content: attr(data-text);
      font-family: var(--font-family-heading-shadow);
      left: 0;
      pointer-events: none;
      position: absolute;
      top: 0.12em;
    }

    em, i { font-style: normal; }
    strong, b { font-weight: normal; }
  }

  a {
    padding: 0.125em;

    &:hover,
    &:active,
    &:focus {
      outline: 2px solid var(--color-accent);
    }
  }

  .btn {
    display: block;
    background: var(--color-accent);
    border: 2px solid var(--color-lightest);
    border-radius: 0.5rem;
    box-shadow: 2px 2px var(--color-accent-dark);
    color: var(--color-lightest);
    font-family: var(--font-family-heading);
    font-size: 1.25rem;
    line-height: 2;
    margin-top: 2rem;
    max-width: 100%;
    text-align: center;
    text-decoration: none;
    text-shadow: 1px 2px 1px var(--color-accent-dark);
    transition: 100ms all linear;
    width: 300px;

    &:active,
    &:focus,
    &:hover {
      background: var(--color-accent-dark);
      box-shadow: 1px 2px 1px var(--color-darkest);
      outline: none;
    }
  }
`;

const Wrapper = styled('div')`
  margin-top: 0;
  min-height: 80vh;
  position: relative;
`;

export default ({ children, location }) => [
  <Helmet
    key="app-head"
    titleTemplate={site.title.template}
    defaultTitle={site.title.default}
  >
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title>{site.title.default}</title>
  </Helmet>,
  <Header key="app-header" />,
  <Wrapper key="app-wrapper">
    <PageTransition location={location}>
      <Main>{children}</Main>
    </PageTransition>
  </Wrapper>,
  <Footer key="app-footer" />,
];
