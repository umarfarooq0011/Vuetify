<template>
  <div>
    <template v-if="!todos.length">
      <div class="text-center pa-6">
        <div class="text-h6">No todos yet</div>
        <div class="text-body-2 text--secondary">Click Add Todo to create your first task</div>
      </div>
    </template>

    <v-card v-for="todo in todos" :key="todo.id" class="mb-4">
      <v-card-title>
        <v-checkbox :model-value="todo.completed" @update:model-value="() => toggle(todo.id)" class="mr-3"></v-checkbox>
        <div>
          <div :class="{ 'text-decoration-line-through': todo.completed }">{{ todo.text }}</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-spacer />
        <v-btn variant="text" color="blue" prepend-icon="mdi-pencil" @click="$emit('edit', todo)">Edit</v-btn>
        <v-btn variant="text" color="red" prepend-icon="mdi-delete" @click="remove(todo.id)">Delete</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()
const { todos } = storeToRefs(store)

function remove(id) {
  store.removeTodo(id)
}

function toggle(id) {
  store.completeTodo(id)
}
</script>

<style scoped>
.pa-6 { padding: 24px }
.mb-4 { margin-bottom: 16px }
</style>
