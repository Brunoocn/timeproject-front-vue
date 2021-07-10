<template>
  <div>
    <v-form>
      <v-container>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="model.tenanty"
            :counter="10"
            label="Conta"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="model.email"
            :counter="10"
            label="Email"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="model.password"
            label="Senha"
            type="password"
            required
            outlined
          ></v-text-field>
        </v-col>
        <v-btn color="primary" @click="sendLogin">Login</v-btn>
        <v-btn color="secondary" @click="teste">Teste</v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import authService from "../services/authService";

export default {
  data() {
    return {
      model: {
        tenanty: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async sendLogin() {
      const res = await authService.signIn(
        this.model.tenanty,
        this.model.email,
        this.model.password
      );
      alert(res);
    },
    async teste() {
      const res = await this.$http.get("User/teste-auth");
      console.log(res);
    },
  },
};
</script>

<style>
</style>