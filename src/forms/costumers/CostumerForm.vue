<template>
  <div>
    <v-form ref="form" v-if="value" v-model="valid">
      <v-text-field v-model="value.code" label="Code"></v-text-field>
      <v-text-field
        v-model="value.name"
        label="Name"
        :rules="[(v) => !!v || 'Nome é obrigatório']"
      ></v-text-field>
      <v-text-field
        v-model="value.companyName"
        label="Company Name"
      ></v-text-field>
      <v-text-field
        v-model="value.description"
        label="Description"
      ></v-text-field>
      <v-text-field
        v-model="value.budget"
        label="Budget"
        type="number"
      ></v-text-field>
    </v-form>
  </div>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return { valid: true };
  },
  methods: {
    validate() {
      return this.$refs.form.validate();
    },
  },
};
</script>

<style>
</style>