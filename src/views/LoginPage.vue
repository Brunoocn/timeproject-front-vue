<template>
  <div>
    <v-expand-transition>
      <v-alert
        border="top"
        color="red lighten-2"
        dark
        v-if="errors.length > 0"
        dismissible
        @input="alertInput"
      >
        <div v-for="(error, index) in errors" :key="index" class="text-center">
          {{ error.value }}
        </div>
      </v-alert>
    </v-expand-transition>
    <v-form>
      <v-container>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="model.tenanty"
            :counter="10"
            label="Conta"
            required
            :disabled="loading"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="model.email"
            :counter="10"
            label="Email"
            required
            :disabled="loading"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="model.password"
            label="Senha"
            type="password"
            required
            :disabled="loading"
          ></v-text-field>
        </v-col>
        <button></button>

        <v-btn color="primary" :loading="loading" @click="sendLogin"
          >Login</v-btn
        >
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
        name: "",
        email: "",
        password: "",
      },
      loading: false,
      errors: [],
    };
  },
  methods: {
    async sendLogin() {
      this.loading = true;
      const res = await authService.signIn(
        this.model.tenanty,
        this.model.email,
        this.model.password
      );
      this.loading = false;
      if (res.success === false) {
        this.errors = res.data;
      }
    },
    async teste() {
      const res = await this.$http.get("User/teste-auth");
      console.log(res);
    },

    alertInput(value) {
      if (value == false) {
        this.errors = [];
      }
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>