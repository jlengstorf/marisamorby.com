import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Grid from './Grid';
import { color, font } from '../utils/style';
import { nav } from '../config';

const Wrapper = styled('footer')`
  background-color: #f5f8f9;
  color: ${color.textLight};
  font-family: ${font.default};
  font-size: 11px;
  margin-top: 4rem;
  padding: 1.5rem 0 1rem;
  position: relative;

  @media (min-width: 800px) {
    margin-top: 8rem;
  }

  &::before,
  &::after {
    content: ' ';
    left: 0;
    position: absolute;
    width: 100%;
  }

  &::before {
    background-color: ${color.accent};
    clip-path: polygon(
      0% 0%,
      calc(50% - 5px) 0%,
      50% 50%,
      calc(50% + 5px) 0%,
      100% 0%,
      100% 50%,
      calc(50% + 5px) 50%,
      50% 100%,
      calc(50% - 5px) 50%,
      0% 50%
    );
    height: 4px;
    top: -2px;
    z-index: 10;
  }

  &::after {
    background-color: ${color.lightest};
    clip-path: polygon(
      0% 0%,
      calc(50% - 5px) 0%,
      50% 50%,
      calc(50% + 5px) 0%,
      100% 0%,
      100% 25%,
      calc(50% + 5px) 25%,
      50% 75%,
      calc(50% - 5px) 25%,
      0% 25%
    );
    height: 4px;
    top: 0;
    z-index: 18;
  }
`;

const Nav = styled('nav')`
  grid-column: 3 / 4;
  grid-row: 1;
  text-align: center;

  @media (min-width: 800px) {
    text-align: left;
  }
`;

const LinkWrap = ({ to, children, ...props }) =>
  /^\/(?!\/)/.test(to) ? (
    <Link to={to} {...props}>
      {children}
    </Link>
  ) : (
    <a href={to} {...props}>
      {children}
    </a>
  );

const NavLink = styled(LinkWrap)`
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
