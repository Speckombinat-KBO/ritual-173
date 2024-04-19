<script setup>
const { name } = useRoute().params
const { tm } = useI18n()
const graveyard = tm("Graveyard.graveyards").find((graveyard) => {
  let linkParts = graveyard.link.split("/")
  let linkName = linkParts[linkParts.length - 1]
  return linkName === name
})

const statusClass = computed(() => {
  return {
    "status-open": graveyard.status === "Действующее",
    "status-closed": graveyard.status === "Закрыто",
    "status-limited": graveyard.status === "Ограничено действующее",
  }
})
</script>

<template>
  <section>
    <div class=".container">
      <article class="graveyard">
        <NuxtImg
          class="graveyard-image"
          :src="graveyard.image"
          alt="Фотография кладбища"
        />
        <div class="graveyard-content">
          <div class="graveyard-header">
            <h2 class="graveyard-title">{{ graveyard.title }}</h2>
            <div class="graveyard-status" :class="statusClass">
              {{ graveyard.status }}
            </div>
          </div>
          <p class="graveyard-address">{{ graveyard.address }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 20px 0;
}

.graveyard {
  display: flex;
}

.graveyard-image {
  border-radius: 0.75rem;
  max-width: 350px;
  width: 100%;
  margin-right: 20px;
}

.graveyard-content {
  flex: 1;
}

.graveyard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 7px;
}

.graveyard-title {
  font-size: 28px;
}

.graveyard-status {
  display: flex;
  align-items: center;
  padding: 8px 14px;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  border-radius: 9999px;
}

.status-open {
  background-color: #34d399;
}

.status-closed {
  background-color: #ef4444;
}

.status-limited {
  background-color: #fb923c;
}

.graveyard-address {
  font-size: 18px;
}

/* TABLET */
@media (max-width: 991.98px) {
  .graveyard-header {
    margin-bottom: 3px;
  }

  .graveyard-title {
    font-size: 20px;
  }

  .graveyard-address {
    font-size: 16px;
  }
}

/* MOBILE */
@media (max-width: 767.98px) {
  .graveyard {
    flex-direction: column-reverse;
  }

  .graveyard-content {
    margin-bottom: 15px;
  }

  .graveyard-image {
    max-width: none;
  }

  .graveyard-status {
    font-size: 16px;
  }
}
</style>
