const defaults = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontFamilyHeading: 'brandon-grotesque',
  fontSize: '18px',
  fontWeight: 300,
};

export default {
  ...defaults,
  small: {
    ...defaults,
    fontSize: '14px',
  },
  heading: {
    ...defaults,
    fontFamily: `brandon-grotesque, ${defaults.fontFamily}`,
  },
};
