<template>
  <section class="structure-section .container">
    <h1>Структура предприятия</h1>
    <div class="structure-wrapper">
      <NuxtImg src="/images/structure.png" class="structure-picture"></NuxtImg>
    </div>
  </section>
</template>

<style scoped>
.structure-section {
  display: flex;
  flex-direction: column;
  padding: 20px 0px 40px 0px;
}

.structure-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  box-shadow: 0px 6px 16px rgba(230, 235, 245, 0.8);
}

.structure-picture {
  width: 100%;
  border-radius: 0.75rem;
  object-fit: cover;
}
</style>
