import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { categories } from '../config';

const CategoryLink = ({ category, block }) => (
  <Link to={`/articles/category/${category}`}>
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
