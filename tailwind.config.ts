import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00ADB5",   
        secondary: "#9D4EDD",
        accent: "#FF8C32",  
      },
      fontFamily: {
             sans: ['Poppins', 'Vazirmatn', 'ui-sans-serif', 'system-ui'],
             heading: ["Poppins", "sans-serif"],
             poppins: ['Poppins', 'sans-serif'],
             inter: ['Inter', 'sans-serif'],
             outfit: ['Outfit', 'sans-serif'],
             raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
