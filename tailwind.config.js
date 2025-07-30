/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",        // Wajib untuk App Router
    "./components/**/*.{js,ts,jsx,tsx}", // Jika kamu punya folder components
  ],
  theme: {
    extend: {
      animation: {
        blink1: 'blink 1.5s infinite',
        blink2: 'blink 1.5s infinite 0.5s',
        blink3: 'blink 1.5s infinite 1s',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
      },
      fontFamily: {
        fira: ["var(--font-fira-code)", "monospace"],
        sourcePro: ["var(--font-source-code-pro)", "monospace"],
        ubuntu: ["var(--font-ubuntu-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
