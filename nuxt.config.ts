// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@nuxtjs/i18n", "@nuxt/image"],
  i18n: {
    locales: [
      {
        name: "Русский",
        code: "ru",
        iso: "ru-RU",
        file: "ru.ts",
      },
      {
        name: "Беларускі",
        code: "by",
        iso: "ru-BY",
        file: "by.ts",
      },
    ],
    defaultLocale: "ru",
    lazy: true,
    langDir: "localization",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "lang",
      redirectOn: "all",
      alwaysRedirect: true,
    },
  },
  typescript: {
    typeCheck: false,
    strict: true,
  },
})
