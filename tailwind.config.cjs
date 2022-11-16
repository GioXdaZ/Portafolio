/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#44403c",

          secondary: "#78716c",

          accent: "#4f46e5",

          neutral: "#a8a29e",

          "base-100": "#2A303C",

          info: "#2563eb",

          success: "#65a30d",

          warning: "#facc15",

          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
