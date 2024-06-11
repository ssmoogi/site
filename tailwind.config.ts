import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      lavender: '#eed6ff',
      purple: '#7e53a3',
      dark: '#37114f',
    },
    extend: {},
  },
  plugins: [],
};
export default config;
