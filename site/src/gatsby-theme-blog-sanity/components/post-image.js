/** @jsx jsx */
import { jsx } from 'theme-ui';
import BasePostImage from 'gatsby-theme-blog-sanity/src/components/post-image';

const PostImage = ({ image }) => (
  <BasePostImage
    sx={{
      borderRadius: '50%',
      // gatsby-image adds inline styles, so we have to hack around them
      display: 'block !important',
      marginTop: 0,
      mx: 'auto',
      marginBottom: 5,
      maxWidth: 300,
    }}
    image={image}
  />
);

export default PostImage;
