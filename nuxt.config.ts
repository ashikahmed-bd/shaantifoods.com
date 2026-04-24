// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  css: ['./app/assets/css/main.css'],
  
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: ['@nuxt/ui'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      bodyAttrs: {
        class: 'antialiased text-base  font-body text-dark overflow-x-hidden',
      },
      
    },
  },
})
