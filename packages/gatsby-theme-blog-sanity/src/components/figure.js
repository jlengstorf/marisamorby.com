import React from 'react';
import GatsbyImage from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import { css } from '@emotion/core';
import sanityConfig from '../sanity/config';
import { colors } from '../tokens';

const Figure = ({ node }) => {
  const fluid = getFluidGatsbyImage(
    node.asset._id,
    { maxWidth: 540 },
    ...sanityConfig,
  );

  // only use Gatsby images for JPG/PNG images
  const image = node.asset.extension.match(/(jpe?g|png)/) ? (
    <GatsbyImage fluid={fluid} alt={node.alt} />
  ) : (
    <img src={node.asset.url} alt={node.alt} />
  );

  return (
    <figure
      css={css`
        margin-bottom: 1.5rem;
        margin-left: auto;
        margin-right: auto;

        img {
          margin: 0;
          width: 100%;
        }
      `}
    >
      {image}
      {node.caption && (
        <figcaption
          css={css`
            color: ${colors.textLight};
            font-size: 87.5%;
            margin-top: 0.5rem;

            a {
              color: inherit;
            }
          `}
          dangerouslySetInnerHTML={{ __html: node.caption }}
        />
      )}
    </figure>
  );
};

export default Figure;
