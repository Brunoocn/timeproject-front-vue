<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon> <v-icon>mdi-menu</v-icon></v-app-bar-nav-icon>
      <v-app-bar-title>Time Project</v-app-bar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn text to="/customers">Customers</v-btn>
        <v-btn text to="/activity">Activity</v-btn>
        <v-btn text to="/teams">Teams</v-btn>
        <v-btn text to="/projects">Projects</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-container>
      <router-view></router-view>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>