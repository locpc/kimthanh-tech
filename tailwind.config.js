/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#363493",
        primary: "#2B3674",
        secondary: "#A3AED0",
        violet: "#4318FF",
      },
      boxShadow: {
        "3xl": "0px 0px 20px 0px #0000000A",
        "header": "0px 4px 4px 0px #00000008",
      },
    },
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        ".container": {
          "@apply mx-auto": {},
          "@apply px-4": {},
        },
        ".container-md": {
          "@apply max-w-[1228px]": {},
          "@apply mx-auto": {},
        },
      });
    },
  ],
};
