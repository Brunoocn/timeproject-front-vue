<template>
  <v-dialog v-model="open" max-width="200">
    <v-card>
      <v-toolbar color="primary" dark>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer />
        <v-toolbar-items>
          <v-btn icon dark>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-card-text class="mt-5">{{ message }}</v-card-text>
      <v-card-actions>
        <v-btn @click="cancel" text color="primary">Cancel</v-btn>
        <v-btn @click="confirm" color="primary">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      title: "Warning",
      message: "Confirm?",
      resolve: null,
    };
  },
  methods: {
    show(title, message) {
      if (title) this.title = title;
      if (message) this.message = message;
      this.open = true;
      return new Promise((resolve)=> {
        this.resolve = resolve;
      });
    },
    confirm() {
      this.open = false;
      return this.resolve(true);
    },
    cancel() {
      this.open = false;
      return this.resolve(false);
    },
  },
};
</script>

<style>
</style>