import Header from "./ru/header"
import Graveyard from "./ru/graveyard"
import Footer from "./ru/footer"
import Home from "./ru/home"
import Banner from "./ru/banner"
import Staff from "./ru/staff"
import History from "./ru/history"
import Structure from "./ru/structure"
import SiteInfo from "./ru/siteInfo"

export default defineI18nLocale(async (locale) => {
  return {
    Header: Header(),
    Footer: Footer(),
    Home: Home(),
    Graveyard: Graveyard(),
    Banner: Banner(),
    Staff: Staff(),
    History: History(),
    Structure: Structure(),
    SiteInfo: SiteInfo(),
  }
})
