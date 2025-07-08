/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "300px",
      md: "765px",
      lg: "1023px",
      xl: "1300px",
    },
    fontFamily: {
      nunito: ["Nunito", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      m: ["Montserrat", "sans-serif"],
    },
    extend: {
      animation: {
        hang: "hang  ease-in-out 1s infinite alternate",
      },
      keyframes: {
        hang: {
          "0%": {
            transform: "rotate(10deg)",
          },
          "100%": {
            transform: "rotate(-10deg)",
          },
        },
      },
      colors: {
        y: "#ffd60a",
        shake: "#fdf0d5",
        lB: "#fef9ff",
        white: "#ffffff",
        o: "#ff5400",
        pH: "#007bff",
        sH: "#010521",
        pureGreen: "#2de80c",
        p: "#8142f5",
        primary: "#0d1e67",
        lightBlue: "#fafcff",
        darkBlue: "#010521",
        lightGreen: "#048071",
        lightOrange: "#ef8b33",
        primaryGreen: "#048071",
        lG: "#d7ffe0",
        lo: "#ff7924",
        lt: "#00C0A7",
        g: "#00E97C",
        o1: "#FE5500",
        red: "#ff0000",
        o2: "#dc3545",
        sec: "#674df3",
        bg2: "#c6ffeb",
      },
    },
  },
  plugins: [],
};
//'o2':'#9b3503',
