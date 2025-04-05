<template>
  <div class="image-group">
    <slot></slot>
  </div>
</template>

<script setup>
import { provide } from 'vue'

provide('isImageGroup', true)
</script>

<style scoped>
.image-group {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin: 20px 0;
}
</style>