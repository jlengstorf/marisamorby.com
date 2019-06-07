import React from 'react';
import { css } from '@emotion/core';
import BasePost from 'gatsby-theme-blog-sanity/src/components/post';
import { colors } from 'gatsby-theme-blog-sanity/src/tokens';

const Post = ({ post }) => (
  <BasePost
    css={css`
      .post-meta {
        align-items: center;
        border-bottom: 1px solid ${colors.black}22;
        border-top: 1px solid ${colors.black}22;
        color: ${colors.textLight};
        display: flex;
        font-size: 0.875rem;
        justify-content: center;
        margin: 1rem 0;
        padding: 1rem;

        .gatsby-image-wrapper {
          min-width: 40px;
        }

        img {
          border-radius: 50%;
        }

        p {
          margin: 0 0 0 0.75rem;
        }
      }

      h1 {
        text-align: center;
      }
    `}
    post={post}
  />
);

export default Post;
