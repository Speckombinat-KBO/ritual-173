<script setup>
const { newsname } = useRoute().params
</script>

<template>
  <section>
    <div class=".container">
      <article class="news">
        <NuxtImg
          class="news-image"
          src="/images/news/news-thumbnail-1.jpg"
          alt="Фотография кладбища"
        />
        <div class="news-content">
          <div class="news-header">
            <h2 class="news-title">2 ноября – День памяти</h2>
            <p class="news-date">19.10.23</p>
          </div>
          <p class="news-text">
            Ежегодно 2 ноября в Беларуси отмечается День памяти, установленный
            Указом Президента Республики Беларусь № 157 от 26 марта 1998 года. В
            народе этот день называют Осенние Деды (Восеньскiя Дзяды), который
            православные отмечали на третьей неделе после Покрова. Это день
            поминания предков. У белорусов Восеньскiя Дзяды — праздник семейный,
            домашний. Лишь в некоторых западных районах Беларуси известны
            случаи, когда люди ходили сами навещать предков на кладбище. Это
            весной, на Радуницу принято навещать умерших на кладбище, а сегодня
            приглашают предков к себе домой, чтобы угостить и отблагодарить за
            помощь и покровительство.
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 20px 0;
}

.news {
  display: flex;
}

.news-image {
  border-radius: 0.75rem;
  max-width: 350px;
  width: 100%;
  margin-right: 20px;
  object-fit: cover;
  margin-bottom: 10px;
}

.news-content {
  flex: 1;
}

.news-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7px;
}

.news-title {
  font-size: 28px;
}

.news-date {
  color: #0065b1;
}

/* TABLET */
@media (max-width: 991.98px) {
  .news-header {
    margin-bottom: 3px;
  }

  .news-title {
    font-size: 20px;
  }
}

/* MOBILE */
@media (max-width: 767.98px) {
  .news {
    flex-direction: column;
  }

  .news-content {
    margin-bottom: 15px;
  }

  .news-image {
    max-width: none;
  }
}
</style>
