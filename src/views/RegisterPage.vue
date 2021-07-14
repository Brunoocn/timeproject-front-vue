<template>
  <v-form>
    <v-container>
      <v-col cols="12" md="4">
        <v-text-field v-model="model.name" label="Name" required></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          v-model="model.email"
          label="E-mail"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          v-model="model.password"
          label="Password"
          type="password"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          v-model="model.confirmPassword"
          label="Confirm password"
          type="password"
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field
          v-model="model.tenanty"
          label="Tenanty"
          required
        ></v-text-field>
      </v-col>
      <v-btn color="primary" @click="sendRegister">Register</v-btn>
    </v-container>
  </v-form>
</template>

<script>
import authService from "../services/authService";

export default {
  data() {
    return {
      model: {
        tenanty: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    async sendRegister() {
      const res = await authService.signUp(
        this.model.tenanty,
        this.model.email,
        this.model.name,
        this.model.password,
        this.model.confirmPassword
      );
      alert(res);
    },
  },
};
</script>

<style>
</style>