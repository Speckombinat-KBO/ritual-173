<script setup lang="ts">
import "@/assets/style.css";
const { t } = useI18n();
const i18nHead = useLocaleHead({});
const meta = computed(() => {
  return {
    meta: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=5",
      },
      {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge",
      },
      {
        name: "robots",
        content: "index,follow",
      },
      {
        name: "og:type",
        content: "website",
      },
      ...(i18nHead.value.meta || []),
    ],
    link: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
      /*    
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
      },
      */
      ...(i18nHead.value.link || []),
    ],
    htmlAttrs: {
      lang: i18nHead.value.htmlAttrs!.lang
    }
  };
});

useHead(meta);
</script>
<template>
  <div>
    <AppHeader />
  </div>
</template>
