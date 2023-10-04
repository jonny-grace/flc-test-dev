/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gotham: ['GothamHTF', 'sans-serif'],
      },
      screens: {
        'sm': '640px',      // Small screens (mobile)
        'md': '768px',      // Medium screens (tablet)
        'lg': '1024px',     // Large screens (desktop)
        'xl': '1280px',     // Extra large screens (wide desktop)
      },
    },
  },
  // plugins: [require('tailwindcss-font-inter')],
 
}



