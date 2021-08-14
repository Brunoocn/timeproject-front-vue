<template>
  <v-snackbar timeout="-1" top center :color="notification.type" v-model="open">
    <div v-for="(alert, index) in notification.alerts" :key="index">
      {{ alert.value || alert }}
    </div>
    <template v-slot:action="{ attrs }">
      <v-btn dark icon v-bind="attrs" @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return { open: false };
  },
  watch: {
    "notification.alerts"(val) {
      if (val && val.length > 0) this.open = true;
      else this.open = false;
    },
  },
  computed: {
    ...mapGetters(["notification"]),
  },
  methods: {
    ...mapActions(["notify"]),

    close() {
      this.open = false;
      setTimeout(() => this.notify(null), 1000);
    },
  },
};
</script>

<style>
</style>