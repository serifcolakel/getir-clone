module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "brand-yellow": "#FFFF00",
        "brand-color": "#4c3398",
        "brand-gray": "#697488",
        "gray-background": "#fafafa",
        "primary-brand-color-lights": "#f3f0fe",
        "primary-brand-color": "#5d3ebc",
        "primary-white": "#FFFFFF",
        "secondary-brand-color": "#7849f7",
      },
    },
    variants: {
      extend: {
        fontSmoothing: ["hover", "focus"],
      },
    },
    plugins: [],
  },
};
