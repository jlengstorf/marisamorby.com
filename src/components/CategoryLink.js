import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { Link } from 'gatsby';
import { color, transition } from '../utils/style';
import { categories } from '../config';

const styles = css`
  background-color: ${color.accent};
  clip-path: polygon(0 2%, 99% 0, 100% 100%, 1% 98%);
  color: ${color.lightest};
  display: inline-block;
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  text-decoration: none;
  transition: ${transition.duration} background-color ${transition.easing};

  :active,
  :focus,
  :hover {
    background-color: ${color.accentDark};
  }
`;

const CategoryLink = ({ category, block }) => (
  <Link to={`/articles/category/${category}`} className={styles}>
    {categories[category] || category}
  </Link>
);

CategoryLink.propTypes = {
  category: PropTypes.string.isRequired,
  block: PropTypes.bool,
};

CategoryLink.defaultProps = {
  block: false,
};

export default CategoryLink;
