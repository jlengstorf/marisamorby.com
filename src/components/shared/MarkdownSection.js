import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';

/*
 * NOTE: This component expects the data to match the shape of the query
 * fragment `MarkdownFragment` in `/src/utils/graphql-fragments.js`.
 */

const MarkdownSection = ({
  data: {
    markdownRemark: {
      frontmatter: { title, image },
      html,
    },
  },
  ...props
}) => (
  <Section
    title={title}
    imageSizes={image ? image.childImageSharp.sizes : false}
    html={html}
    {...props}
    isRawHTML
  />
);

MarkdownSection.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.shape({
          childImageSharp: PropTypes.shape({
            sizes: PropTypes.shape({
              src: PropTypes.string.isRequired,
              srcSet: PropTypes.string.isRequired,
              tracedSVG: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }),
      }).isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  isTinted: PropTypes.bool,
};

export default MarkdownSection;
