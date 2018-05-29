import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import { button } from '../../utils/style';

const Btn = ({ to, children, ...props }) =>
  /^\/(?!\/)/.test(to) ? (
    <Link to={to} {...props}>
      <span>{children}</span>
    </Link>
  ) : (
    <a href={to} {...props}>
      <span>{children}</span>
    </a>
  );

Btn.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOf([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

const Button = styled(Btn)`
  ${button};
`;

export default Button;
