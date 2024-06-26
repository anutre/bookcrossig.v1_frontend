const THEME = require('./scripts/theme/theme');

module.exports = {
  important: true,
  content: ['./src/**/*.{html,js,ts}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      inherit: 'inherit',
      transparent: THEME.colors.transparent,
      red: {
        50: THEME.colors.red['50'],
        200: THEME.colors.red['200'],
        400: THEME.colors.red['400'],
        500: THEME.colors.red['500'],
        900: THEME.colors.red['900'],
      },
      pink: {
        50: THEME.colors.pink['50'],
        100: THEME.colors.pink['100'],
        300: THEME.colors.pink['300'],
        400: THEME.colors.pink['400'],
        500: THEME.colors.pink['500'],
      },
      black: {
        300: THEME.colors.black['300'],
        400: THEME.colors.black['400'],
        500: THEME.colors.black['500'],
        600: THEME.colors.black['600'],
        700: THEME.colors.black['700'],
        900: THEME.colors.black['900'],
      },
      white: {
        100: THEME.colors.white['100'],
        400: THEME.colors.white['400'],
        500: THEME.colors.white['500'],
      },
      gray: {
        50: THEME.colors.gray['50'],
        100: THEME.colors.gray['100'],
        200: THEME.colors.gray['200'],
        300: THEME.colors.gray['300'],
        400: THEME.colors.gray['400'],
        500: THEME.colors.gray['500'],
        600: THEME.colors.gray['600'],
        800: THEME.colors.gray['800'],
        900: THEME.colors.gray['900'],
      },
      blue: {
        400: THEME.colors.blue['400'],
        500: THEME.colors.blue['500'],
      },
      violet: {
        200: THEME.colors.violet['200'],
        400: THEME.colors.violet['400'],
        700: THEME.colors.violet['700'],
        900: THEME.colors.violet['900'],
      },
      green: {
        400: THEME.colors.green['400'],
      },
      orange: {
        400: THEME.colors.orange['400'],
      },
    },
  },
  plugins: ["tailwindcss ,autoprefixer"],
};
