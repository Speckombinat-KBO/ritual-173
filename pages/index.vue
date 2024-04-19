<script setup>
import Button from "~/components/ui/Button.vue"
import NewsCard from "~/components/cards/NewsCard.vue"
</script>

<template>
  <section class="graveyard-section">
    <div class=".container">
      <div class="graveyard-list">
        <GraveyardContainer class="scroll-container" />
        <div class="graveyard-map">
          <h2 class="map-title">Мы находимся</h2>
          <div class="map"><NuxtImg src="/images/map.png" /></div>
        </div>
      </div>
      <div class="btn-container">
        <Button type="primary">
          <NuxtLink to="/" class="btn-link">Заказать звонок</NuxtLink>
        </Button>
        <Button type="primary">
          <NuxtLink to="/tribulation" class="btn-link"
            >Если случилась беда</NuxtLink
          >
        </Button>
        <Button type="primary">
          <NuxtLink to="/about/contacts" class="btn-link">Контакты</NuxtLink>
        </Button>
      </div>
      <div>
        <h2 class="news-title">
          <NuxtLink to="/news">Новости</NuxtLink>
        </h2>
        <div class="news-container">
          <NewsCard
            :imagePath="'/images/news/news-thumbnail.jpg'"
            :title="'Минский курьер'"
            :subtitle="'Обзор событий столицы с 6 ноября по 12 ноября.'"
            :datetime="'13.11.2023'"
            :link="'/'"
          />
          <NewsCard
            :imagePath="'/images/news/news-thumbnail.jpg'"
            :title="'Минский курьер'"
            :subtitle="'Обзор событий столицы с 6 ноября по 12 ноября.'"
            :datetime="'13.11.2023'"
            :link="'/'"
          />
          <NewsCard
            :imagePath="'/images/news/news-thumbnail-1.jpg'"
            :title="'2 ноября – День памяти'"
            :subtitle="'Ежегодно 2 ноября в Беларуси Ежегодно 2 ноября в Беларуси отмечается День памяти, установленный Указом Президента Республики Беларусь № 157 от 26 марта 1998 года.'"
            :datetime="'19.10.2023'"
            :link="'/news/name'"
          />
          <NewsCard
            :imagePath="'/images/news/news-thumbnail.jpg'"
            :title="'Минский курьер'"
            :subtitle="'Обзор событий столицы с 6 ноября по 12 ноября.'"
            :datetime="'13.11.2023'"
            :link="'/'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.graveyard-section {
  padding: 20px 0px 40px 0px;
}

.graveyard-list {
  display: flex;
  column-gap: 30px;
}

.scroll-container {
  flex: 1;
}

.graveyard-map {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
}

.map-title {
  margin-bottom: 20px;
}

.graveyard-map img {
  border: 2px solid #0065b1;
  border-radius: 0.75rem;
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.btn-container {
  display: flex;
  column-gap: 22px;
  margin-bottom: 20px;
}

.btn-container button {
  flex: 1;
}

.btn-link {
  font-weight: 600;
  color: #ffffff;
  padding: 10px 15px;
  font-size: 16px;
}

.news-title {
  margin-bottom: 20px;
}

.news-title a {
  color: #000000;
}

.news-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 15px;
}

/* TABLET */
@media (max-width: 991.98px) {
  .graveyard-list {
    flex-direction: column;
  }

  .news-container {
    grid-template-columns: repeat(1, 1fr);
  }
}

/* MOBILE */
@media (max-width: 767.98px) {
  .btn-container {
    flex-direction: column;
    row-gap: 20px;
  }
}
</style>
