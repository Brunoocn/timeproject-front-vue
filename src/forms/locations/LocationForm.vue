<template>
  <div>
    <v-form ref="form" v-if="value" v-model="valid">
      <v-text-field v-model="value.address" label="Address"></v-text-field>
      <v-text-field v-model="value.country" label="Country"></v-text-field>
      <v-text-field v-model="value.currency" label="Currency"></v-text-field>
      <v-text-field v-model="value.timeZone" label="Time Zone"></v-text-field>
    </v-form>
  </div>
</template>

<script>
import formMixin from "../../mixins/formMixin";
export default {
  props: ["value"],
  mixins: [formMixin],
};
</script>

<style>
</style>