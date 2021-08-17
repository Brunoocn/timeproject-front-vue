<template>
  <section class="form-container">
    <img src="/Logo.svg" />
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
      <h1 class="title-singin">SingIn</h1>
      <v-form>
        <v-container>
          <v-col cols="12" md="4" class="col-input">
            <h2 class="title-input">
              Account<span class="required-input">*</span>
            </h2>
            <v-text-field
              v-model="model.tenanty"
              label="Your account"
              required
              :disabled="loading"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4" class="col-input">
            <h2 class="title-input">
              Email<span class="required-input">*</span>
            </h2>
            <v-text-field
              v-model="model.email"
              label="Your email"
              required
              :disabled="loading"
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
              :disabled="loading"
            ></v-text-field>
          </v-col>

          <v-btn
            class="btn-login"
            :loading="loading"
            @click="sendLogin"
            :disabled="loading"
            >Login</v-btn
          >

          <p class="subtext">
            Don't have a account? <br />
            <router-link to="register">
              <span class="sing-in">Sing Up</span>
            </router-link>
          </p>
        </v-container>
      </v-form>
    </div>
  </section>
</template>

<script>
import authService from "../services/authService";
import "../styles/loginPage.css";

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
      if (res) this.$router.push({ name: "Main" });
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

