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
        />
        <app-dialog
          v-model="form.dialog"
          :title="title"
          @confirm="confirmDialog"
          @cancel="cancelDialog"
        >
          <template slot="content">
            <project-form
              v-if="itemSelected"
              ref="form"
              v-model="itemSelected"
              :customers="customers"
            />
          </template>
        </app-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import pageMixin from "../mixins/pageMixin";
import ProjectService from "../services/projectsService";
import AppTable from "../components/tables/AppTable.vue";
import AppDialog from "../components/dialogs/AppDialog.vue";
import ProjectForm from "../forms/projects/ProjectForm.vue";
import CustomerService from "../services/customerService";

export default {
  components: { AppTable, AppDialog, ProjectForm },
  mixins: [pageMixin],
  data() {
    return {
      title: "Projects",
      entityService: ProjectService,
      customers: [],
      headers: [
        {
          text: "Code",
          align: "start",
          sortable: false,
          value: "code",
        },
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
      ],
    };
  },
  methods: {
    async getCustomers() {
      const res = await CustomerService.getAll();
      if (res.status == 200) {
        this.customers = res.data.data.data;
      }
    },
  },

  async mounted() {
    await this.getCustomers();
  },
};
</script>
