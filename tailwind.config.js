/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",

    "./slices/**/*.{js,ts,jsx,tsx}",
    "./src/slices/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        card_width: "var(--card_width)",
      },
      padding: {
        wrapper_x: "var(--wrapper_padding_x)",
        wrapper_y: "var(--wrapper_padding_y)",
      },
      gridTemplateColumns: {
        pinterest_col: "repeat(auto-fill, var(--card_width))",
      },
      gridAutoRows: {
        pinterest_auto: "var(--row_increment)",
      },
      borderRadius: {
        card_border_radius: "var(--card_border_radius)",
      },
      gridRowEnd: {
        card_small: "span var(--card_small)",
        card_med: "span var(--card_med)",
        card_large: "span var(--card_large)",
      },
      keyframes: {
        "auto-scroll": {
          "0%": { transform: "translate(0)" },
          "100%": { transform: "translate(-20%)" },
        },
        "underline-from-left": {
          "0%": {
            width: "0%",
            transform: "translateX(0%)",
          },
          "100%": {
            width: "100%",
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        marquee: "auto-scroll 30s linear infinite",
        fasterMarquee: "auto-scroll 20s linear infinite",
        underlineFromLeft: "underline-from-left 0.5s ease-in-out",
      },
      screens: {
        xs: "420px",
      },
      colors: {
        primary: "#F7F1E7",
        secondary: "#102f10",
        tertiary: "#95a595",
      },
      fontFamily: {
        header: ["Raleway", "sans-serif"],
        display: ["DM Serif Display", "serif"],
        title: ["Roboto", "sans-serif"],
        body: ["PT Serif", "serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      height: {
        "header-height": "var(--header-height)",
        "announcement-bar": "35px",
        "scrolling-bar": "56px",
      },
      spacing: {
        "announcement-bar": "35px",
      },
    },
  },
  plugins: [],
};
