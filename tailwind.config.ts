import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#1a2b4a',
          DEFAULT: '#1a2b4a',
        },
        accent: {
          blue: '#4a9fd8',
          DEFAULT: '#4a9fd8',
        },
        coral: '#ff6b6b',
        gold: '#d4a574',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
