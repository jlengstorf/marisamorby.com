import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import { nav } from '../config';
import Grid from './Grid';

const Wrapper = styled('footer')`
  background-color: #f5f8f9;
  color: var(--text-light);
  font-size: 11px;
  margin-top: 4rem;
  padding: 1.5rem 0 1rem;
  position: relative;

  &::before,
  &::after {
    content: ' ';
    height: 8px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  &::before {
    background-color: var(--color-accent);
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 50%,
      53% 50%,
      50% 100%,
      47% 50%,
      0% 50%
    );
    z-index: 10;
  }

  /* &::after {
    background-color: var(--color-accent-dark);
    clip-path: polygon(0% 80%, 100% 50%, 100% 100%, 0% 100%);
    z-index: 10;
  } */
`;

const Nav = styled('nav')`
  grid-column: 3 / 4;
  grid-row: 1;
  text-align: center;

  @media (min-width: 800px) {
    text-align: left;
  }
`;

const NavLink = styled(Link)`
  color: inherit;
  margin: 0 0.25rem;
  padding: 0.375rem;
  text-decoration: none;

  @media (min-width: 800px) {
    margin-right: 0.5rem;

    &:first-child {
      margin-left: -0.5rem;
    }
  }
`;

const Copyright = styled('p')`
  margin-top: 1rem;
  grid-column: 2 / 3;
  grid-row: 1;
  text-align: center;

  @media (min-width: 800px) {
    margin-right: 2rem;
    margin-top: 0;
    text-align: right;
  }
`;

const Footer = () => (
  <Wrapper>
    <Grid element="div">
      <Nav>
        {nav.map(link => (
          <NavLink key={`nav-${link.name}`} to={link.path}>
            {link.footerName || link.name}
          </NavLink>
        ))}
      </Nav>
      <Copyright>© Marisa Morby</Copyright>
    </Grid>
  </Wrapper>
);

export default Footer;
