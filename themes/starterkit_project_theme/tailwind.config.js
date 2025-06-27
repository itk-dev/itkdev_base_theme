const baseThemeConfig = require('../../contrib/itkdev_base_theme/tailwind.config')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "../../contrib/itkdev_base_theme/templates/**/*.{twig,html}",
    "../../contrib/itkdev_base_theme/js/**/*.js",
    "./templates/**/*.{twig,html}",
    "./assets/js/**/*.js",
  ],

  plugins: [require("@tailwindcss/forms")],
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      zinc: colors.zinc,
    },
  }
};

// Merge project specific config.
module.exports = deepMerge(baseThemeConfig, module.exports);

/**
 * Merge base config with project config.
 *
 * @param obj1
 * @param obj2
 * @returns {*}
 */
function deepMerge(obj1, obj2) {
  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (obj2[key] instanceof Object && obj1[key] instanceof Object) {
        obj1[key] = deepMerge(obj1[key], obj2[key]);
      } else {
        obj1[key] = obj2[key];
      }
    }
  }
  return obj1;
}
