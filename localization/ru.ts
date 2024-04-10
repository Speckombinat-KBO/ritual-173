import Header from "./ru/header"
import Graveyard from "./ru/graveyard"
import HAbout from "./ru/Header/habout"
import Footer from "./ru/footer"
import Home from "./ru/home"

export default defineI18nLocale(async (locale) => {
  return {
    Header: Header(),
    Graveyard: Graveyard(),
    HAbout: HAbout(),
    Footer: Footer(),
    Home: Home(),
  }
})
