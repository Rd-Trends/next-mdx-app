import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./contents/**/*.mdx",
  ],
  safelist: [
    "text-custom__elite_blue",
    "text-custom__spacer",
    "text-custom__turtle_mos",
    "bg-brand",
    "bg-custom__elite_blue",
    "hover:bg-custom__elite_blue-700",
    "bg-custom__spacer",
    "hover:bg-custom__spacer-700",
    "bg-custom__turtle_mos",
    "hover:bg-custom__turtle_mos-700",
    "before:bg-custom__spacer",
    "before:bg-custom__turtle_mos",
    "before:bg-custom__elite_blue",
    "w-10/12",
    "!font-bold",
    "font-semibold",
    "columns-3",
    "columns-2",
    "list-disc",
    "pl-5",
    "pr-5",
    "!p-4",
    "w-1/4",
    "py-2",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          "2xl": "1440px",
        },
      },
      colors: {
        primary: "#F07C17",
        primary_dark: "#D26200",
        black: "#16284D",
        brand: "#F07C17",
        deepblue: "#16284D",
        default_heading: "#666666",
        light__orange: "#FDF2E8",
        custom__elite_blue: "#16284D",
        "custom__elite_blue-700": "#0d182e",
        custom__spacer: "#D58925",
        "custom__spacer-700": "#805216",
        custom__turtle_mos: "#9C9E19",
        "custom__turtle_mos-700": "#5e5f0f",
      },

      zIndex: {
        "-1": "-1",
        "100": "100",
      },

      backgroundColor: {
        grey_ccc: "#cccccc",
        custom__elite_blue: "#16284D",
        custom__spacer: "#D58925",
        custom__turtle_mos: "#9C9E19",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      borderColor: {
        grey_666: "#666666",
      },

      borderWidth: {
        1: "1px",
      },

      height: {
        hero: "650px",
        "6": "1.5em",
        "12": "6em",
      },

      width: {
        container: "1120px",
        "experience-button": "19em",
      },
      maxWidth: {
        layout: "1184px",
        "top-container": "1142px",
        container: "960px",
        intro_content: "960px",
        "hero-text": "650px",
        "1/4": "25%",
      },
      minWidth: {
        lg: "36em",
        md: "30em",
        sm: "24em",
      },

      fontSize: {
        "3-5xl": "2rem",
      },

      spacing: {
        "100px": "100px",
        "135px": "135px",
      },
    },
  },
  plugins: [],
};
export default config;
