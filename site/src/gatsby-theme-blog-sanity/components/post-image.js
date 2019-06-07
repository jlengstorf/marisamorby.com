import React from 'react';
import { css } from '@emotion/core';
import BasePostImage from 'gatsby-theme-blog-sanity/src/components/post-image';

const PostImage = ({ image }) => (
  <BasePostImage
    css={css`
      border-radius: 50%;
      display: block !important;
      margin: 0 auto 2rem;
      max-width: 300px;
    `}
    image={image}
  />
);

export default PostImage;
