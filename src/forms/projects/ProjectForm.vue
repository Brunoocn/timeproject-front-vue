<template>
  <div>
    <v-form ref="form" v-if="value" v-model="valid">
      <v-text-field v-model="value.code" label="Code"></v-text-field>
      <v-text-field
        v-model="value.name"
        label="Name"
        :rules="[(v) => !!v || 'Nome é obrigatório']"
      ></v-text-field>
      <v-select  item-text="name" item-value="id" label="Custumer" :items="customers" v-model="value.customerId" /> 
      <v-text-field v-model="value.color" label="Color"></v-text-field>
      <v-text-field
        v-model="value.description"
        label="Description"
      ></v-text-field>
      <data-component
      v-model="value.startDate"
      label="Start Date"
      />

    </v-form>
  </div>
</template>

<script>
import DataComponent from "../projects/DataComponent.vue"
  export default {
    components:{DataComponent},
    props: ["value", "customers"],
    
    
    data(){
      return{
        valid: true
      }
    },
    methods:{
      validate() {
      return this.$refs.form.validate();
    },
    }
  }
</script>