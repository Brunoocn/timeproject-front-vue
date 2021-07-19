<template>
  <section class="form-container">
    <img src="/Logo.svg" alt="logo" class="logo" />
    <img src="/bubble.svg" alt="bubble" class="bubble-left" />
    <img src="/bubble-right.svg" alt="bubble" class="bubble-right" />
    <div class="form-content">
      <v-expand-transition>
        <v-alert
          border="top"
          color="red lighten-2"
          dark
          v-if="errors.length > 0"
          dismissible
          @input="alertInput"
        >
          <div
            v-for="(error, index) in errors"
            :key="index"
            class="text-center"
          >
            {{ error.value }}
          </div>
        </v-alert>
      </v-expand-transition>
      <h1 class="title-singup">SingUp</h1>
      <v-form>
        <v-container>
          <v-col cols="12" md="4" class="col-input">
            <h2 class="title-input">
              Name<span class="required-input">*</span>
            </h2>
            <v-text-field
              v-model="model.name"
              label="Your name"
              :disabled="loading"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4" class="col-input">
            <h2 class="title-input">
              E-mail<span class="required-input">*</span>
            </h2>
            <v-text-field
              v-model="model.email"
              label="Your e-mail"
              :disabled="loading"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4" class="col-input">
            <h2 class="title-input">
              Password<span class="required-input">*</span>
            </h2>
            <v-text-field
              v-model="model.password"
              label="Your password"
              type="password"
              :disabled="loading"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4" class="col-input">
            <h2 class="title-input">
              Confirm Password<span class="required-input">*</span>
            </h2>
            <v-text-field
              v-model="model.confirmPassword"
              label="Confirm your password"
              type="password"
              required
              :disabled="loading"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4" class="col-input">
            <h2 class="title-input">
              Tenanty<span class="required-input">*</span>
            </h2>
            <v-text-field
              v-model="model.tenanty"
              label="Tenanty"
              required
              :disabled="loading"
            ></v-text-field>
          </v-col>
          <v-btn class="btn-register" color="primary" @click="sendRegister"
            >Sing up</v-btn
          >
          <p class="subtext">
            Already have a account? <br />
            <span class="sing-in">Sing In</span>
          </p>
        </v-container>
      </v-form>
    </div>
  </section>
</template>

<script>
import authService from "../services/authService";
import "../styles/registerPage.css";

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
      loading: false,
      errors: [],
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
</style>