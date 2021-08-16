<template>
  <v-menu
    ref="menu1"
    v-model="menu1"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="dateFormatted"
        :label="label"
        hint="MM/DD/YYYY format"
        v-bind="attrs"
        v-on="on"
        :rules="rules || []"
      ></v-text-field>
    </template>
    <v-date-picker :value="value" no-title @input="inputEvent"></v-date-picker>
  </v-menu>
</template>

<script>
import moment from "moment";
export default {
  props: {
    value: String,
    label: String,
    rules: Array
  },
  data() {
    return {
      dateFormatted: null,
      menu1: false,
      valid: true,
    };
  },

  computed: {
  },

  watch: {
    value(val) {
      if (!val) return val;

      this.formatDate();
    },
  },

  methods: {
    formatDate() {
      if (!this.value) return;
      this.dateFormatted = moment(this.value).format("DD/MM/YYYY");
    },
    inputEvent(value) {
      this.$emit("input", value);
      this.menu1 = false;
    },
  },
  mounted() {
    this.formatDate();
  },
};
</script>

<style>
</style>