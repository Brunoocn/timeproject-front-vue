
export default {
  data() {
    return {
      title: null,
      entityService: null,
      headers: [],
      actions: [
        {
          icon: "mdi-pencil",
          color: "warning",
          handle: this.editItem,
        },
        { icon: "mdi-delete", color: "error", handle: this.deleteItem },
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
    selectItem(item){
      let assignItem = Object.assign({}, item);
      this.itemSelected = assignItem;
    },
    async deleteItem(item) {
      const res = await this.entityService.delete(item.id);
      if (res.data.success) {
        await this.getItems();
      }
    },
    cancelDialog() {
      this.itemSelected = null;
      this.form.dialog = false;
    },
    async confirmDialog() {
      await this.saveItem(this.itemSelected);
    },
    async saveItem() {
      if (this.$refs.form) if (!this.$refs.form.validate()) return;

      const res = this.itemSelected.id
        ? await this.entityService.update(this.itemSelected)
        : await this.entityService.insert(this.itemSelected);
      if (res.data.success) {
        this.cancelDialog();
        await this.getItems();
        return;

      }

      this.errors = res.data.data;
    },
    async getItems() {
      const res = await this.entityService.getAll(
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
