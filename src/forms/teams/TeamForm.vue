<template>
  <div>
    <v-form ref="form" v-if="value" v-model="valid">
      <v-text-field
        v-model="value.name"
        label="Name"
        :rules="[(v) => !!v || 'Teamlead is required']"
      ></v-text-field>

      <v-select
        v-model="value.teamleadUserId"
        label="Teamlead"
        :items="options.users"
        item-text="value"
        item-value="key"
        :rules="[(v) => !!v || 'Teamlead is required']"
      ></v-select>

      <div class="text-h5">Users in Team</div>
      <div v-for="(user, index) in options.usersOptions" :key="index">
        <v-checkbox :label="user.value" v-model="user.select"></v-checkbox>
      </div>

      <div class="text-h5">Customers in Team</div>
      <div v-for="(customer, index) in options.customersOptions" :key="index">
        <v-checkbox
          :label="customer.value"
          v-model="customer.select"
        ></v-checkbox>
      </div>
      <div class="text-h5">Projects in Team</div>
      <div v-for="(project, index) in options.projectsOptions" :key="index">
        <v-checkbox
          :label="project.value"
          v-model="project.select"
        ></v-checkbox>
      </div>
    </v-form>
  </div>
</template>

<script>
export default {
  props: ["value", "options"],
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