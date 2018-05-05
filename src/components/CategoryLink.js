import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { categories } from '../config';
import styles from '../styles/category-link.module.css';

const CategoryLink = ({ category, block }) => (
  <Link
    to={`/articles/category/${category}`}
    className={`${styles.link} ${block && styles.linkBlock}`}
  >
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
