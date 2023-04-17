/**
  Configuration object for Tailwind CSS.
    @property content - An array of file globs used for content extraction.
    @property theme - An object containing the theme configuration.
    @property theme.extend - An object containing the custom theme configuration to be added to the default Tailwind CSS theme.
    @property plugins - An array of plugins to be used with Tailwind CSS.
*/

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
