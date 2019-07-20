/** @jsx jsx */
import { jsx } from 'theme-ui';
import BasePostPreview from 'gatsby-theme-blog-sanity/src/components/post-preview';

const PostPreview = ({ post }) => (
  <BasePostPreview
    sx={{
      marginTop: 6,
      '.gatsby-image-wrapper': {
        display: 'block !important' /* whyyyyyyy?! */,
        margin: '0 auto',
        minWidth: 150,
        img: {
          borderRadius: '50%',
        },
      },
      '.preview-text': {
        h2: {
          fontSize: 4,
          margin: 0,

          a: {
            color: 'inherit',
            textDecoration: 'none',
          },
        },
      },
      '.read-link': {
        borderBottom: '1px solid',
        borderTop: '1px solid',
        borderColor: 'grayAlpha',
        color: 'muted',
        display: 'block',
        fontSize: 1,
        px: 3,
        py: 0,
        textAlign: 'center',
        textDecoration: 'none',
        textTransform: 'uppercase',
      },
      '@media (min-width: 540px)': {
        alignItems: 'flex-start',
        display: 'flex',
        justifyContent: 'space-between',
        '.preview-text': {
          marginLeft: 5,
          marginTop: 0,
        },
      },
    }}
    post={post}
  />
);

export default PostPreview;
