<template>
  <v-dialog v-model="dialog" class="max-width=600px">
    <v-card>
      <v-card-title class="pa-4 bg-primary">
        <span class="text-h5">{{ editing ? 'Edit Todo' : 'New Todo' }}</span>
      </v-card-title>

      <v-card-text>
        <v-form class="px-2 pt-4" @submit.prevent="onSave">
          <v-text-field
            v-model="title"
            label="Title"
            variant="outlined"
            required
          ></v-text-field>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn variant="text" @click="onSave" color="blue">Save</v-btn>
        <v-btn variant="text" @click="close" color="red">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, defineExpose } from 'vue'
import { useTodoStore } from '@/stores/todo'

const store = useTodoStore()

const dialog = ref(false)
const title = ref('')
const editing = ref(false)
const editingId = ref(null)

function openDialog(todo = null) {
  if (todo) {
    editing.value = true
    editingId.value = todo.id
    title.value = todo.text || ''
  } else {
    editing.value = false
    editingId.value = null
    title.value = ''
  }
  dialog.value = true
}

function close() {
  dialog.value = false
  title.value = ''
  editing.value = false
  editingId.value = null
}

function onSave() {
  const val = title.value && title.value.trim()
  if (!val) return

  if (editing.value && editingId.value) {
    store.editTodo(editingId.value, val)
  } else {
    store.addTodo(val)
  }
  close()
}

defineExpose({ openDialog })
</script>
