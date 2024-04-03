// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    pageTransition: { name: "page", mode: "out-in" }
  },
  modules: [
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
        {
            name: "English",
            code: "en",
            iso: "en-US",
            file: "en.ts"
        },
        {
            name: "Русский",
            code: "ru",
            iso: "ru-RU",
            file: "ru.ts"
        }
    ],
    defaultLocale: "en",
    lazy: true,
    langDir: "localization",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: "lang",
        redirectOn: "all",
        alwaysRedirect: true
    }
},
  typescript: {
      typeCheck: false,
      strict: true
  }
});
