import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        success: "rgba(67, 238, 125, 1)",
        danger: "rgba(238, 67, 67, 1)",
        borderColor: "rgba(255, 255, 255, 0.1)",
        secondaryBg: "rgba(17, 17, 17, 1)",
        blue: "rgba(38, 112, 233, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
