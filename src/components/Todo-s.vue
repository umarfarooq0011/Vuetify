<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <TodoHeader @open="openAdd" />

        <TodoList @edit="onEdit" />
      </v-col>
    </v-row>

    <TodoDialog ref="dialogRef" />
  </v-container>
</template>

<script setup>

import TodoHeader from './TodoHeader.vue';
import TodoList from './TodoList.vue';
import TodoDialog from './TodoDialog.vue';
import { ref } from 'vue'

const dialogRef = ref(null)

function openAdd() {
  dialogRef.value?.openDialog()
}

function onEdit(todo) {
  dialogRef.value?.openDialog(todo)
}
</script>
