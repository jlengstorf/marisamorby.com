/** @jsx jsx */
import { jsx } from 'theme-ui';
import BasePost from 'gatsby-theme-blog-sanity/src/components/post';

const Post = ({ post }) => (
  <BasePost
    sx={{
      '.post-meta': {
        alignItems: 'center',
        borderBottom: '1px solid',
        borderTop: '1px solid',
        borderColor: 'grayAlpha',
        color: 'muted',
        display: 'flex',
        fontSize: 2,
        justifyContent: 'center',
        my: 4,
        mx: 0,
        padding: 3,
        '.gatsby-image-wrapper': {
          marginRight: 4,
          minWidth: 40,
        },
        img: {
          borderRadius: '50%',
        },
        '> p': {
          margin: 0,
        },
      },
      h1: {
        textAlign: 'center',
      },
    }}
    post={post}
  />
);

export default Post;
