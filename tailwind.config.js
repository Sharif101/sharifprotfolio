/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cupcake: "#EFEAE6",
        footer: "#3D4451",
        textcolor: "#969696",
      },
    },
  },
  plugins: [require("daisyui")],
};
