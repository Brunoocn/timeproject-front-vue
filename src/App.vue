<template>
  <v-app>
    <app-alert></app-alert>
    <v-overlay v-model="this.$store.state.loading">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import "./styles/globals.css"
export default {
  name: "App",

  data: () => ({
   
    //
  }),

   mounted(){
   
  }
};
</script>
