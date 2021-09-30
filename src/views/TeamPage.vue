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
            <team-form
              v-if="itemSelected"
              :options="options"
              ref="form"
              v-model="itemSelected"
            />
          </template>
        </app-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import pageMixin from "../mixins/pageMixin";
import TeamService from "../services/teamService";
import AppTable from "../components/tables/AppTable.vue";
import AppDialog from "../components/dialogs/AppDialog.vue";
import TeamForm from "../forms/teams/TeamForm.vue";

export default {
  components: { AppTable, AppDialog, TeamForm },
  mixins: [pageMixin],
  data() {
    return {
      title: "Team",
      entityService: TeamService,
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
      ],
      options: null,
    };
  },
  watch: {
    options() {
      this.setOptionsInTeam();
    },
  },
  methods: {
    async newItem() {
      this.itemSelected = {};
      await this.getOptions();
      this.form.dialog = true;
    },
    setOptionsInTeam() {
      let team = this.itemSelected;
      let options = this.options;
      team.usersOptions = options.usersOptions;
      team.customersOptions = options.customersOptions;
      team.projectsOptions = options.projectsOptions;
    },
    async editItem(item) {
      let assignItem = Object.assign({}, item);
      this.itemSelected = assignItem;
      await this.getOptions(item.id);
      this.form.dialog = true;
    },
    async getOptions() {
      const res = await this.entityService.getOptions(this.itemSelected.id);
      if (res.status == 200) {
        this.options = res.data.data;
      }
    },
  },
};
</script>

<style>
</style>