import React from 'react';
import styled, { css } from 'react-emotion';
import Logo from './Logo';
import Nav from './Nav';
import { color, transition, sizing } from '../../utils/style';

const Header = styled('header')`
  align-items: center;
  /* Fallback in case the hex with alpha isn’t supported. */
  background-color: ${color.lightest};
  background-color: ${color.lightest}fa;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  max-width: ${sizing.maxWidth};
  padding: 0.5rem 0;
  position: sticky;
  top: 0;
  width: ${sizing.width};
  z-index: 100;

  ::before,
  ::after {
    background-color: ${color.lightest};
    bottom: 0;
    content: ' ';
    position: absolute;
    top: 0;
    width: 5vw;

    @media (min-width: ${sizing.maxWidth}) {
      width: calc((100vw - ${sizing.maxWidth}) / 2);
    }
  }

  ::before {
    right: 100%;
  }

  ::after {
    left: 100%;
  }

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    padding-top: 1rem;
  }
`;

const linkClass = css`
  color: ${color.darkest};
  display: inline-block;
  font-weight: 300;
  line-height: 1.25;
  padding: 0.125rem;
  position: relative;
  text-decoration: none;
  text-transform: lowercase;

  &::after {
    background-color: ${color.accent};
    border-radius: 2px;
    content: ' ';
    height: 2px;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0; /* 1.125em; */
    transition: ${transition.default};
    right: 0;
  }

  :hover,
  :active,
  :focus,
  &.active {
    outline: none;
  }

  :hover,
  :focus {
    ::after {
      opacity: 0.25;
    }
  }

  :active,
  &.active {
    ::after {
      opacity: 1;
    }
  }
`;

export default ({ location }) => (
  <Header>
    <Logo to="/" text="Marisa Morby" linkClass={linkClass} />
    <Nav isHome={location.pathname === '/'} linkClass={linkClass} />
  </Header>
);
