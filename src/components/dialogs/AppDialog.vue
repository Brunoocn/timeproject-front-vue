<template>
  <v-dialog
    v-model="dialog"
    hide-overlay
    persistent
    width="500"
    @input="$emit('input', dialog)"
  >
    <v-card>
      <v-toolbar dark color="primary" class="mb-0 text-h5 elevation-0">
        {{ title }}
      </v-toolbar>

      <v-card-text v-if="!noPadding && noPadding != ''">
        <slot name="content"></slot>
      </v-card-text>

      <div v-else>
        <slot name="content"></slot>
      </div>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="$emit('cancel')"> Cancel</v-btn>
        <v-btn color="primary" @click="$emit('confirm')"> Confirm </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["value", "title", "noPadding"],
  data() {
    return { dialog: false };
  },
  watch: {
    value(val) {
      this.dialog = val;
    },
  },
};
</script>

<style>
</style>