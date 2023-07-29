/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "hsl(218, 28%, 13%)",
        intro: "hsl(217, 28%, 15%)",
        card: "hsl(219, 30%, 18%)",
        footer: "hsl(216, 53%, 9%)",
      },
      fontFamily: {
        railway: ["Railway", "sans-serif"],
        opensans: ['"Open Sans"', "sans-serif"],
      },
      backgroundImage: {
        curvyMobile: "url('./assets/bg-curvy-mobile.svg')",
        curvyDesktop: "url('./assets/bg-curvy-desktop.svg')",
        quote: "url('./images/bg-quotes.png')",
      },
      backgroundPosition: {
        30: "30px 0",
      },
      width: {
        300: "300px",
        360: "360px",
        400: "400px",
        460: "460px",
        560: "560px",
        580: "580px",
      },
      maxWidth: {
        290: "290px",
        400: "400px",
        560: "560px",
        580: "580px",
      },
    },
  },
  plugins: [],
};
