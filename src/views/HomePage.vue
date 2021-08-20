<template>
  <div>
    <v-app-bar color="primary" dark>
      <v-app-bar-nav-icon> <v-icon>mdi-menu</v-icon></v-app-bar-nav-icon>
      <v-app-bar-title>Time Project</v-app-bar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn v-role:any="'Master|Admin'" text to="/customers"
          >Customers</v-btn
        >
        <v-btn v-role:any="'Master|Admin'" text to="/activity">Activity</v-btn>
        <v-btn v-role:any="'Master|Admin'" text to="/teams">Teams</v-btn>
        <v-btn v-role:any="'Master|Admin'" text to="/projects">Projects</v-btn>
        <v-btn v-role:any="'Master|Admin'" text to="/users">Users</v-btn>
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