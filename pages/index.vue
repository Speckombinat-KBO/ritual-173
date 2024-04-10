<template>
  <Button :class="`btn-primary`">Если случилась беда</Button>
  <Button :class="`btn-outlined`">Заказать звонок</Button>
  <NewsCard />
  <GraveyardContainer />
</template>

<script setup>
import Button from "../components/ui/Button.vue"
import NewsCard from "../components/cards/NewsCard.vue"
</script>
