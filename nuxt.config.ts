// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/app.css"],
  app: {
    head: {
      title: 'Sacred-AI ✨',
      meta: [
        { name: 'description', content: 'Sacred AI – Whispering light into conflict, reflection, and healing moments' }
      ]
    }
  }
})
