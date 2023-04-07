import useVuelidate from '@vuelidate/core';
import { required, minValue } from '@vuelidate/validators';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  // setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      v$: useVuelidate(),
      number: 1,
      showAll: false,
    };
  },
  validations() {
    return {
      number: {
        required,
        minLength: minValue(5),
      },
    };
  },
  // validations: {
  //   number: {
  //     required,
  //     minLength: minValue(5),
  //   },
  // },
});
