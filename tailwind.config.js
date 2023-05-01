/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#221a93",

          secondary: "#f9bdf4",

          accent: "#89b2f9",

          neutral: "#2B273A",

          "base-100": "#ECECEE",

          info: "#5D7DEE",

          success: "#64DDCF",

          warning: "#D37817",

          error: "#ED789F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
