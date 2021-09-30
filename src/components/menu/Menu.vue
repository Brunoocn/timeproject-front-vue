<template>
  <div class="container-menu">
    <router-link to="/main">
      <img class="logo-nav" src="/logo-nav.svg" alt="Logo" />
    </router-link>
    <div class="centered-container">
      <router-link to="/main">
        <v-icon color="white">mdi-home</v-icon>
      </router-link>
      <router-link to="/timesheet">
        <v-icon color="white" style="padding-top: 20px">mdi-alarm</v-icon>
      </router-link>
      <v-icon>alarm-on</v-icon>
    </div>

    <v-icon v-on:click="logout" color="white">mdi-logout</v-icon>
  </div>
</template>

<script>
import "../../styles/menuNav.css";
import authService from "../../services/authService";
export default {
  methods: {
    async logout() {
      await authService.signOut();
      this.$router.push({ name: "LoginPage" });
    },
  },
};
</script>

<style>
</style>