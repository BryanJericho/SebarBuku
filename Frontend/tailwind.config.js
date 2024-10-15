// tailwind.config.js
module.exports = {
  mode: "jit", // Aktifkan JIT mode
  content: [
    "./src/**/*.{html,js}",
    "./beranda.html",
    "./node_modules/flowbite/**/*.js", // Tambahkan ini untuk memastikan Flowbite terdeteksi
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3A6D8C",
        secondary: "#6A9AB0",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // Tambahkan plugin Flowbite di sini
  ],
};
