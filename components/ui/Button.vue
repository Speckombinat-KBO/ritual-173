<template>
  <button :class="buttonType" @click="emitClick">
    <slot></slot>
  </button>
</template>

<script setup>
import { ref, computed, defineProps, withDefaults } from "vue"

const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
})

const buttonType = computed(() => `btn-${props.type}`)

const emitClick = (event) => {
  emit("click", event)
}
</script>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
  font-weight: 500;
}

.btn-primary {
  background-color: #f87171;
  color: #0f172a;
}

.btn-primary:hover {
  background-color: #ef4444;
}

.btn-outlined {
  background-color: transparent;
  border: solid 2px #f87171;
  color: #f87171;
}

.btn-outlined:hover {
  background-color: #450a0a;
}
</style>
