<template>
  <div>
    <app-title>Activity</app-title>
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
      title="Activity"
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
import AppTitle from "../components/texts/AppTitle.vue";
import CustomerService from "../services/activityService";
import AppTable from "../components/tables/AppTable.vue";
import AppDialog from "../components/dialogs/AppDialog.vue";
import ActivityForm from "../forms/activitys/ActivityForm.vue";
export default {
  components: { AppTitle, AppTable, AppDialog, ActivityForm },
  data() {
    return {
      inputText: "Bruno",
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
          text:"Color",
          align:"start",
          sortable:false,
          value:"description",
        },
        {
          text:"Budget",
          align:"start",
          sortable:false,
          value:"budget",
        }
      ],
      actions: [
        {
          icon: "mdi-pencil",
          color: "warning",
          handle: this.editItem,
        },
        { icon: "mdi-delete", color: "error", heandle: this.editItem },
      ],
      itemSelected: null,
      items: [],
      form: { dialog: false },
      errors: [],
      pagination: {
        page: 1,
        limit: 30,
        total: 0,
      },
    };
  },

  methods: {
    async changePage(page) {
      this.pagination.page = page;
      await this.getItems();
    },
    newItem() {
      this.itemSelected = {};
      this.form.dialog = true;
    },
    editItem(item) {
      let assignItem = Object.assign({}, item);
      this.itemSelected = assignItem;
      this.form.dialog = true;
    },
    clickRow(row) {
      this.itemSelected = row;
    },
    cancelDialog() {
      this.itemSelected = null;
      this.form.dialog = false;
    },
    async confirmDialog() {
      await this.saveItem(this.itemSelected);
    },
    async saveItem() {
      if (!this.$refs.form.validate()) return;

      const res = this.itemSelected.id
        ? await CustomerService.update(this.itemSelected)
        : await CustomerService.insert(this.itemSelected);
      if (res.data.success) {
        this.cancelDialog();
        await this.getItems();
        return;
      }

      this.errors = res.data.data;
    },
    async getItems() {
      const res = await CustomerService.getAll(
        this.pagination.page,
        this.pagination.limit
      );

      if (res.status == 200) {
        this.items = res.data.data.data;
        this.pagination.total = res.data.data.total;
      }
    },
  },
  async mounted() {
    await this.getItems();
  },
};
</script>

<style>
</style>