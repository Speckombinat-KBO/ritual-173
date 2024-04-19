<template>
  <article class="news-card">
    <div class="card-link-wrapper">
      <NuxtLink class="card-link" :to="link">
        <NuxtImg class="card-thumbnail" :src="imagePath" alt=""></NuxtImg>
      </NuxtLink>
    </div>
    <div class="card-content">
      <div>
        <h4 class="card-title">{{ title }}</h4>
        <p class="card-subtitle">
          {{
            subtitle.length <= 165 ? subtitle : subtitle.slice(0, 165) + "..."
          }}
        </p>
      </div>
      <p class="card-datetime">{{ datetime }}</p>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  imagePath: String,
  title: String,
  subtitle: String,
  datetime: String,
  link: String,
})
</script>

<style scoped>
.news-card {
  display: flex;
  border-radius: 0.75rem;
  padding: 15px;
  background-color: #ffffff;
  box-shadow: 0px 6px 16px rgba(230, 235, 245, 0.8);
}

.card-link-wrapper {
  margin-right: 15px;
}

.card-thumbnail {
  width: 170px;
  height: 130px;
  border-radius: 0.5rem;
  object-fit: cover;
}

.card-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  margin: 0;
  margin-bottom: 5px;
}

.card-subtitle {
  margin: 0;
}

.card-datetime {
  margin: 0;
  align-self: flex-end;
  font-size: 14px;
}

/* MOBILE */
@media (max-width: 767.98px) {
  .news-card {
    flex-direction: column;
  }

  .card-link-wrapper {
    max-width: none;
    width: 100%;
    margin: 0px 0px 5px 0px;
  }
  .card-thumbnail {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
  }
}
</style>
