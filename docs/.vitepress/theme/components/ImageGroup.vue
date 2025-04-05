<template>
  <div class="image-group">
    <slot></slot>
  </div>
</template>

<style scoped>
.image-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

@media (max-width: 640px) {
  .image-group {
    grid-template-columns: 1fr;
  }
}
</style>
