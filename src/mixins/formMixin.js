export default {
  data() {
    return {
      valid: true,
    };
  },
  methods: {
    validate(form) {
      return form
        ? form.validate()
        : this.$refs.form
        ? this.$refs.form.validate()
        : true;
    },

    resetValidation(form) {
       let myForm = form || this.$refs.form;
       if(myForm) myForm.resetValidation();
    },
  },
};
