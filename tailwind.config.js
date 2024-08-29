/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('src/assets/image.jpg')",
      },
    },
    // colors: {
    //   primary: "#003366",
    //   // secondary: "#F5F5DC",
    //   // tertiary: "#800020",
    //   // charcaol: "#333333",
    //   // ligtgray: "#F0F0F0",
    // },
  },
  plugins: [
    // require('@tailwindcss/forms')
  ],
};
