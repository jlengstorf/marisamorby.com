import React from 'react';
import GatsbyImage from 'gatsby-image';

const PostImage = ({ image, ...props }) =>
  image &&
  image.asset && (
    <GatsbyImage {...props} fixed={image.asset.fixed} alt={image.alt} />
  );

export default PostImage;
