/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-app)",
        foreground: "var(--text-primary)",
        card: {
          DEFAULT: "var(--bg-card)",
          hover: "var(--bg-card-hover)",
        },
        border: "var(--border-color)",
        active: "var(--border-active)",
        muted: "var(--text-secondary)",
        subtle: "var(--text-tertiary)",
        brand: {
          blue: {
            DEFAULT: "var(--color-primary)",
            hover: "var(--color-primary-hover)",
          },
          green: {
            DEFAULT: "var(--color-success)",
            hover: "var(--color-success-hover)",
          },
          orange: {
            DEFAULT: "var(--color-warning)",
            hover: "var(--color-warning-hover)",
          },
          red: {
            DEFAULT: "var(--color-danger)",
          }
        }
      },
      borderRadius: {
        lg: "var(--border-radius-lg, 16px)",
        md: "var(--border-radius-md, 12px)",
        sm: "var(--border-radius-sm, 8px)",
      },
      boxShadow: {
        tactile: "0px 4px 0px 0px var(--border-active, #1F2937)",
        "tactile-hover": "0px 6px 0px 0px var(--border-active, #1F2937)",
        "tactile-active": "0px 2px 0px 0px var(--border-active, #1F2937)",
        "tactile-flat": "0px 4px 0px 0px var(--border-color, #E5E7EB)",
        "tactile-sm": "0px 2px 0px 0px var(--border-active, #1F2937)",
        "tactile-sm-hover": "0px 3px 0px 0px var(--border-active, #1F2937)",
        "tactile-sm-active": "0px 1px 0px 0px var(--border-active, #1F2937)",
      },
      fontFamily: {
        heading: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      transitionSpeed: {
        normal: "var(--transition-speed, 0.2s)",
      }
    },
  },
  plugins: [],
}
