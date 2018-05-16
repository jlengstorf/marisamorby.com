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
  overflow: hidden;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-shadow: 1px 2px 1px ${color.accentDark};
  width: 300px;

  span {
    position: relative;
    z-index: 10;
  }

  ::before,
  ::after {
    content: ' ';
    position: absolute;
    z-index: 1;
  }

  :active,
  :focus,
  :hover {
    cursor: pointer;
    outline: none;

    ::after {
      animation: 500ms bottomHalf ease-out 1 forwards;
      background: ${color.accentDark};
      z-index: 1;
    }

    ::before {
      animation: 500ms topHalf ease-in 1 forwards;
      background: ${color.accent};
      z-index: 2;
    }
  }

  @keyframes bottomHalf {
    0% {
      border-radius: 50% 50% 0 0;
      bottom: -10px;
      height: 10px;
      left: calc(50% - 5px);
      width: 10px;
    }
    10% {
      opacity: 1;
    }
    15% {
      border-radius: 50% 50% 0 0;
      height: 10px;
      left: 0;
      width: 100%;
    }
    50% {
      border-radius: 0;
      bottom: 0;
      height: 50%;
    }
    51% {
      height: 100%;
    }
    100% {
      border-radius: 0;
      bottom: 0;
      height: 100%;
      left: 0;
      opacity: 1;
      width: 100%;
    }
  }

  @keyframes topHalf {
    0% {
      height: 50%;
      left: 0;
      top: 0;
      width: 100%;
    }
    50% {
      top: 0;
      height: 50%;
      left: 0;
      width: 100%;
    }
    85% {
      border-radius: 0 0 50% 50%;
      height: 10px;
      left: 0;
      width: 100%;
    }
    100% {
      border-radius: 0 0 50% 50%;
      top: -10px;
      height: 10px;
      left: calc(50% - 5px);
      width: 10px;
    }
  }
`;

export const reset = () =>
  injectGlobal`
    html,
    body,
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

export const typography = () =>
  injectGlobal`
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

    .screen-reader-text {
      clip: rect(0 0 0 0);
      overflow: hidden;
      position: absolute;
      height: 1px;
      width: 1px;
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
