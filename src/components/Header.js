import React from 'react';
import { StaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import Link from 'gatsby-link';
import styled, { css } from 'react-emotion';
import { nav } from '../config';
import Grid from './Grid';

const wrapper = css`
  align-items: start;
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: 50px 1fr;
  position: relative;
  width: 100%;

  @media (min-width: 480px) {
    align-items: center;
    grid-template-columns: 150px 150px 1fr;
    grid-template-rows: 150px 1fr;
    margin: 2rem auto 0;
    max-width: 1150px;
    padding-right: 2rem;
    width: 90%;

    &::after {
      background-color: var(--color-accent);
      border-radius: 0 50px 50px 0;
      content: ' ';
      display: block;
      height: 100px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 90%;
      z-index: 1;
    }
  }

  @media (min-width: 800px) {
    margin-top: 3rem;
  }
`;

const HomeLink = styled(Link)`
  background-color: var(--color-lightest);
  border: 2px solid var(--color-accent);
  border-radius: 50%;
  display: block;
  grid-column: 1 / 2;
  margin-left: -20px;
  margin-top: -10px;
  padding: 2px;
  position: relative;
  width: 80px;
  z-index: 10;

  &:active,
  &:focus,
  &:hover {
    border-color: var(--color-accent-dark);
    outline: none;
  }

  @media (min-width: 480px) {
    margin-left: 0;
    margin-top: 0;
    width: 150px;
  }
`;

const HomeImage = styled(Image)`
  display: block;
  border-radius: 50%;
  margin-top: 0;
  transform: rotate(0deg);
  transition: all 200ms ease-out;

  &:hover {
    transform: rotate(-3deg);
  }

  & img {
    border-radius: 50%;
    margin-top: 0;
  }
`;

/* const Bar = styled('div')`
  align-items: center;
  background-color: var(--color-accent);
  border-radius: 0 5rem 5rem 0;
  margin-top: 0;
`; */

const LogoWrap = styled('h4')`
  background: var(--color-accent);
  color: var(--color-lightest);
  display: block;
  font-size: 1.375rem;
  grid-column: 2 / 3;
  margin-left: -1rem;
  margin-top: 0.25rem;
  padding: 0.75rem 0 0.75rem 2rem;

  &::after {
    color: var(--color-accent-dark);
    padding: 0.75rem 0 0.75rem 2rem;
    top: 0.16em;
  }

  @media (min-width: 480px) {
    background: transparent;
    font-size: 1.75rem;
    margin-top: 0;
    position: relative;
    z-index: 10;
  }
`;

const Logo = styled(Link)`
  color: inherit;
  padding: 0;
  text-decoration: none;

  &:active,
  &:focus,
  &:hover {
    outline-color: var(--color-accent-dark);
  }
`;

const Nav = styled('nav')`
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
  color: var(--color-darkest);
  display: inline-block;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.125em;
  line-height: 1;
  margin: 0;
  padding: 0.125rem 0.75rem;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  z-index: 10;

  &:active,
  &:focus,
  &:hover {
    outline: none;
    text-decoration: none;
  }

  &::after {
    background-color: var(--color-accent-dark);
    border-radius: 0.75em;
    content: ' ';
    height: 1.25em;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: all 200ms ease-out;
    width: 1.5em;
    z-index: -1;
  }

  &:active::after,
  &:focus::after,
  &:hover::after {
    opacity: 1;
    text-decoration: none;
    width: 100%;
  }

  @media (min-width: 480px) {
    color: var(--color-lightest);
    display: block;
    font-size: 14px;
    letter-spacing: 0.25em;
    margin: 0.375rem 0;
  }
`;

const Header = ({ image }) => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        image: imageSharp(original: { src: { regex: "/marisa-morby/" } }) {
          sizes(maxWidth: 138, traceSVG: { color: "#d3f5fe" }) {
            ...GatsbyImageSharpSizes_tracedSVG
          }
        }
      }
    `}
    render={data => (
      <Grid element={'header'} className={wrapper}>
        <HomeLink to="/">
          <HomeImage sizes={data.image.sizes} alt="Marisa Morby" />
        </HomeLink>
        <LogoWrap data-text="Marisa Morby">
          <Logo to="/">Marisa Morby</Logo>
        </LogoWrap>
        <Nav>
          {nav.filter(link => !link.hidden).map(link => (
            <NavLink key={`nav-${link.name}`} to={link.path}>
              {link.name}
            </NavLink>
          ))}
        </Nav>
      </Grid>
    )}
  />
);

export default Header;
