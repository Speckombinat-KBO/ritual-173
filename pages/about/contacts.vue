<template>
  <section class=".container">
    <div class="staff-section">
      <h1>Контакты руководителей</h1>
      <div class="staff-grid">
        <StaffCard
          v-for="person in staff"
          :key="person.name"
          :staffImage="person.image"
          :staffPosition="person.position"
          :staffName="person.name"
          :appointmentTitle="person.appointmentTime"
          :appointmentTime="person.appointmentDay"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import StaffCard from "~/components/cards/StaffCard.vue"
const { tm } = useI18n()
const staff = tm("Staff.staff")
</script>

<style scoped>
.staff-section {
  display: flex;
  flex-direction: column;
  padding: 20px 0px 0px 0px;
}

.staff-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  row-gap: 1.5rem;
  padding: 20px 0px 40px 0px;
}

/* TABLET */
@media (max-width: 991.98px) {
  .staff-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

/* MOBILE */
@media (max-width: 767.98px) {
  .staff-grid {
    display: flex;
    flex-direction: column;
  }
}
</style>
