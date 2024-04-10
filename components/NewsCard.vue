<template>
  <article class="news-card">
    <div class="card-link-wrapper">
      <NuxtLink
        class="card-link"
        to="https://en.wikipedia.org/wiki/Great_Teacher_Onizuka"
      >
        <NuxtImg class="card-thumbnail" src="/gto.jpg" alt=""></NuxtImg>
      </NuxtLink>
    </div>
    <div class="card-content">
      <div>
        <h3 class="card-title">Breaking: New Protocol</h3>
        <p class="card-subtitle">
          The new protocol is set to change the way we communicate.
        </p>
      </div>
      <p class="card-datetime">12 aug. 2023</p>
    </div>
  </article>
</template>

<style scoped>
.news-card {
  display: flex;
  border-radius: 0.75rem;
  max-width: 100%;
  padding: 15px;
  box-shadow: 0px 6px 16px rgba(230, 235, 245, 0.8);
}

.card-thumbnail {
  width: 170px;
  height: 130px;
  border-radius: 0.5rem;
  margin-right: 15px;
  object-fit: cover;
}

.card-content {
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
</style>
