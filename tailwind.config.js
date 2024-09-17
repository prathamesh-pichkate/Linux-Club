/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        noto: ["Noto Sans", "sans-serif"],
      },
      colors: {
        customGray: "#1F2937",
      },
      screens: {
        sm: "480px", // Changing small screen breakpoint
        md: "768px", // Default medium breakpoint
        lg: "1024px", // Default large breakpoint
        xl: "1280px", // Default extra large breakpoint
        "2xl": "1536px", // Default 2xl breakpoint
        // You can add custom breakpoints
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
};
