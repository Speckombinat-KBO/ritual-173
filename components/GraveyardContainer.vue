<template>
  <div>
    <h2 class="title">{{ t("Graveyard.title") }}</h2>
    <div class="graveyards">
      <div class="list-container">
        <ul>
          <li
            class="list-item"
            v-for="(item, index) in tm('Graveyard.graveyards')"
            :key="item"
            @click="selectItem(item, index)"
            :class="{
              active: selectedItem === item || (!selected && index === 0),
            }"
          >
            <NuxtLink
              :to="item.link"
              class="item-link"
              :class="{
                active: selectedItem === item || (!selected && index === 0),
              }"
              >{{ item.title }}</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div class="graveyard-thumbnail-container">
        <NuxtLink class="graveyard-link" :to="selectedItem.link">
          <NuxtImg
            class="graveyard-thumbnail"
            :src="selectedItem.image"
            alt="Graveyard thumbnail"
          />
          <div class="goto-graveyard">Перейти</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const { t, tm } = useI18n()
const graveyards = tm("Graveyard.graveyards")

const items = ref(graveyards)
const selectedItem = ref(items.value[0])
const selected = ref(false)

const selectItem = (item, index) => {
  selectedItem.value = item
  selected.value = true
}
</script>

<style scoped>
.title {
  margin-bottom: 20px;
}

.graveyards {
  display: flex;
  max-width: 100%;
  max-height: 300px;
  border: 2px solid #0065b1;
  border-radius: 0.75rem;
  padding: 15px;
  background-color: #e5ecfe;
  margin-bottom: 20px;
}

.list-container {
  max-height: 270px;
  width: 100%;
  height: 100%;
  padding-right: 15px;
  overflow-y: scroll;
}

.list-item {
  border-radius: 0.5rem;
  padding: 5px 5px 5px 5px;
  color: #212529;
  cursor: pointer;
}

.list-item:not(:last-child) {
  margin-bottom: 4px;
}

.list-item:hover {
  background-color: #fafcff;
}

.list-item.active {
  background-color: #fafcff;
  color: #0065b1;
}

.item-link {
  color: #212529;
}

.item-link.active {
  background-color: #fafcff;
  color: #0065b1;
}

.graveyard-thumbnail-container {
  width: 270px;
  height: 270px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
}

.graveyard-thumbnail {
  width: 270px;
  height: 270px;
  object-fit: cover;
  border-radius: 0.5rem;
}

.graveyard-link {
  position: relative;
}

.goto-graveyard {
  position: absolute;
  left: 0;
  bottom: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  border-radius: 0 0 0.5rem 0.5rem;
  font-size: 14px;
}

.goto-graveyard:hover {
  text-decoration: underline;
}

/* MOBILE */
@media (max-width: 767.98px) {
  .graveyard-thumbnail-container {
    display: none;
  }
}
</style>
