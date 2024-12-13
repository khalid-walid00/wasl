
import {nextui} from "@nextui-org/react";
import { sub } from "date-fns";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",  
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 1s linear infinite',
        'spin-slow': 'spin 3s linear infinite',

      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }},
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens:{
        xxs: "320px",
        xs:"410px",
        sm:"576px",
        md:"768px",
        lg:"992px",
        xl:"1200px",
        "2xl":"1400px",
      },
      fontFamily: {
        custom: ['SFArabic', 'sans-serif'],
      },
      container:{
        center:true,
        padding: {
          DEFAULT: "0.5rem",
          sm: "0.5rem",
          md: "1rem",
          lg: "2rem",
          xl: "3rem",
          "2xl": "4rem",
        }
      },
      colors:{
     
        mainColor:"#008ffb",
        subColor:"#6C6D6E",
        blackBlue: "#333333",
        grayG: "#A1A1A1",
        graySad:"#8B8B8B",
        grayWhite:"#F2F2F2",
        gray4White:"#F4F4F4",
        orange:"#DB9C00",
        lightgreen:"#008ffb"
      }
    }, 
  },
  // darkMode: "class",
  plugins: [
    nextui()
  ],
};

// veryDarkPurple:"#100027",
