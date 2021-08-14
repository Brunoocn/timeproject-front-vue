<template>
  <v-app>
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
export default {
  name: "App",

  data: () => ({
   
    //
  }),

  async mounted(){
    const res = await this.$confirm("teste","mensagem")
    console.log(res)
  }
};
</script>
