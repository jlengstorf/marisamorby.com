import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { Link, StaticQuery } from 'gatsby';
import { color, transition } from '../../utils/style';

const styles = css`
  color: ${color.textLight};
  display: inline-block;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  padding: 0.25rem;
  text-decoration: none;
  transition: ${transition.duration} background-color ${transition.easing};

  :first-of-type {
    margin-left: -0.25rem;
  }
`;

const CategoryLink = ({ category, block }) => (
  <StaticQuery
    query={graphql`
      query CategoryQuery {
        site {
          siteMetadata {
            categories {
              name
              slug
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { categories },
      },
    }) => {
      const cat = categories.find(cat => cat.slug === category);

      return (
        <Link to={`/articles/category/${category}`} className={styles}>
          {cat.name || category}
        </Link>
      );
    }}
  />
);

CategoryLink.propTypes = {
  category: PropTypes.string.isRequired,
  block: PropTypes.bool,
};

CategoryLink.defaultProps = {
  block: false,
};

export default CategoryLink;
