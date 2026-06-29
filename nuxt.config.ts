// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    "./app/assets/css/main.css",
    "bootstrap-icons/font/bootstrap-icons.css",
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "@nuxt/image",
    "@nuxtjs/seo",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
    "@pinia/nuxt",
  ],

  // Nuxt SEO / Site Config
  site: {
    url: "https://chayacollection.my.id",
    name: "Chaya Collection",
    description:
      "Jasa jahit & toko perlengkapan jahit terpercaya di Matesih, Karanganyar. Berpengalaman lebih dari 25 tahun melayani pelanggan dengan hasil jahitan berkualitas.",
    defaultLocale: "id",
  },

  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap",
        },
      ],
    },
  },

  image: {
    quality: 80,
    format: ["webp"],
  },

  ogImage: {
    zeroRuntime: true,
  },
});
