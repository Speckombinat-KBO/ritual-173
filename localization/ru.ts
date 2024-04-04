import Header from "./ru/header";
import Footer from "./ru/footer";
import Home from "./ru/home";
export default defineI18nLocale(async (locale) => {
    return {
      Header: Header(),
      Footer: Footer(),
      Home: Home(),
    }
  });