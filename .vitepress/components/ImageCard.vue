<template>
  <div class="image-card" :class="{ single: !isGroup }">
    <img :src="src" :alt="alt || caption" class="image-card-img" />
    <div class="image-card-caption">
      <span>{{ caption }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  caption: {
    type: String,
    default: ''
  }
})

const isGroup = inject('isImageGroup', false)
</script>

<style scoped>
.image-card {
  flex: 1;
  min-width: 280px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
}

.image-card.single {
  margin: 20px 0;
}

.image-card-img {
  width: 100%;
  height: auto;
  display: block;
}

.image-card-caption {
  padding: 10px;
  text-align: center;
  background-color: #f8f8f8;
}

.image-card-caption span {
  font-size: 0.9em;
  color: #666;
}
</style>