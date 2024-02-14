// import heroImage from "./src/assets/dna.jfif";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ecc1",
        primaryDark: "#269984",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      keyframes: {
        fadeInLeft: {
          "0%": {
            transform: "translateX(-50%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },

        fadeIn: {
          "0%": {
            transform: "translateX(20%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },

        fadeInRight: {
          "0%": {
            transform: "translateX(50%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
      },

      animation: {
        fadeIn: "fadeIn 300ms linear forwards",
        fadeInLeft: "fadeInLeft 400ms linear forwards",
        fadeInRight: "fadeInRight 400ms linear forwards",
      },

      backgroundImage: {
        heroImage: "url('./dna.jfif')",
      },
    },
  },
  plugins: [],
};
