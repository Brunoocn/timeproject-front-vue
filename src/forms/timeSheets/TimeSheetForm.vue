<template>
  <div>
    <v-form ref="form" v-if="value" v-model="valid">
      <v-datetime-picker
        label="Start Date"
        date-format="dd/MM/yyyy"
        :time-picker-props="{ format: '24hr' }"
        :datetime="startDateComp"
        @input="($event) => (value.startDate = $event)"
      >
        <template slot="timeIcon">
          <v-icon>mdi-clock</v-icon>
        </template>
        <template slot="dateIcon">
          <v-icon>mdi-calendar</v-icon>
        </template>
        <template slot="actions" slot-scope="{ parent }">
          <v-btn color="primary" text @click="parent.clearHandler">
            Cancel</v-btn
          >
          <v-btn color="primary" @click="parent.okHandler"> Confirm </v-btn>
        </template>
      </v-datetime-picker>
      <v-datetime-picker
        label="End Date"
        :datetime="endDateComp"
        @input="($event) => (value.endDate = $event)"
        date-format="dd/MM/yyyy"
        :time-picker-props="{ format: '24hr' }"
      >
        <template slot="timeIcon">
          <v-icon>mdi-clock</v-icon>
        </template>
        <template slot="dateIcon">
          <v-icon>mdi-calendar</v-icon>
        </template>
        <template slot="actions" slot-scope="{ parent }">
          <v-btn color="primary" text @click="parent.clearHandler">
            Cancel</v-btn
          >
          <v-btn color="primary" @click="parent.okHandler"> Confirm </v-btn>
        </template>
      </v-datetime-picker>
      <v-select
        :items="customers"
        item-text="name"
        item-value="id"
        label="Customer"
        v-model="value.customerId"
      >
      </v-select>
      <v-select
        :items="projects"
        item-text="name"
        item-value="id"
        label="Project"
        v-model="value.projectId"
        :rules="[(v) => !!v || 'Project is required']"
      >
      </v-select>
      <v-select
        :items="activities"
        item-text="name"
        item-value="id"
        label="Activity"
        v-model="value.activityId"
        :rules="[(v) => !!v || 'Project is required']"
      >
      </v-select>
      <v-text-field
        v-model="value.description"
        label="Description"
      ></v-text-field>

      <v-select
        v-model="value.tags"
        label="Tags"
        :items="tags"
        multiple
      ></v-select>

      <v-text-field v-model="value.fixedRate" label="Fixed Rate"></v-text-field>

      <v-text-field
        v-model="value.hourlyRate"
        label="Hourly Rate"
      ></v-text-field>

      <v-checkbox v-model="value.exported" label="Exported"></v-checkbox>
      <v-checkbox v-model="value.billable" label="Billable"></v-checkbox>
    </v-form>
  </div>
</template>

<script>
import formMixin from "../../mixins/formMixin";
export default {
  props: ["value", "options", "projects", "activities", "customers", "tags"],
  mixins: [formMixin],
  computed: {
    startDateComp() {
      if (!this.value.startDate) return null;
      else return new Date(this.value.startDate);
    },
    endDateComp() {
      if (!this.value.endDate) return null;
      else return new Date(this.value.endDate);
    },
  },

};
</script>

<style>
</style>