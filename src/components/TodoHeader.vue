<template>
  <div class="d-flex justify-space-between align-center my-8">
    <h1 class="app-title">
      My Tasks
    </h1>
    <v-btn
      class="add-task-btn"
      variant="flat"
      size="large"
      prepend-icon="mdi-plus-circle-outline"
      @click="openAdd"
    >
      Add Task
    </v-btn>
  </div>
</template>

<script setup>
const emit = defineEmits(['open']);

function openAdd() {
  emit('open');
}
</script>

<style lang="scss" scoped>
.app-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #1e293b;
  span {
    font-size: 2rem;
  }
}

.add-task-btn {
  background: linear-gradient(45deg, #4f46e5, #7c3aed);
  color: white;
  border-radius: 50px;
  text-transform: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
}
</style>
