<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
      hide-default-footer
    >
      <template
        v-for="header in headers"
        :slot="`item.${header.value}`"
        slot-scope="data"
      >
        <slot :name="header.value" :item="data.item">
          {{ data.item[header.value] }}
        </slot>
      </template>

      <template slot="item.actions" slot-scope="data">
        <v-card-actions>
          <v-spacer />
          <div class="text-end" v-for="(action, index) in actions" :key="index">
            <v-btn :color="action.color" icon @click="action.handle(data.item)"
              ><v-icon>{{ action.icon }}</v-icon></v-btn
            >
          </div>
        </v-card-actions>
      </template>
    </v-data-table>

    <div class="text-center">
      <v-pagination
        class="mt-5"
        @input="($event) => $emit('change-page', $event)"
        v-model="pageModel"
        :length="pagesLengthComp"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items", "actions", "headers", "limit", "total", "page"],
  data() {
    return { pageModel: 1 };
  },
  methods: {
    setHeaderAction() {
      if (!this.headers.find((header) => header.value == "actions"))
        this.headers.push({
          text: "Actions",
          align: "end",
          value: "actions",
          sortable: false,
        });
    },
  },
  computed: {
    pagesLengthComp() {
      let length = Math.ceil(this.total / this.limit);
      return length < 1 ? 1 : length;
    },
  },
  mounted() {
    if (this.page) this.pageModel = this.page;
    this.setHeaderAction();
  },
};
</script>

<style>
</style>