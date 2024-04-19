<script setup lang="ts">

import type { LocaleObject } from "@nuxtjs/i18n"
import type header from "~/localization/ru/header"
import { ref } from "vue"

const { t, locales, locale, fallbackLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()
const config = useRuntimeConfig()
const isMenuOpen = ref(false)

export interface ILocale {
  code: string
  name: string
}
export interface ILink {
  locale: string
  name: string
  link: string
}

const getLinks = () => {
  const links: Array<ILink> = [
    {
      locale: t("Header.Home.Name"),
      name: "index",
      link: "/",
    },
    {
      locale: t("Header.About.Name"),
      name: "about",
      link: "/about",
    },
    {
      locale: t("Header.Tribulation.Name"),
      name: "tribulation",
      link: "/tribulation",
    },
    {
      locale: t("Header.Shop.Name"),
      name: "shop",
      link: "https://ritual-minsk.by/",
    },
    {
      locale: t("Header.Contacts.Name"),
      name: "contacts",
      link: "/about/contacts",
    },
    {
      locale: t("Header.News.Name"),
      name: "news",
      link: "/news",
    },
  ]
  return links
}

const getAboutLinks = () => {
  const links: Array<ILink> = [
    {
      locale: t("Header.About.Links.Contacts"),
      name: "managment",
      link: "/about/contacts",
    },
    {
      locale: t("Header.About.Links.History"),
      name: "history",
      link: "/about/history",
    },
    {
      locale: t("Header.About.Links.Structure"),
      name: "structure",
      link: "/about/structure",
    },
    {
      locale: t("Header.About.Links.Vacancies"),
      name: "vacancies",
      link: "/about/vacancies",
    },
  ]
  return links
}
</script>

<template>
  <header>
    <div class="first-row">
      <div class=".container">
        <div class="first-row-wrapper">
          <div class="header-content">
            <NuxtLink to="/" class="header-link">
              <NuxtImg src="/images/logo.png" alt="Logo" />
              <p class="header-title">КУП СПЕЦКОМБИНАТ КБО</p>
            </NuxtLink>
          </div>
          <div class="header-contacts">
            <p>г.Минск, ул. Ольшевского 12</p>
            <p>
              Телефон:
              <NuxtLink to="tel:+375(29)173-0-173">+375(29)173-0-173</NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="second-row">
      <div class=".container">
        <nav class="navigation">
          <ul class="navigation-list">
            <li
              class="list-item"
              v-for="(item, index) in getLinks()"
              :key="item.name"
              :class="{ 'dropdown-list-item': item.locale === 'О нас' }"
            >
              <template v-if="item.locale !== 'О нас'">
                <NuxtLink class="list-item-link" :to="item.link">
                  {{ item.locale }}
                </NuxtLink>
              </template>
              <template v-else>
                <NuxtLink class="list-item-link" :to="item.link">
                  {{ item.locale }}
                </NuxtLink>
                <ul class="dropdown-menu">
                  <li
                    class="dropdown-menu-item"
                    v-for="(subItem, subIndex) in getAboutLinks()"
                    :key="subIndex"
                  >
                    <NuxtLink
                      class="dropdown-menu-item-link"
                      :to="subItem.link"
                    >
                      {{ subItem.locale }}
                    </NuxtLink>
                  </li>
                </ul>
              </template>
            </li>
          </ul>
          <div class="nav-toggle" @click="isMenuOpen = !isMenuOpen">
            <NuxtImg class="burger" src="/icons/burger.svg" />
          </div>
          <div class="navigation-menu" v-show="isMenuOpen">
            <ul class="navigation-menu-list">
              <li
                class="list-item"
                v-for="(item, index) in getLinks()"
                :key="item.name"
              >
                <NuxtLink class="list-item-link" :to="item.link">
                  {{ item.locale }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.first-row {
  background-color: transparent;
  padding: 15px 0px;
}

.first-row-wrapper {
  display: flex;
  justify-content: space-between;
}

.header-link {
  display: flex;
  align-items: center;
  color: #0065b1;
  font-weight: 700;
  font-size: 28px;
}

.header-content {
  display: flex;
  align-items: center;
}

.header-title p {
  font-size: 28px;
  font-weight: 700;
  color: #0065b1;
}

.header-content img {
  height: 60px;
  margin-right: 15px;
}

.header-contacts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #0065b1;
  font-size: 18px;
}

.header-contacts a {
  color: #0065b1;
}

.header-contacts a:hover {
  text-decoration: underline;
}

.second-row {
  background-color: #0065b1;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-toggle {
  position: relative;
  width: 32px;
  height: 32px;
}

.burger {
  width: 32px;
  height: 32px;
  inset: 0;
  margin: auto;
  position: absolute;
  opacity: 1;
  cursor: pointer;
}

.navigation-list {
  display: flex;
  flex: 1;
  align-items: center;
  height: 50px;
}

.list-item:not(:last-child) {
  margin-right: 30px;
}

.list-item-link {
  color: #ffffff;
  font-size: 18px;
}

.list-item-link:hover {
  opacity: 0.8;
}

.dropdown-list-item {
  position: relative;
}

.dropdown-menu {
  overflow: initial;
  position: absolute;
  left: -0.65rem;
  top: 2rem;
  opacity: 0;
  pointer-events: none;
  background-color: #0065b1;
  width: 200px;
}

.dropdown-list-item:hover .dropdown-menu {
  opacity: 1;
  top: 1.5rem;
  pointer-events: initial;
}

.dropdown-menu-item {
  padding: 4px 10px;
}

.dropdown-menu-item:hover {
  opacity: 0.8;
}

.dropdown-menu-item-link {
  font-size: 14px;
  color: #ffffff;
}

.nav-toggle {
  display: none;
}

.navigation-menu {
  display: none;
}

/* MOBILE */
@media (max-width: 767.98px) {
  .header-contacts {
    display: none;
  }

  .first-row-wrapper {
    justify-content: center;
  }

  .nav-toggle {
    display: flex;
  }

  .navigation {
    flex-direction: column;
    align-items: end;
  }

  .navigation-list {
    display: none;
  }

  .navigation-menu {
    width: 100%;
    display: flex;
    border-top: 1px solid #ffffff;
    background-color: #0065b1;
    padding: 0px 20px 10px 20px;
  }

  .navigation-menu-list {
    display: flex;
    flex-direction: column;
  }

  .header-content img {
    height: 40px;
    margin-right: 15px;
  }

  .header-title {
    font-size: 20px;
  }
}
</style>
