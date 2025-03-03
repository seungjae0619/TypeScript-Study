/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"JetBrains Mono"', "sans-serif"],
        body: ['"Source Sans Pro"', "sans-serif", "text-gray-500"],
        code: ['"Fira Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
