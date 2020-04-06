<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-1" label="Message" label-for="input-1">
        <b-form-textarea
          id="textarea"
          v-model="form.text"
          placeholder="Your message..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger" class="mx-2">Reset</b-button>
    </b-form>
    <Alert class="my-3" :msg="'Successfully sent message - (Fake Data)'" :alert="alert" />
  </div>
</template>

<script>
import Alert from "@/components/Alerts/Alert";

export default {
  components: { Alert },
  data() {
    return {
      alert: false,
      form: {
        email: "",
        name: "",
        text: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.alert = !this.alert;
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>