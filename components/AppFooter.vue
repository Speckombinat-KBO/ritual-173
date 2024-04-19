<template>
  <footer>
    <div class=".container">
      <div class="footer-top-row">
        <div class="footer-list">
          <ul>
            <li
              v-for="(link, index) in getLinks()"
              :key="link.locale"
              class="list-item"
            >
              <NuxtLink :to="link.link" class="list-link">{{
                link.locale
              }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer-list">
          <ul>
            <li
              v-for="(contact, index) in getContacts()"
              :key="contact.locale"
              class="list-item"
            >
              <NuxtImg class="icon" :src="contact.src" alt="Icon"></NuxtImg>
              <NuxtLink :to="contact.link" target="blank" class="list-link">{{
                contact.locale
              }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="footer-list">
          <ul>
            <li
              v-for="(contact, index) in getPhones()"
              :key="contact.locale"
              class="list-item"
            >
              <NuxtLink
                :to="'tel:' + contact.locale.split(' ')[0]"
                class="list-link"
                >{{ contact.locale }}</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="footer-banners-row">
        <NuxtLink
          v-for="item in banners"
          :key="item.title"
          :to="item.link"
          target="blank"
          ><NuxtImg :src="item.image"></NuxtImg
        ></NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t, tm } = useI18n()
const banners = tm("Banner.banners")

export interface ILink {
  locale: string
  name: string
  link: string
}

export interface IContact {
  locale: string
  src: string
  link: string
}

export interface IPhone {
  locale: string
}

const getLinks = () => {
  const links: Array<ILink> = [
    {
      locale: t("Footer.Links.Home"),
      name: "index",
      link: "/",
    },
    {
      locale: t("Footer.Links.About"),
      name: "about",
      link: "/about",
    },
    {
      locale: t("Footer.Links.News"),
      name: "news",
      link: "/news",
    },
    {
      locale: t("Footer.Links.Vacancies"),
      name: "vacancies",
      link: "/vacancies",
    },
    {
      locale: t("Footer.Links.Map"),
      name: "map",
      link: "/site-map",
    },
  ]
  return links
}

const getContacts = () => {
  const links: Array<IContact> = [
    {
      locale: t("Footer.Contacts.Email"),
      src: "/icons/email.svg",
      link: "mailto:speckombinat@ritual-minsk.by",
    },
    {
      locale: t("Footer.Contacts.Address"),
      src: "/icons/map-pin.svg",
      link: "https://yandex.by/profile/135085402853",
    },
  ]
  return links
}

const getPhones = () => {
  const links: Array<IPhone> = [
    {
      locale: t("Footer.Phones.Short"),
    },
    {
      locale: t("Footer.Phones.OrderServices"),
    },
    {
      locale: t("Footer.Phones.Products"),
    },
    {
      locale: t("Footer.Phones.Monument"),
    },
    {
      locale: t("Footer.Phones.OrderServicesLandline"),
    },
    {
      locale: t("Footer.Phones.ProductsLandLine"),
    },
  ]
  return links
}
</script>

<style scoped>
footer {
  background-color: #0065b1;
  padding: 20px 0px 20px 0px;
}

.footer-top-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 20px;
}

.footer-top-row a {
  display: flex;
}

.footer-banners-row {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 1.5rem;
  row-gap: 0.5rem;
  margin: 20px 0px 0px 0px;
}

.footer-banners-row img {
  height: 50px;
  width: 100%;
}

.icon {
  display: flex;
  height: 20px;
  width: 20px;
  margin-right: 4px;
}

.list-item {
  display: flex;
  align-items: center;
  color: #ffffff;
}

.list-item:not(:last-child) {
  margin-bottom: 4px;
}

.list-item:hover {
  opacity: 0.8;
}

.list-link {
  color: #ffffff;
}

/* TABLET */
@media (max-width: 991.98px) {
  .footer-top-row {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
  }
}

/* MOBILE */
@media (max-width: 767.98px) {
  .footer-top-row {
    grid-template-columns: repeat(1, 1fr);
    font-size: 14px;
  }
}
</style>
