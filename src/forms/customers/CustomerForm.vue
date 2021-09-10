<template>
  <div>
    <v-tabs v-model="tab">
      <v-tab key="general">General</v-tab>
      <v-tab key="contact">Contact</v-tab>
      <v-tab key="location">Location</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item key="general">
        <v-container>
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
              pattern="([01]?[0-9]|2[0-3]):[0-5][0-9]"
              v-mask="'##:##'"
              v-model="value.timeBudget"
              label="Time Budget"
            ></v-text-field>
            <v-text-field
              v-model="value.budget"
              label="Budget"
              type="number"
            ></v-text-field>
          </v-form>
        </v-container>
      </v-tab-item>
      <v-tab-item key="contact">
        <v-container>
          <contact-form v-model="value.contact"></contact-form>
        </v-container>
      </v-tab-item>
      <v-tab-item key="location">
        <v-container>
          <location-form v-model="value.location"></location-form>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import LocationForm from "../locations/LocationForm.vue";
import ContactForm from "../contacts/ContactForm";
export default {
  props: ["value"],
  components: { LocationForm, ContactForm },
  data() {
    return { tab: null, valid: true };
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