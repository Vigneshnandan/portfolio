import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          400: "#60A5FA",
          600: "#2563EB",
          700: "#1D4ED8",
          900: "#1E3A8A",
        },
      },
    },
  },
  plugins: [],
};

export default config;