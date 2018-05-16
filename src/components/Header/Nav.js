import React from 'react';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import { color, font } from '../../utils/style';
import { nav } from '../../config';

const Wrapper = styled('nav')`
  font-family: ${font.default};
  grid-column: 1 / span 2;
  margin-left: auto;
  margin-top: 0;
  position: relative;
  text-align: right;
  z-index: 1;

  @media (min-width: 480px) {
    grid-column: 3 / 4;
    z-index: 10;
  }
`;

const NavLink = styled(Link)`
  color: ${color.darkest};
  display: inline-block;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.125em;
  line-height: 1;
  margin: 0;
  padding: 0.125rem 0.5rem 0.25rem;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 200ms ease-out;
  z-index: 10;

  &::after {
    background-color: ${color.accentDark};
    border-radius: 0.75em;
    content: ' ';
    height: 1.45em;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 200ms ease-out;
    width: 1.5em;
    z-index: -1;
  }

  &:active,
  &:focus,
  &:hover {
    color: ${color.lightest};
    outline: none;
    text-decoration: none;

    &::after {
      opacity: 1;
      text-decoration: none;
      width: 100%;
    }
  }

  @media (min-width: 480px) {
    color: ${color.lightest};
    display: block;
    font-size: 14px;
    letter-spacing: 0.25em;
    margin: 0.375rem 0;
  }
`;

export default () => (
  <Wrapper>
    {nav.filter(link => !link.hidden).map(link => (
      <NavLink key={`nav-${link.name}`} to={link.path}>
        {link.name}
      </NavLink>
    ))}
  </Wrapper>
);
