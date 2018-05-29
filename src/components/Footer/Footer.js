import React from 'react';
import styled from 'react-emotion';
import Copyright from './Copyright';
import Nav from './Nav';
import { color, font } from '../../utils/style';

const Footer = styled('footer')`
  background-color: ${color.accentLight};
  color: ${color.textLight};
  font-family: ${font.default};
  font-size: 11px;
  margin-top: 4rem;
  padding: 1.5rem 0 1.25rem;
  position: relative;

  @media (min-width: 800px) {
    margin-top: 8rem;
  }
`;

export default () => (
  <Footer>
    <Nav />
    <Copyright>© Marisa Morby</Copyright>
  </Footer>
);
