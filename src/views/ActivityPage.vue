<template>
  <div>
    <app-title>{{ title }}</app-title>
    <v-btn @click="newItem" class="mb-5" icon large color="primary">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <app-table
      :items="items"
      :headers="headers"
      :actions="actions"
      :page="pagination.page"
      :limit="pagination.limit"
      :total="pagination.total"
      @change-page="changePage"
    />
    <app-dialog
      v-model="form.dialog"
      :title="title"
      @confirm="confirmDialog"
      @cancel="cancelDialog"
    >
      <template slot="content">
        <activity-form v-if="itemSelected" ref="form" v-model="itemSelected" />
      </template>
    </app-dialog>
  </div>
</template>

<script>
import pageMixin from "../mixins/pageMixin";
import AppTitle from "../components/texts/AppTitle.vue";
import ActivityService from "../services/activityService";
import AppTable from "../components/tables/AppTable.vue";
import AppDialog from "../components/dialogs/AppDialog.vue";
import ActivityForm from "../forms/activitys/ActivityForm.vue";

export default {
  components: { AppTitle, AppTable, AppDialog, ActivityForm },
  mixins: [pageMixin],
  data() {
    return {
      title:"Activity",
      entityService: ActivityService,
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        {
          text: "Project",
          align: "start",
          sortable: false,
          value: "project",
        },
        {
          text: "Description",
          align: "start",
          sortable: false,
          value: "description",
        },
        {
          text: "Color",
          align: "start",
          sortable: false,
          value: "description",
        },
        {
          text: "Budget",
          align: "start",
          sortable: false,
          value: "budget",
        },
      ],
    };
  },
};
</script>

<style>
</style>