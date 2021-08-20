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
      v-model="rulesEdit.dialog"
      :title="`User Rules ${itemSelected ? itemSelected.name : ''}`"
      @confirm="rulesEditConfirmDialog"
      @cancel="rulesEditCancelDialog"
    >
      <template slot="content">
        <user-rules-form :rules="rulesEdit.rules"></user-rules-form>
      </template>
    </app-dialog>
  </div>
</template>

<script>
import pageMixin from "../mixins/pageMixin";
import AppTitle from "../components/texts/AppTitle.vue";
import UserService from "../services/userService";
import AppTable from "../components/tables/AppTable.vue";
import AppDialog from "../components/dialogs/AppDialog.vue";
import UserRulesForm from "../forms/users/UserRulesForm.vue";
export default {
  components: { AppTitle, AppTable, AppDialog, UserRulesForm },
  mixins: [pageMixin],
  data() {
    return {
      title: "User",
      entityService: UserService,
      rulesEdit: { dialog: false, rules: [] },
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
      ],
      actions: [
        {
          icon: "mdi-lock",
          color: "primary",
          handle: this.editRules,
        },
        {
          icon: "mdi-pencil",
          color: "warning",
          handle: this.editItem,
        },
        { icon: "mdi-delete", color: "error", handle: this.deleteItem },
      ],
    };
  },
  methods: {
    async getRules() {
      if (!this.itemSelected) return;
      const res = await UserService.getRules(this.itemSelected.id);
      if (res.status == 200) this.rulesEdit.rules = res.data.data;
    },
    rulesEditCancelDialog() {
      this.rulesEdit.dialog = false;
      this.itemSelected = null;
      this.rulesEdit.rules = [];
    },
    async rulesEditConfirmDialog() {
      const res = await UserService.updateRules(
        this.itemSelected.id,
        this.rulesEdit.rules
      );
      if (res.status == 200) {
        this.rulesEdit.dialog = false;
        this.rulesEdit.rules = [];
        this.itemSelected = null;
        await this.getItems();
      }
    },
    async editRules(item) {
      let assignItem = Object.assign({}, item);
      this.itemSelected = assignItem;
      await this.getRules();
      this.rulesEdit.dialog = true;
    },
  },
};
</script>

<style>
</style>