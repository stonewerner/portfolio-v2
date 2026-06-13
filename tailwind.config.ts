import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#FAFAFA",
        surface: "#FFFFFF",
        foreground: "#111111",
        muted: "#6B6B6B",
        border: "#E8E8E8",
        link: "#2563EB",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      maxWidth: {
        content: "640px",
      },
    },
  },
  plugins: [],
};

export default config;
