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
import PageMixin from "../mixins/pageMixin";
export default {
  components: { CustomerForm },
  mixins: [PageMixin],
  data() {
    return {
      title: "Customer",
      entityService: CustomerService,
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
    };
  },
};
</script>