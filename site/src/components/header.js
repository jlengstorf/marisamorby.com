import React from 'react';
import { css } from '@emotion/core';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Nav from './nav';
import { colors, dimensions, typography } from '../tokens';

const headerStyles = css`
  background-color: ${colors.white};
  background-color: ${colors.white}fa;
  font-family: ${typography.heading.fontFamily};
  font-size: 1.25rem;
  font-weight: ${typography.heading.fontWeight};
  margin: 0;
  padding: 0.5rem 5vw;
  position: sticky;
  text-align: center;
  text-transform: lowercase;
  top: 0;
  width: 100%;
  z-index: 100;

  .home-link {
    text-align: center;
  }

  a {
    color: inherit;
    padding: 0.125rem;
    position: relative;
    text-decoration: none;

    &::after {
      background-color: ${colors.brand};
      border-radius: 2px;
      content: ' ';
      height: 2px;
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      transition: 150ms linear all;
      right: 0;
    }

    &:hover,
    &:active,
    &:focus,
    &[aria-current],
    &.active {
      outline: none;
    }

    &:hover,
    &:focus {
      &::after {
        opacity: 0.25;
      }
    }
  }

  nav {
    a {
      margin-left: 0.25rem;

      &:first-of-type {
        margin-left: 0;
      }

      &:active,
      &[aria-current],
      &.active {
        &::after {
          opacity: 1;
        }
      }
    }
  }

  @media (min-width: 540px) {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem calc((100vw - ${dimensions.maxWidth}) / 2) 0.5rem;

    .home-link {
      text-align: left;
    }

    nav {
      margin-top: 0;
    }
  }
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        meta: siteMetadata {
          navLinks: nav {
            name
            path
          }
        }
      }
    }
  `);
  const navLinks = data.site.meta.navLinks;

  return (
    <header css={headerStyles}>
      <p className="home-link">
        <Link to="/">Marisa Morby</Link>
      </p>
      <Nav navLinks={navLinks} />
    </header>
  );
};

export default Header;
