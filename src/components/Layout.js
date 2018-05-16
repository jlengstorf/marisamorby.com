import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import { site } from '../config';
import {
  addFonts,
  color,
  font,
  reset,
  sizing,
  typography,
} from '../utils/style';
import Header from './Header/Header';
import Main from './Main';
import Footer from './Footer';
import PageTransition from './PageTransition';

// Add custom fonts.
addFonts();

// Set up global styles for the app.
const Wrapper = styled('div')`
  color: ${color.textDefault};
  font-family: ${font.default};
  font-size: ${sizing.default};
  line-height: ${font.lineHeight};
  margin: 0 auto;
  min-height: 80vh;
  position: relative;
  text-decoration-skip: ink;

  @media (min-width: 480px) {
    font-size: ${sizing.large};
  }

  /* Apply a minimal reset to all elements within the wrapper. */
  ${reset}

  /* Add basic typography rules for everything inside the wrapper. */
  ${typography};
`;

export default ({ children, location }) => [
  <Helmet
    key="app-head"
    titleTemplate={site.title.template}
    defaultTitle={site.title.default}
  >
    <html lang="en" />
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title>{site.title.default}</title>

    {/* Favicons from realfavicongenerator.net */}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#39bbdf" />
    <meta name="msapplication-TileColor" content="#39bbdf" />
    <meta name="theme-color" content="#39bbdf" />
  </Helmet>,
  <Header key="app-header" />,
  <Wrapper key="app-wrapper">
    <PageTransition location={location}>
      <Main>{children}</Main>
    </PageTransition>
  </Wrapper>,
  <Footer key="app-footer" />,
];
