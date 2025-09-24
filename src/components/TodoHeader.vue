<template>
  <div class="d-flex justify-space-between align-center mb-4">
    <h1 class="text-h4">Vuetify Todo</h1>
    <v-btn color="primary" prepend-icon="mdi-plus" @click="openAdd">Add Todo</v-btn>
    
  </div>
</template>

<script setup>
const emit = defineEmits(['open'])

function openAdd() {
  emit('open')
}
</script>
