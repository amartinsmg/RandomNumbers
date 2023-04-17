// Configuration file for PostCSS plugins

const tailwindcss = require("tailwindcss");

/**
  Configuration object for PostCSS plugins
*/

module.exports = {
/**
  An array of PostCSS plugins to be used
*/

  plugins: ["postcss-preset-env", tailwindcss],
};
