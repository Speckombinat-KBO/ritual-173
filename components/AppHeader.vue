<script setup lang="ts">
import type { LocaleObject } from "@nuxtjs/i18n"
import type header from "~/localization/ru/header"

const { t, locales, locale, fallbackLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const route = useRoute()
const config = useRuntimeConfig()

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
      locale: t("Header.Links.Home"),
      name: "index",
      link: "/",
    },
    {
      locale: t("Header.Links.About"),
      name: "about",
      link: "/blocks",
    },
    {
      locale: t("Header.Links.Shop"),
      name: "shop",
      link: "/shop",
    },
    {
      locale: t("Header.Links.Contacts"),
      name: "contacts",
      link: "/contacts",
    },
  ]
  return links
}

const getAboutLinks = () => {
  const links: Array<ILink> = [
    {
      locale: t("Header.Links.Home"),
      name: "index",
      link: "/",
    },
    {
      locale: t("Header.Links.About"),
      name: "about",
      link: "/blocks",
    },
    {
      locale: t("Header.Links.Shop"),
      name: "shop",
      link: "/shop",
    },
    {
      locale: t("Header.Links.Contacts"),
      name: "contacts",
      link: "/contacts",
    },
  ]

  return links
}
</script>

<template>
  <header>
    <div class="header-full">
      <NuxtImg src="/logo.png" :alt="t('Header.Title')"> </NuxtImg>
      {{ t("Header.Title") }}
    </div>
  </header>
</template>

<style scoped>
header {
  height: 112px;
}

.header-full {
  margin-inline: auto;
  display: flex;
  max-width: 1200px;
  flex-direction: column;
}

.header-top {
  height: 56px;
  display: flex;
  justify-content: space-between;
}

.header-bottom {
  height: 56px;
  background-color: rgb(35, 35, 35);
}
</style>
