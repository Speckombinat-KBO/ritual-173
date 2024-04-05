import Header from "./ru/Header/header";
import HAbout from "./ru/Header/habout";
import Footer from "./ru/footer";
import Home from "./ru/home";
export default defineI18nLocale(async (locale) => {
    return {
      Header: Header(),
      HAbout : HAbout(), 
      Footer: Footer(),
      Home: Home(),
    }
  });