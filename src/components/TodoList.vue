<template>
  <div>
    <template v-if="!todos.length">
      <div class="empty-state">
        <v-icon size="80" color="grey-lighten-1">mdi-checkbox-marked-circle-plus-outline</v-icon>
        <div class="text-h5 mt-4 font-weight-medium text-grey-darken-2">All tasks completed!</div>
        <div class="text-body-1 text-grey-darken-1">Click "Add Task" to plan your next goal.</div>
      </div>
    </template>

    <v-card
      v-for="todo in todos"
      :key="todo.id"
      class="todo-item"
      :class="{ 'completed': todo.completed }"
      elevation="2"
    >
      <div class="d-flex align-center">
        <v-checkbox-btn
          :model-value="todo.completed"
          @update:model-value="() => toggle(todo.id)"
          color="indigo-accent-4"
          class="mr-3"
        ></v-checkbox-btn>
        <div class="todo-text">{{ todo.text }}</div>
      </div>

      <div class="todo-actions">
        <v-btn icon="mdi-pencil" variant="text" size="small" @click="$emit('edit', todo)"></v-btn>
        <v-btn icon="mdi-delete-outline" variant="text" size="small" color="red-lighten-2" @click="remove(todo.id)"></v-btn>
      </div>
    </v-card>


      <div v-if="todos.length" class="text-center mt-6">
  <v-btn
    color="red"
    variant="flat"
    size="large"
    elevation="4"
    @click="clearTodos"
  >
    <v-icon start>mdi-delete-sweep</v-icon>
    Clear All Tasks
  </v-btn>
</div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useTodoStore } from '@/stores/todo';

const store = useTodoStore();
const { todos } = storeToRefs(store);

const clearTodos = () => store.clearTodos();

const remove = (id) => store.removeTodo(id);
const toggle = (id) => store.completeTodo(id);



defineEmits(['edit']);
</script>

<style lang="scss" scoped>
.empty-state {
  text-align: center;
  padding: 60px 24px;
  background-color: #ffffff;
  border-radius: 16px;
  border: 2px dashed #e0e0e0;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  margin-bottom: 16px;
  border-radius: 12px;
  background-color: #ffffff;
  transition: all 0.3s ease;
  border-left: 5px solid transparent;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    border-left-color: #7c3aed;
  }

  &.completed {
    background-color: #f8fafc;
    .todo-text {
      text-decoration: line-through;
      color: #94a3b8;
    }
  }
}

.todo-text {
  font-size: 1.1rem;
  color: #334155;
  transition: color 0.3s ease;
}

.todo-actions {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.todo-item:hover .todo-actions {
  opacity: 1;
}


</style>
