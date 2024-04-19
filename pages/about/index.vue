<template>
  <section class="about-section">
    <div class=".container">
      <h2 class="about-title">О нас</h2>
      <div class="about-links">
        <NuxtLink to="/about/contacts">Контакты руководителей</NuxtLink>
        <NuxtLink to="/about/history">История предприятия</NuxtLink>
        <NuxtLink to="/about/structure">Структура предприятия</NuxtLink>
        <NuxtLink to="/vacancies">Вакансии</NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 20px 0px 40px 0px;
}

.about-title {
  margin-bottom: 20px;
}

.about-links {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

.about-links a {
  color: #000000;
}

.about-links a:hover {
  opacity: 0.8;
  text-decoration: underline;
}
</style>
