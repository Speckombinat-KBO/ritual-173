import Header from "./by/header";
import Footer from "./by/footer";
import Home from "./by/home";
export default defineI18nLocale(async (locale) => {
  return {
    Header: Header(),
    Footer: Footer(),
    Home: Home(),
  }
});