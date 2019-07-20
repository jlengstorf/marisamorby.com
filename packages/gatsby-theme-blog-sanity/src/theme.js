const systemFontStack = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',');

export default {
  colors: {
    text: '#2b4b54',
    background: '#fff',
    primary: 'red',
    secondary: 'blue',
    accent: 'tomato',
    muted: '#627980',
  },
  fonts: {
    body: systemFontStack,
    heading: systemFontStack,
    monospace: 'monospace',
  },
  fontSizes: [14, 16, 18, 24, 28, 36, 48],
  fontWeights: {
    body: 'normal',
    heading: 'bold',
    bold: 'bold',
  },
  lineHeights: {
    body: 1.45,
    heading: 1.1,
  },
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256],
};
