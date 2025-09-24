<template>
  <v-dialog v-model="dialog" max-width="550px" transition="dialog-bottom-transition">
    <v-card class="dialog-card">
      <v-card-title class="dialog-header">
        <v-icon class="mr-3">{{ editing ? 'mdi-pencil-circle' : 'mdi-plus-circle' }}</v-icon>
        <span class="text-h5 font-weight-regular">{{ editing ? 'Edit Task' : 'Add a New Task' }}</span>
      </v-card-title>

      <v-card-text class="pt-4 px-4">
        <v-form @submit.prevent="onSave">
          <v-text-field
            v-model="title"

            variant="filled"

            required
            hide-details
            class="custom-text-field"
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-card-actions class="pa-4">
        <v-spacer></v-spacer>
        <v-btn class="cancel-btn" prepend-icon="mdi-cancel" variant="text" @click="close">Cancel</v-btn>
        <v-btn class="save-btn" prepend-icon="mdi-content-save" variant="flat" @click="onSave">Save Task</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, defineExpose } from 'vue';
import { useTodoStore } from '@/stores/todo';

const store = useTodoStore();

const dialog = ref(false);
const title = ref('');
const editing = ref(false);
const editingId = ref(null);

function openDialog(todo = null) {
  if (todo) {
    editing.value = true;
    editingId.value = todo.id;
    title.value = todo.text || '';
  } else {
    editing.value = false;
    editingId.value = null;
    title.value = '';
  }
  dialog.value = true;
}

function close() {
  dialog.value = false;
}

function onSave() {
  const val = title.value && title.value.trim();
  if (!val) return;

  if (editing.value && editingId.value) {
    store.editTodo(editingId.value, val);
  } else {
    store.addTodo(val);
  }
  close();
}

defineExpose({ openDialog });
</script>

<style lang="scss" scoped>
.dialog-card {
  border-radius: 16px;
}

.dialog-header {
  background-color: #f1f5f9;
  padding: 20px;
  color: #1e293b;
  display: flex;
  align-items: center;
}

.custom-text-field {
  :deep(.v-input__control) {
    border-radius: 8px;
  }
  :deep(.v-field__input) {
    padding-top: 16px;
    padding-bottom: 16px;
  }
}

.save-btn {
  background: linear-gradient(45deg, #4f46e5, #7c3aed);
  color: white;
  border-radius: 50px;
  text-transform: none;
  font-weight: 600;
  padding: 0 24px;
}

.cancel-btn {
  text-transform: none;
  font-weight: 600;
  color: #64748b;
  letter-spacing: 0.5px;
}
</style>
