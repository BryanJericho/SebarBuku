module.exports = {
  mode: "jit", // Aktifkan JIT mode
  content: ["./src/**/*.{html,js}", "./index.html"],
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
  plugins: [],
};
