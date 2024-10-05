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
        p1: "#525252",
        p2: "#707070",
      },
    },
    fontFamily: {
      josefin: ["Josefin Sans"],
    },
    screens: {
      xs: { max: "330px" },
      s: { max: "480px" },
      m: { max: "600px" },
      l: { max: "1029px" },
      xl: { min: "1030px" },
      xxl: { min: "1440px" },
    },
  },
  plugins: [],
};
export default config;
