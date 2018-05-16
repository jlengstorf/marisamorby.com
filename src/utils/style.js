import { injectGlobal } from 'emotion';
import { css } from 'react-emotion';

export const addFonts = () =>
  injectGlobal`
    @font-face {
      font-family: eveleth;
      font-display: swap;
      font-style: normal;
      font-weight: normal;
      src: url('/fonts/edbwf.woff') format('woff');
    }

    @font-face {
      font-family: eveleth-shadow;
      font-display: swap;
      font-style: normal;
      font-weight: normal;
      src: url('/fonts/eswf.woff') format('woff');
    }
  `;

const colorDarkest = '#2b4b54';

export const color = {
  lightest: '#fff',
  darkest: colorDarkest,
  accent: '#39bbdf',
  accentDark: '#1791b3',
  textDefault: colorDarkest,
  textLight: '#627980',
};

export const sizing = {
  default: '18px',
  large: '21px',
};

export const font = {
  default: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    'Oxygen-Sans',
    'Ubuntu',
    'Cantarell',
    '"Helvetica Neue"',
    'sans-serif',
  ].join(),
  heading: 'eveleth',
  headingShadow: 'eveleth-shadow',
  lineHeight: 1.45,
};

export const button = css`
  display: block;
  background: ${color.accent};
  border: 2px solid ${color.lightest};
  border-radius: 0.5rem;
  box-shadow: 2px 2px ${color.accentDark};
  color: ${color.lightest};
  font-family: ${font.heading};
  font-size: 1.25rem;
  line-height: 2;
  margin-top: 2rem;
  max-width: 100%;
  text-align: center;
  text-decoration: none;
  text-shadow: 1px 2px 1px ${color.accentDark};
  transition: 100ms all linear;
  width: 300px;

  &:active,
  &:focus,
  &:hover {
    animation: 3s whoosh linear;
    background: ${color.accentDark};
    box-shadow: 1px 2px 1px ${color.darkest};
    cursor: pointer;
    outline: none;
  }

  @keyframes whoosh {
    0% {
      background: radial-gradient(
        circle at 100%,
        ${color.accentDark},
        ${color.accentDark} 50%,
        ${color.accent} 50%
      );
    }
    100% {
      background: radial-gradient(
        circle at 0%,
        ${color.accentDark},
        ${color.accentDark} 50%,
        ${color.accent} 50%
      );
    }
  }
`;

export const reset = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
  }

  * + * {
    margin-top: 1rem;
  }

  img {
    max-width: 100%;
  }
`;

const defaults = {
  duration: '150ms',
  easing: 'linear',
  property: 'all',
};

export const transition = {
  ...defaults,
  default: `${defaults.duration} ${defaults.property} ${defaults.easing}`,
};

export const typography = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${color.darkest};
    font-family: ${font.heading};
    font-weight: normal;
    line-height: 1;
    position: relative;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;

    /* Super-sweet multi-colored shadow effect! */
    &::after {
      color: ${color.accentDark};
      content: attr(data-text);
      font-family: ${font.headingShadow};
      left: 0;
      pointer-events: none;
      position: absolute;
      top: 0.12em;
    }

    em,
    i,
    strong,
    b {
      font-weight: normal;
    }
  }

  a {
    padding: 0.125em;

    &:hover,
    &:active,
    &:focus {
      outline: 2px solid ${color.accent};
    }
  }
`;

export default {
  addFonts,
  button,
  color,
  sizing,
  font,
  reset,
  transition,
  typography,
};
