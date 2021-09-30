<template>
  <div>
    <div class="page-container">
      <div class="page-content">
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
        >
          <template slot="startDate" slot-scope="data">
            {{ data.item.startDate | dateTimeFilter }}</template
          >
          <template slot="endDate" slot-scope="data">
            {{ data.item.endDate | dateTimeFilter }}</template
          >
          <template slot="projectId" slot-scope="data">
            {{ getProjectNameByProjectId(data.item.projectId) }}</template
          >
          <template slot="customerId" slot-scope="data">
            {{ getCustomerNameByCustomerId(data.item.customerId) }}</template
          >
          <template slot="activityId" slot-scope="data">
            {{ getActivityNameByActivityId(data.item.activityId) }}</template
          >
        </app-table>
      </div>
    </div>

    <app-dialog
      v-model="form.dialog"
      title="TimeSheet"
      @confirm="confirmDialog"
      @cancel="cancelDialog"
    >
      <template slot="content">
        <time-sheet-form
          v-if="itemSelected"
          ref="form"
          :customers="options.customers"
          :projects="options.projects"
          :activities="options.activities"
          v-model="itemSelected"
        >
        </time-sheet-form>
      </template>
    </app-dialog>
  </div>
</template>

<script>
import moment from "moment";
import TimeSheetService from "../services/timeSheetService";
import TimeSheetForm from "../forms/timeSheets/TimeSheetForm.vue";
import PageMixin from "../mixins/pageMixin";
export default {
  components: { TimeSheetForm },
  mixins: [PageMixin],
  data() {
    return {
      title: "Time Sheet",
      entityService: TimeSheetService,
      options: null,
      headers: [
        {
          text: "Start Date",
          align: "start",
          sortable: false,
          value: "startDate",
        },
        {
          text: "End Date",
          align: "start",
          sortable: false,
          value: "endDate",
        },
        {
          text: "Code",
          align: "start",
          sortable: false,
          value: "code",
        },
        {
          text: "Project",
          align: "start",
          sortable: false,
          value: "projectId",
        },
        {
          text: "Customer",
          align: "start",
          sortable: false,
          value: "customerId",
        },
        {
          text: "Activity",
          align: "start",
          sortable: false,
          value: "activityId",
        },
        // {
        //   text: "Name",
        //   align: "start",
        //   sortable: false,
        //   value: "name",
        // },
        // {
        //   text: "Company Name",
        //   align: "start",
        //   sortable: false,
        //   value: "companyName",
        // },
      ],
    };
  },
  filters: {
    dateTimeFilter(value) {
      if (!value) return null;
      return moment(value).format("DD/MM/yyyy hh:mm");
    },
  },
  methods: {
    getProjectNameByProjectId(projectId) {
      if (
        !this.options ||
        !this.options.projects ||
        this.options.projects.length == 0
      )
        return null;
      const project = this.options.projects.find(
        (project) => project.id == projectId
      );
      if (!project) return null;

      return project.name;
    },
    getCustomerNameByCustomerId(customerId) {
      if (
        !this.options ||
        !this.options.customers ||
        this.options.customers.length == 0
      )
        return null;
      const customer = this.options.customers.find(
        (customer) => customer.id == customerId
      );
      if (!customer) return null;

      return customer.name;
    },
    getActivityNameByActivityId(activityId) {
      if (
        !this.options ||
        !this.options.activities ||
        this.options.activities.length == 0
      )
        return null;
      const activity = this.options.activities.find(
        (activity) => activity.id == activityId
      );
      if (!activity) return null;

      return activity.name;
    },
    async getOptions() {
      const res = await this.entityService.getOptions();
      if (res.status == 200) this.options = res.data.data;
    },
  },

  async mounted() {
    await this.getOptions();
  },
};
</script>