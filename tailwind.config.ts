import type { Config } from "tailwindcss";

const defaultScreenSizes = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  '2xl': '1440px',
  '3xl': '1600px',
}
const defaultFontSize = {
  'xs': '0.563rem',  // 9px
  'sm': '0.75rem', // 12px
  'base': '1rem',   // 16px
  'lg': '1.125rem', // 18px
  'xl': '1.333rem',  // 21.33px
  '2xl': '1.777rem',  // 28.43px
  '3xl': '2.369rem',// 37.9px
  '4xl': '3.157rem', // 50.52px
  '5xl': '4.209rem',    // 67.34px
  '6xl': '5.61rem',    // 89.76px
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ...defaultScreenSizes,
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
        DEFAULT: '#333333',
        dark: '#F2F2F2'
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
      'transparent': 'transparent',
    },
    fontFamily: {
      ptSans: ["PT_Sans", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      scopeOne: ["Scope_One", "sans-serif"],
    },
    fontSize: {
      ...defaultFontSize,
    },
    keyframes: {
      'slide-x': {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(calc(-250px*40))' },
      },
      'fading': {
        '0%': { opacity: '1' },
        '50%': { opacity: '0.3' },
        '100%': { opacity: '1' },
      },
      'mouseScrollDown': {
        '0%': { transform: 'translate(-50%,0)' },
        '70%': { transform: 'translate(-50%,100%)' },
        '100%': { transform: 'translate(-50%,0)' },
      }
    },
    animation: {
      'infinite-slide-x': 'slide-x 250s linear infinite',
      'fading': 'fading 1.2s ease infinite',
      'scrollDown': 'mouseScrollDown 1.2s ease-in-out infinite',
    }
  },
  plugins: [],
};
export default config;
