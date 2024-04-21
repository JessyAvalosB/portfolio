import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primary': {
        DEFAULT: '#004B6F',
        dark: '#8FDBFF'
      },
      'secondary': {
        DEFAULT: '#702300',
        dark: '#FFB28F'
      },
      'acent': {
        DEFAULT: '#70004D',
        dark: '#FF8FDB'
      },
      'text-color': {
        DEFAULT: '#F2F2F2',
        dark: '#0D0D0D'
      },
      'blue': {
        900: '#00111A',
        800: '#00202F',
        700: '#002F44',
        600: '#003E59',
        500: '#004B6F',
        400: '#397693',
        300: '#72A1B7',
        200: '#ABCCDB',
        100: '#E5F7FF',
      },
      'brown': {
        900: '#1A0800',
        800: '#300F00',
        700: '#461600',
        600: '#5C1D00',
        500: '#702300',
        400: '#945639',
        300: '#B88972',
        200: '#DCBCAB',
        100: '#FFEEE5',
      },
      'purple': {
        900: '#1A0011',
        800: '#300020',
        700: '#46002F',
        600: '#5C003E',
        500: '#70004D',
        400: '#943978',
        300: '#B872A3',
        200: '#DCABCE',
        100: '#FFE5F7',
      },
      'gray': {
        900: '#0D0D0D',
        800: '#171717',
        700: '#212121',
        600: '#2B2B2B',
        500: '#333333',
        400: '#636363',
        300: '#939393',
        200: '#C3C3C3',
        100: '#F2F2F2',
      },
    },
    fontFamily: {
      ptSans: ["PT_Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      scopeOne: ["Scope_One", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
