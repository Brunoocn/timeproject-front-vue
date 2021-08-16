<template>
    <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateFormatted"
              :label="label"
              hint="MM/DD/YYYY format"  
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            @input="inputEvent"
          ></v-date-picker>
        </v-menu>
</template>

<script>
import moment from 'moment';
export default {
  props:{
  label: String,
  value: String
},
  data(){
    return{
      date: null,
      dateFormatted: null,
      menu1: false,
      menu2: false,
      valid: true,
    }
    },

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

    watch: {
      date () {
        this.dateFormatted = moment(this.value).format('DD/MM/YYYY')
      },
      value(val){
        this.date = val
        if(val){
          this.dateFormatted = moment(this.value).format('DD/MM/YYYY')
        }
      }
    },

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null
        return moment(date).format('YYYY-MM-DD')
        // const [month, day, year] = date.split('/')
        // return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      inputEvent(value){
      this.$emit("input", value);
      this.menu1 = false
      }
      
    },
    mounted(){
       this.date = this.value
        if(this.value){
          this.dateFormatted = moment(this.value).format('DD/MM/YYYY')
        }
    }
}
</script>

<style>

</style>