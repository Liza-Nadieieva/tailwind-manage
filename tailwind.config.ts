import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brightRed: '#FF0000',
        brightRedLight: '#FF6666',
        brightRedSupLight: '#FF6666',
        darkBlue: '#00008B',
        darkGrayIshBlue: '#5A6D7E',
        veryDarkBlue: '#000033',
        veryPaleRed: '#FFB6C1',
        verylightGray: '#D3D3D3',
      },
    },
  },
  plugins: [],
} satisfies Config;
