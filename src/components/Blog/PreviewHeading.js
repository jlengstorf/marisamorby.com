import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery } from 'gatsby';
import Heading from '../shared/Heading';

const getHeading = (
  categories,
  isFirstPage,
  currentPage,
  totalPages,
  type,
  value,
) => {
  if (type === 'category' && value) {
    return `Articles in the category “${categories[value] || value}”`;
  }

  if (type === 'all' && isFirstPage) {
    return 'Latest Articles';
  }

  return `Articles, page ${currentPage} of ${totalPages}`;
};

const PreviewHeading = ({
  isFirstPage,
  currentPage,
  totalPages,
  type,
  value,
}) => (
  <StaticQuery
    query={graphql`
      query PreviewHeadingQuery {
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
      return (
        <Heading
          text={getHeading(
            categories,
            isFirstPage,
            currentPage,
            totalPages,
            type,
            value,
          )}
        />
      );
    }}
  />
);

PreviewHeading.propTypes = {
  category: PropTypes.string.isRequired,
  block: PropTypes.bool,
};

PreviewHeading.defaultProps = {
  block: false,
};

export default PreviewHeading;
