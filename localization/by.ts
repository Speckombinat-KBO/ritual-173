export default defineI18nLocale(async (locale) => {
    return {
      Core: Core(),
      Meta: Meta(),
      Errors: Errors(),
      Header: Header(),
      Footer: Footer(),
      Home: Home(),
    }
  });