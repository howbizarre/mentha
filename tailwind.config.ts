import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["./components/**/*.vue", "./pages/**/*.vue", "./app.vue"],

  theme: {
    extend: {
      fontFamily: {
        serif: ["Noto Serif Display", "serif"],
        sans: ["Comfortaa", "sans-serif"],
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
