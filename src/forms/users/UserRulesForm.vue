<template>
  <div>
    <div v-for="(rule, index) in rules" :key="index">
      <v-checkbox :label="rule.key" v-model="rule.value"></v-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rules: Array,
  },
};
</script>

<style>
</style>