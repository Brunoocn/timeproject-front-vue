<template>
  <section class="form-container">
    <img src="/bubble.svg" alt="bubble" class="bubble-left" />
    <img src="/bubble-right.svg" alt="bubble" class="bubble-right" />
    <div class="form-content">
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
            ></v-text-field>
          </v-col>
          <v-btn color="primary" @click="sendRegister">Register</v-btn>
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