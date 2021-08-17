<template>
  <section class="error-container">
    <router-link to="/login">
    <img src="/Logo.svg" />
    </router-link >
      <div class="error-content">
        <img src="/404.svg" alt="error" width="100%" height="auto" class="error-image"/>
        <h1 class="title-error">Error 404 :(</h1>
        <p class="text-error">Something's missing.</p>
        <router-link to="login">
          <p class="text-return">Go back</p>
        </router-link>
    </div>
  </section>
</template>

<script>
import "../styles/notFoundPage.css"
export default {

};
</script>
