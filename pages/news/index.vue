<script setup>
import NewsCard from "~/components/cards/NewsCard.vue"
</script>

<template>
  <section class="news-section">
    <div class=".container">
      <h2 class="news-title">Новости и события</h2>
      <div class="news-list">
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
          :link="'/'"
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
  </section>
</template>

<style scoped>
.news-section {
  padding: 20px 0px 40px 0px;
}

.news-title {
  margin-bottom: 20px;
}

.news-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 15px;
}

/* TABLET */
@media (max-width: 991.98px) {
  .news-list {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
