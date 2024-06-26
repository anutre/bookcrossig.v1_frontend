const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfig = require('../tailwind.config.js')

const { theme } = resolveConfig(tailwindConfig);

const themeColors = { color: theme.colors };

const type = Object.keys(themeColors);
const colors = Object.keys(themeColors[type]);
const tokens = {
  [type]: {},
};

colors.forEach(color => {
  if (themeColors[type][color] instanceof Object) {
    const variants = Object.keys(themeColors[type][color]);
    variants.forEach(variant => {
      Object.assign(tokens[type], { [`${color}-${variant}`]: { value: themeColors[type][color][variant] } });
    });

    return;
  }

  Object.assign(tokens[type], { [color]: { value: themeColors[type][color] } });
});

module.exports = {
  tokens: tokens[type],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: 'src/assets/',
      files: [
        {
          destination: 'style/variables/_colors.scss',
          format: 'scss/variables',
        },
      ],
    },
  },
};
