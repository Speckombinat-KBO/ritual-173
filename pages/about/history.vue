<script setup lang="ts">
const { t } = useI18n()

const history = {
  title: t("History.History.Title"),
  text: t("History.History.Text").split("*"),
}
</script>

<template>
  <section class=".container">
    <div class="section-wrapper">
      <h1 class="section-title">{{ history.title }}</h1>
      <p class="section-text">{{ history.text[0] }}</p>
      <div class="history-wrapper">
        <NuxtImg src="/images/history.jpg" class="history-picture"></NuxtImg>
      </div>
      <p class="section-text">{{ history.text[1] }}</p>
    </div>
  </section>
</template>

<style scoped>
.section-wrapper {
  display: flex;
  flex-direction: column;
  padding: 20px 0px 40px 0px;
}

.section-text {
  padding: 20px 0px 20px 0px;
}

.history-wrapper {
  display: flex;
  width: 70%;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  box-shadow: 0px 6px 16px rgba(230, 235, 245, 0.8);
}

.history-picture {
  width: 100%;
  border-radius: 0.75rem;
  object-fit: cover;
}
</style>
