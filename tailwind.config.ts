import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: {
        marine: "#02295a",
        purplish: "#473dff",
        pastel: "#adbeff",
        light: "#bfe2fd",
      },
      gray: {
        cool: "#9699ab",
        light: "#d6d9e6",
      },
      "strawberry-red": "#ed3548",
      magnolia: "#f0f6ff",
      alabaster: "#fafbff",
      white: "#ffffff",
    },
  },
  plugins: [],
};
export default config;
