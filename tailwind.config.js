/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./*",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          500: "#FF7000",
          100: "#FFF1E6",
        },
        dark: {
          100: "#000000",
          200: "#0F1117",
          300: "#151821",
          400: "#212734",
          500: "#101012",
        },
        light: {
          900: "#FFFFFF",
          800: "#F4F6F8",
          850: "#FDFDFD",
          700: "#DCE3F1",
          500: "#7B8EC8",
          400: "#858EAD",
        },
        "accent-blue": "#1DA1F2",
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000000",
        blue: "#0066FF",
        lightblue: "#d9e8ff",
        darkpurple: "#241A24",
        lightgrey: "#F4F5F6",
        navyblue: "#00224A",
        darkblue: "#1E013A",
        offwhite: "rgba(255, 255, 255, 0.75)",
        lightblack: "rgba(0, 0, 0, 0.55)",
        bluish: "rgba(14, 13, 13, 0.75)",
        testColor: "rgba(54, 54, 54, 0.75)",
        grey: "#909090",
        bgblue: "#02398A",
        darkgrey: "#747474",
        faqblue: "#0861FF",
        gold: "#FAAF38",
        hoblue: "#0000FF",
        btnblue: "#267dff",
        bggrey: "#DDDDDD",
        footer: "rgba(226, 223, 223, 0.75)",
        linegrey: "#C4C4C4",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
        "65xl": ["65px", { lineHeight: "1" }],
        "80xl": ["80px", { lineHeight: "6rem" }],
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        spaceGrotesk: ["var(--font-spaceGrotesk)"],
      },
      boxShadow: {
        "light-100":
          "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.10)",
        "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
        "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)",
      },
      backgroundImage: {
        "auth-dark": "url('/assets/images/auth-dark.png')",
        "auth-light": "url('/assets/images/auth-light.png')",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1150px", // change the value of lg to 1150px
        xl: "1280px",
        "2xl": "1536px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
