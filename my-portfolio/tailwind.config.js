module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGreen: "#0FFF50",
        lightGray: "#D1D5DB",
        smokedBlue: "#7995fb",
      },
      fontFamily: {
        sans: ['"Nunito Sans"', "sans-serif"],
      },
      keyframes: {
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(100px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
