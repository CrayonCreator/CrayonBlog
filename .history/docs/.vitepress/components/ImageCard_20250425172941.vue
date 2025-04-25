<template>
  <div class="image-card">
    <img 
      :src="src" 
      :alt="caption || ''" 
      class="image" 
      data-zoomable
    />
    <p v-if="caption" class="caption">{{ caption }}</p>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.image-card {
  margin: 1rem 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.image {
  width: 100%;
  display: block;
  object-fit: cover;
}

.caption {
  padding: 0.75rem;
  margin: 0;
  text-align: center;
  font-size: 0.9rem;
  color: #666;
  background-color: #f8f8f8;
}
</style>
