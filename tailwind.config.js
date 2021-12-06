const Colors = {
  "s-black": "#2A2C38",
};

module.exports = {
  purge: {
    enabled: true,
    content: ["src/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      ...Colors,
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
