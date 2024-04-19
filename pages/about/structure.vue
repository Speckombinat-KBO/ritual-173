<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <section class=".container">
    <div class="section-wrapper">
      <h1 class="section-title">{{ t("Structure.Structure.Title") }}</h1>
      <div class="structure-wrapper">
        <NuxtImg
          src="/images/structure.png"
          class="structure-picture"
        ></NuxtImg>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-wrapper {
  display: flex;
  flex-direction: column;
  padding: 20px 0px 40px 0px;
}

.section-title {
  margin-bottom: 20px;
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
