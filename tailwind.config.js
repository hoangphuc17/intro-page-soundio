const defaultTheme = require("tailwindcss/defaultTheme");
const Colors = {
  "s-black": "#0f1113",
  "s-black-2": "#252b31",
  "s-gray": "#87929d",
  "border-line": "#2b333b",
  primary: "#007af0",
  "neutral-tile-active": "#fcfcfc",
  "neutral-body": "#C8CCD0",
};
const BlogColors = {
  primary: "#007af0",
  "neutral-bg": "#181f25",
  "neutral-dark": "#292929",
  "neutral-tile-active": "#fcfcfc",
  mischka: "#a6adb4",
  rhino: "#414850",
  "black-pearl": "#14181b",
  "black-chinese": "#0f1113",
};
module.exports = {
  mode: "jit",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["docs/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: (theme) => ({
      ...defaultTheme.fontSize,
      h1: [
        "80px",
        {
          lineHeight: "88px",
          letterSpacing: "-0.03em",
        },
      ],
      h2: [
        "48px",
        {
          lineHeight: "56px",
          letterSpacing: "-0.03em",
        },
      ],
      h3: [
        "32px",
        {
          lineHeight: "40px",
          letterSpacing: "-0.03em",
        },
      ],
      caption1: [
        "24px",
        {
          lineHeight: "32px",
          letterSpacing: "-0.02em",
        },
      ],
      caption2: [
        "20px",
        {
          lineHeight: "32px",
          letterSpacing: "-0.02em",
        },
      ],
      caption3: [
        "18px",
        {
          lineHeight: "28px",
          letterSpacing: "-0.02em",
        },
      ],
    }),
    extend: {
      fontFamily: {
        "primary-bold": ["Inter-Bold", "sans-serif"],
        "primary-medium": ["Inter-Medium", "sans-serif"],
        "primary-regular": ["Inter-Regular", "sans-serif"],
        "primary-thin": ["Inter-Thin", "sans-serif"],
        "secondary-medium": ["Manrope-Medium", "sans-serif"],
        "secondary-regular": ["Manrope-Regular", "sans-serif"],
      },
      colors: {
        ...Colors,
        ...BlogColors,
      },
      borderColor: {
        ...Colors,
        ...BlogColors,
      },
      textColor: {
        ...Colors,
        ...BlogColors,
      },
      backgroundColor: {
        ...Colors,
        ...BlogColors,
      },
      gridTemplateColumns: {
        "1fr-auto": "1fr auto",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
