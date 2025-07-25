/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",        // Wajib untuk App Router
    "./components/**/*.{js,ts,jsx,tsx}", // Jika kamu punya folder components
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ["var(--font-fira-code)", "monospace"],
        sourcePro: ["var(--font-source-code-pro)", "monospace"],
        ubuntu: ["var(--font-ubuntu-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
