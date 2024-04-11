import Header from "./ru/header"
import Graveyard from "./ru/graveyard"
import HAbout from "./ru/Header/habout"
import Footer from "./ru/footer"
import Home from "./ru/home"
import Banner from "./ru/banner"
import Staff from "./ru/staff"

export default defineI18nLocale(async (locale) => {
  return {
    Header: Header(),
    HAbout: HAbout(),
    Footer: Footer(),
    Home: Home(),
    Graveyard: Graveyard(),
    Banner: Banner(),
    Staff: Staff(),
  }
})
