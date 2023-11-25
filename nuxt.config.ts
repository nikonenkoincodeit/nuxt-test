// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@pinia/nuxt"],
  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 3000,
  },
});
