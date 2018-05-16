import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import { color, font } from '../../utils/style';

const LogoWrap = styled('h4')`
  background: ${color.accent};
  color: ${color.lightest};
  display: block;
  font-family: ${font.heading};
  font-size: 1.375rem;
  grid-column: 2 / 3;
  line-height: 1;
  margin: 0.25rem 0 0 -1rem;
  padding: 0.75rem 0 0.75rem 2rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;

  &::after {
    color: ${color.accentDark};
    content: attr(data-text);
    font-family: ${font.headingShadow};
    left: 0;
    padding: 0.75rem 0 0.75rem 2rem;
    pointer-events: none;
    position: absolute;
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

const LogoLink = styled(Link)`
  color: inherit;
  padding: 0;
  text-decoration: none;

  &:active,
  &:focus,
  &:hover {
    outline-color: ${color.accentDark};
  }
`;

const Logo = ({ to, text }) => (
  <LogoWrap data-text={text}>
    <LogoLink to={to}>{text}</LogoLink>
  </LogoWrap>
);

Logo.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Logo;
