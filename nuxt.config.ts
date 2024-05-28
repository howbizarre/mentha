export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "nuxt-icon", "@nuxtjs/color-mode"],

  content: {
    highlight: {
      theme: "github-dark",
    },
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "preload",
          as: "style",
          onload: "this.onload = null; this.rel = 'stylesheet';",
          href: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&family=Noto+Serif+Display:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
    },

    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "slide", mode: "out-in" },
  },

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    viewer: true,
  },

  colorMode: { classSuffix: "" },

  devtools: { enabled: false },
});
