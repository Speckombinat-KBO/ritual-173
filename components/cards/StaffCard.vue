<template>
  <article class="staff-card">
    <div class="picture-wrapper">
      <NuxtImg
        class="staff-picture"
        :src="staffImage"
        alt="Фотография руководителя"
      ></NuxtImg>
    </div>
    <div class="card-content">
      <div>
        <h3 class="staff-position">
          {{ staffPosition }}
        </h3>
        <p class="staff-name">{{ staffName }}</p>
      </div>
      <div>
        <h3 class="time-appointment">{{ appointmentTitle }}</h3>
        <p class="card-subtitle">{{ appointmentTime }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    staffImage: {
      type: String,
    },
    staffPosition: {
      type: String,
    },
    staffName: {
      type: String,
    },
    appointmentTitle: {
      type: String,
    },
    appointmentTime: {
      type: String,
    },
  },
}
</script>

<style scoped>
.staff-card {
  display: flex;
  flex-direction: column;
  border-radius: 0.75rem;
  max-width: 100%;
  padding: 20px;
  row-gap: 15px;
  box-shadow: 0px 6px 16px rgba(230, 235, 245, 0.8);
  background-color: #fff;
}

.picture-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.staff-picture {
  height: 400px;
  border-radius: 0.5rem;
  object-fit: cover;
}

.card-content {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

.staff-position,
.time-appointment {
  font-size: 16px;
  margin: 0;
}

.staff-name {
  margin: 0;
}

.card-subtitle {
  margin: 0;
}
</style>
