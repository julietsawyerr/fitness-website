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
          "gray-20":  "#F8F4EB",
          "gray-50":"#EFE6E6",
          "gray-100": "#DFCCCC",
          "gray-500":"#5E0000",
          "primary-100":"#FFE1E0",
          "primary-300":"#FFA6A3",
          "primary-500":"#",
          "secondary-400":"#",
          "secondary-500":"#",
      },
    },
  },
  plugins: [],
};
export default config;
