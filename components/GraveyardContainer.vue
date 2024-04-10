<template>
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
          {{ item.title }}
        </li>
      </ul>
    </div>
    <div class="graveyard-thumbnail-container">
      <NuxtLink to="https://en.wikipedia.org/wiki/Great_Teacher_Onizuka">
        <NuxtImg
          class="graveyard-thumbnail"
          :src="selectedItem.image"
          alt="Graveyard thumbnail"
        ></NuxtImg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const { rt, tm, locales, locale, fallbackLocale } = useI18n()
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
.graveyards {
  display: flex;
  max-width: 100%;
  max-height: 300px;
  border: 1px solid #000000;
  border-radius: 0.75rem;
  padding: 15px;
  background-color: #ededed;
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
  background-color: #d4d4d4;
}

.list-item.active {
  background-color: #d4d4d4;
  color: #0784c3;
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
</style>
