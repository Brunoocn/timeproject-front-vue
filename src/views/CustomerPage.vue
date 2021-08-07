<template>
  <div>
    <app-title>Customers</app-title>

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
    </app-table>

    <app-dialog
      v-model="form.dialog"
      title="Customer"
      @confirm="confirmDialog"
      @cancel="cancelDialog"
    >
      <template slot="content">
        <customer-form v-if="itemSelected" ref="form" v-model="itemSelected">
        </customer-form>
      </template>
    </app-dialog>
  </div>
</template>

<script>
import CustomerService from "../services/customerService";
import CustomerForm from "../forms/customers/CustomerForm.vue";
export default {
  components: { CustomerForm },
  data() {
    return {
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
        {
          text: "Company Name",
          align: "start",
          sortable: false,
          value: "companyName",
        },
      ],
      actions: [
        {
          icon: "mdi-pencil",
          color: "warning",
          heandle: this.editItem,
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

  computed: {

    pagesLengthComp() {
      let limit = this.pagination.limit;
      let total = this.pagination.total;
      let length = Math.ceil(total / limit);
      return length < 1 ? 1 : length;
    },
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

      if (res.statusText == "OK") {
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