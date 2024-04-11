<template>
  <section class="staff-section .container">
    <h1>Контакты предприятия</h1>
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
  </section>
</template>

<script setup lang="ts">
import StaffCard from "~/components/cards/StaffCard.vue"
const { tm } = useI18n()
const staff = tm("Staff.staff")
</script>

<style scoped>
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
</style>
