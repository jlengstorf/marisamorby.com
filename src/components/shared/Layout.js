import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PageTransition from './PageTransition';
import { color, font, reset, sizing, typography } from '../../utils/style';

// Global style setup
reset();
typography();

const MainContent = styled('div')`
  color: ${color.textDefault};
  font-family: ${font.default};
  font-size: ${sizing.default};
  font-weight: 300;
  line-height: ${font.lineHeight};
  margin: 0 auto;
  min-height: 50vh;
  position: relative;
  text-decoration-skip: ink;

  strong,
  b {
    font-weight: 500;
  }

  @media (min-width: 480px) {
    font-size: ${sizing.large};
  }
`;

export default ({ children, location }) => [
  <Helmet key="app-head">
    <html lang="en" />
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    {/* Favicons from realfavicongenerator.net */}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#39bbdf" />
    <meta name="msapplication-TileColor" content="#39bbdf" />
    <meta name="theme-color" content="#39bbdf" />
  </Helmet>,
  <Header key="app-header" location={location} />,
  <MainContent key="app-content">
    <PageTransition location={location}>{children}</PageTransition>
  </MainContent>,
  <Footer key="app-footer" />,
];
