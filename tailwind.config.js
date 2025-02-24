/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hfon: "url('/src/assets/header.png')",
        gamburger: "url('/src/assets/gamburger_img.png')",
        sectin: "url('/src/assets/section_bg.png')",
        xarita: "url('/src/assets/mapp.png')"
      }
      
    },
  },
  plugins: [],
}

