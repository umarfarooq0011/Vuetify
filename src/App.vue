<template>
  <div class="app-background">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="10" lg="8">
          <TodoHeader @open="openAddDialog" />
          <TodoList @edit="openEditDialog" />
        </v-col>
      </v-row>
      <TodoDialog ref="dialogRef" />
    </v-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoDialog from './components/TodoDialog.vue';

const dialogRef = ref(null);

function openAddDialog() {
  dialogRef.value?.openDialog();
}

function openEditDialog(todo) {
  dialogRef.value?.openDialog(todo);
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

.app-background {
background-color: #e5e5f7;
opacity: 0.8;
background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #e5e5f7 10px ), repeating-linear-gradient( #444cf755, #444cf7 );
  min-height: 100vh;
}
</style>
