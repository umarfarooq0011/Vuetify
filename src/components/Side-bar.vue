<template>
  <VNavigationDrawer
    expand-on-hover
    rail
  >
    <v-list>
      <v-list-item
        prepend-icon="mdi-home"
        title="Home"
      ></v-list-item>

      <!-- divider -->
      <v-divider></v-divider>
      <v-list-item
        prepend-icon="mdi-account"
        title="Profile"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-settings"
        title="Settings"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-help-circle"
        title="Help"
      ></v-list-item>


    </v-list>
  </VNavigationDrawer>
</template>

<script setup>
  // Your component's logic will go here
  // It's fine to leave this empty for now
</script>

<style scoped>
  /* Your component's styles go here */
</style>
