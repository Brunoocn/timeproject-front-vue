<template>
  <div>
    <v-form ref="form" v-if="value" v-model="valid">
      <v-text-field
        v-model="value.description"
        label="Description"
      ></v-text-field>
      <v-text-field v-model="value.email" label="Email"></v-text-field>
      <v-text-field v-model="value.page" label="Page"></v-text-field>
      <v-text-field v-model="value.phone" label="Phone"></v-text-field>
      <v-text-field v-model="value.mobile" label="Mobile"></v-text-field>
      <v-text-field v-model="value.fax" label="Fax"></v-text-field>
    </v-form>
  </div>
</template>

<script>
import formMixin from "../../mixins/formMixin";
export default {
  props: ["value"],
  mixins: [formMixin]
};
</script>

<style>
</style>