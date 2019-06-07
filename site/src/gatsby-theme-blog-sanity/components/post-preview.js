import React from 'react';
import { css } from '@emotion/core';
import BasePostPreview from 'gatsby-theme-blog-sanity/src/components/post-preview';
import { colors } from '../../tokens';

const previewStyles = css`
  margin-top: 3rem;

  .gatsby-image-wrapper {
    display: block !important; /* whyyyyyyy?! */
    margin: 0 auto;
    min-width: 150px;

    img {
      border-radius: 50%;
    }
  }

  .preview-text {
    h2 {
      font-size: 1.5rem;
      margin: 0;

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }

  .read-link {
    border-bottom: 1px solid ${colors.black}22;
    border-top: 1px solid ${colors.black}22;
    color: ${colors.textLight};
    display: block;
    font-size: 0.875rem;
    padding: 0.5rem 0;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
  }

  @media (min-width: 540px) {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;

    .preview-text {
      margin-left: 1rem;
      margin-top: 0;
    }
  }
`;

const PostPreview = ({ post }) => (
  <BasePostPreview css={previewStyles} post={post} />
);

export default PostPreview;
