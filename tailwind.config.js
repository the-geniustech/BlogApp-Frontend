/** @type {import('tailwindcss').Config} */
import hideScrollBar from "tailwind-scrollbar";

// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },

    extend: {
      // screens: {
      //   xs: "480px",
      //   sm: "640px",
      //   md: "768px",
      //   lg: "1024px",
      //   xl: "1280px",
      //   "2xl": "1536px",
      // },
      // maxWidth: {
      //   xs: "480px",
      //   sm: "640px",
      //   md: "768px",
      //   lg: "1024px",
      //   xl: "1280px",
      //   "2xl": "1536px",
      // },
      // fontSize: {
      //   huge: ["80rem", { lineHeight: "1" }],
      // },
      // height: {
      //   screen: "100dvh",
      // },

      animation: {
        "spin-slow": "spin 1.5s linear infinite",
      },

      colors: {
        dark: "#1A202C",
        "dark-2": "#2D3748",
        "dark-6": "#718096",
        "primary-dark": "#060F0A",
        "primary-dark-1": "#112C1D",
        "primary-dark-2": "#173A27",
        "primary-dark-3": "#1D4931",
        primary: "#3758F9",
        "primary-2": "#4DC39E",
        "primary-light": "#6EE7B7",
        "primary-light-2": "#bfdcc5",
        "primary-light-3": "#fbfefd",
        "primary-light-4": "#e9f8f3",
        secondary: "#1c2c7d",
        tertiary: "#280808",
        blue: {
          dark: "#1E3A8A",
        },
        // Add more brand colors as needed
        brand: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        /* "brand-50": "#eef2ff",
        "brand-100": "#e0e7ff",
        "brand-200": "#c7d2fe",
        "brand-500": "#6366f1",
        "brand-600": "#4f46e5",
        "brand-700": "#4338ca",
        "brand-800": "#3730a3",
        "brand-900" : "#312e81",*/
        // bodyColor: "#464646",
        // white: "#FFFFFF",
        // gray: "#CCCCCC",
        // "gray-1": "#B3B3B3", // Grey-1
        // "gray-2": "#f0f0f0", // Grey-2
        // // Add more shades of gray as needed
      },
    },
    // container: {
    //   center: true,
    //   padding: "1rem",
    //   screens: {
    //     "3xs": "240px",
    //     "2xs": "320px",
    //     xs: "480px",
    //     sm: "640px",
    //     md: "768px",
    //     lg: "1024px",
    //     xl: "1280px",
    //     "2xl": "1536px",
    //   },
    // },
  },
  plugins: [hideScrollBar({ nocompatible: true })],
};

/*
  sm (640px)	max-width: 640px;
md (768px)	max-width: 768px;
lg (1024px)	max-width: 1024px;
xl (1280px)	max-width: 1280px;
2xl (1536px)
*/
