import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: ["./components/**/*.vue", "./pages/**/*.vue", "./app.vue"],

  theme: {
    extend: {
      fontFamily: {
        serif: ["Spectral", "serif"],
        sans: ["Sofia Sans Condensed", "sans-serif"],
      },
    },
  },

  plugins: [],
};
