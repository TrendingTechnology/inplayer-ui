const { rem } = require('polished');
const colors = require('./colors');

module.exports = {
  palette: {
    primary: {
      main: colors.deepSkyBlue,
      light: colors.skyBlue,
      dark: colors.navy,
    },
    secondary: {
      main: colors.blue,
      light: colors.mediumBlue,
      dark: colors.darkBlue,
    },
    text: {
      main: colors.fontDarkGray,
      light: colors.fontGray,
      disabled: colors.fontLightGray,
    },
  },
  dimensions: {
    baseGrid: 8,
    borderRadius: '2px',
  },
  font: {
    primary: 'Roboto',
    primaryFallback: 'Helvetica, Arial, sans-serif',
    weights: {
      thin: 100,
      light: 300,
      normal: 400,
      semiBold: 600,
      bold: 700,
    },
    sizes: {
      extraSmall: rem(12),
      small: rem(14),
      medium: rem(16),
      large: rem(18),
      h1: rem(40),
      h2: rem(36),
      h3: rem(32),
      h4: rem(28),
      h5: rem(24),
      h6: rem(20),
    },
  },
  padding: {
    sizes: {
      small: '10px 20px 11px',
      medium: '13px 22px 14px',
    },
  },
};
