import { theme } from 'gatsby-theme-blog-sanity';
import merge from 'deepmerge';

export default merge(theme, {
  fonts: {
    heading: 'brandon-grotesque',
  },
  fontSizes: [70], // deepmerge concatenates arrays
  fontWeights: {
    heading: 400,
  },
  colors: {
    primary: '#a330f6',
    accent: '#faf6fa',
    secondary: '#470476',
    grayAlpha: '#2b4b5422',
  },
  breakpoints: ['550px'],
  sizes: {
    large: 540,
  },
  styles: {
    // This is probably abusing the system, but I’m setting up global typography
    // inside the Layout to avoid needing to inject a bunch of `Styled` stuff.
    Layout: {
      color: 'text',
      fontFamily: 'body',
      fontSize: 2,
      fontWeight: 'body',
      lineHeight: 'body',
      'h1,h2,h3,h4,h5,h6': {
        fontFamily: 'heading',
        fontWeight: 'heading',
        lineHeight: 'heading',
        'em,i,strong,b': { fontWeight: 'inherit' },
        '+ *': { mt: 4 },
      },
      h1: { fontSize: 6 },
      h2: { fontSize: 5, mt: 5 },
      h3: { fontSize: 4, mt: 5 },
      'h4,h5,h6': {
        color: 'text',
        fontSize: 3,
        letterSpacing: 2,
        mt: 5,
      },
      h4: { color: 'muted' },
      a: {
        padding: 1,
        ':hover,:active,:focus': {
          outline: '2px solid',
          outlineColor: 'secondary',
        },
      },
      li: { mt: 2 },
      blockquote: {
        color: 'muted',
        fontSize: [2, 3],
        fontStyle: 'italic',
        my: 5,
        paddingLeft: [5, 6],
        paddingRight: [3, 5],
        position: 'relative',
        '::before': {
          color: 'grayAlpha',
          content: '"“"',
          fontFamily: 'heading',
          fontSize: [6, 7],
          fontWeight: 'bold',
          lineHeight: 1,
          position: 'absolute',
          top: 0,
          left: [0, 4],
        },
        '> :last-child': {
          fontSize: '87.5%',
          textAlign: 'right',
        },
      },
      '.gatsby-image-wrapper img': { mt: 0 },
      '.screen-reader-text': {
        clip: 'rect(0 0 0 0)',
        overflow: 'hidden',
        position: 'absolute',
        height: '1px',
        width: '1px',
      },
    },
  },
});
