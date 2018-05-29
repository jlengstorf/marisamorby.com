import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import { font } from '../../utils/style';

const LogoWrap = styled('p')`
  font-family: ${font.heading};
  font-size: 1.5rem;
`;

const LogoLink = styled(Link)`
  @media (min-width: 480px) {
    margin-left: -0.125rem;
  }
`;

const Logo = ({ to, text, linkClass }) => (
  <LogoWrap data-text={text}>
    <LogoLink to={to} className={linkClass}>
      {text}
    </LogoLink>
  </LogoWrap>
);

Logo.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Logo;
