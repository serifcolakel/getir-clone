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
        "sepet-border-renk": "#ffd300",
        "primary-button": "#ffda12",
      },
      backgroundImage: (theme) => ({
        "partner-food":
          "url('https://getir.com/_next/static/images/intro-foods-17936a3941c6c42663b203911b0e744d.svg')",
        "mobile-app":
          "url('https://cdn.getir.com/getirweb-images/common/illustration/doodle.png')",
      }),
    },
    variants: {
      extend: {
        fontSmoothing: ["hover", "focus"],
      },
    },
    plugins: [],
  },
};
