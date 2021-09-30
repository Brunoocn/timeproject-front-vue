<template>
  <div>
    <div class="page-container">
      <Menu />
      <div class="page-content">
        <v-container>
          <router-view></router-view>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from '../components/menu/Menu.vue';
export default {
  components: { Menu },
};
</script>

<style>
</style>