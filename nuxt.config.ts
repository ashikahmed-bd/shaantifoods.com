// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  modules: ['@nuxt/ui', '@nuxtjs/supabase', '@nuxt/image'],

  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  supabase: {
    redirect: false,
  },

  runtimeConfig: {
    public: {
      supabase: {
        url: 'https://efejhwtqsqmyloltjfrq.supabase.co',
        key: 'sb_publishable_AtUyYi81o34-l1L25xds3g__2XlzeHZ'
      }
    }
  },
})