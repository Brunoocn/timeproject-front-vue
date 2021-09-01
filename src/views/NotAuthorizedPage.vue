<template>
  <div class="page-container">
    <v-row style="margin: 0">
      <v-col cols="4" class="col-text">
        <v-container>
          <router-link to="/login">
            <img src="/Logo.svg" alt="Logo" />
          </router-link>
          <div class="text-container">
            <h1 class="title-notauthorized">
              Not Authorized <span style="color: #ee5253">:(</span>
            </h1>
            <router-link to="/login">
            <button class="button-return">Go back</button>
            </router-link>
          </div>
        </v-container>
      </v-col>
      <v-col cols="8" class="col-image">
        <div class="container-image">
          <img src="/access-denied.svg" alt="Acess Denied" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import "../styles/notAurthorizedPage.css";
export default {};
</script>

