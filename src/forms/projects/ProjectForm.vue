<template>
  <div>
    <v-form ref="form" v-if="value" v-model="valid">
      <v-text-field v-model="value.code" label="Code"></v-text-field>
      <v-text-field
        v-model="value.name"
        label="Name"
        :rules="[(v) => !!v || 'Name is required']"
      ></v-text-field>
      <v-select
        item-text="name"
        item-value="id"
        label="Custumer"
        :items="customers"
        v-model="value.customerId"
      />
      <v-text-field v-model="value.color" label="Color"></v-text-field>
      <v-text-field
        v-model="value.description"
        label="Description"
      ></v-text-field>
      <date-input
        v-model="value.startDate"
        :rules="[(v) => !!v || 'Start Date is required']"
        label="Start Date"
      />
      <date-input
        v-model="value.endDate"
        :rules="[(v) => !!v || 'End Date is required']"
        label="End Date"
      />
    </v-form>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["value", "customers"],

  data() {
    return {
      valid: true,
    };
  },
  methods: {
    validate() {
      return this.$refs.form.validate();
    },
  },
};
</script>