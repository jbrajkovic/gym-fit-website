<template>
  <div class="services">
    <Breadcrumb :title="serviceTitle | uppercase | removeDash" />
    <b-container>
      <component :is="servicesComponents[serviceTitle]"></component>
      <h1 class="my-3 py-2 border-bottom" v-if="serviceTitle !== 'individual-training'">Check in</h1>
      <b-row class="my-3" v-if="serviceTitle !== 'individual-training'">
        <b-col cols="12" md="4">
          <b-calendar
            block
            v-model="value"
            :date-disabled-fn="dateDisabled"
            @context="onContext"
            locale="en-US"
          ></b-calendar>
        </b-col>
        <b-col cols="12" md="4" class="my-3" v-if="value">
          <h2>Avaliable trainings:</h2>
          <p>Date: {{value}}</p>
          <b-form-group>
            <b-form-radio-group
              id="btn-radios-2"
              v-model="selected"
              :options="options"
              buttons
              button-variant="outline-primary"
              name="radio-btn-outline"
            ></b-form-radio-group>
          </b-form-group>
          <b-form-select v-if="coaches" v-model="trainer" class="mb-3">
            <b-form-select-option :value="null">Please select an Trainer</b-form-select-option>
            <b-form-select-option
              v-for="(coach, i) in coaches"
              :key="i"
              :value="coach.name"
            >{{coach.name}}</b-form-select-option>
          </b-form-select>
        </b-col>
        <b-col cols="12" md="4" class="my-3" v-if="value">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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

            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
              <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4">
              <b-form-radio-group
                v-model="selectedGender"
                :options="form.gender"
                class="mb-3"
                value-field="value"
                text-field="name"
                disabled-field="notEnabled"
              ></b-form-radio-group>
            </b-form-group>

            <b-button type="submit" variant="primary">Check In</b-button>
            <b-button type="reset" variant="danger" class="ml-2">Reset</b-button>
          </b-form>
          <Alert class="my-3" :msg="'Successfully check in - (Fake Data)'" :alert="alert" />
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import PersonalTrainerText from "../components/ServicesText/PersonalTrainer";
import GroupTrainigText from "../components/ServicesText/GroupTraining";
import IndividualTrainingText from "../components/ServicesText/IndividualTraining";
import Footer from "../components/Footer/Footer";
import Alert from "@/components/Alerts/Alert";
import axios from "axios";

export default {
  components: {
    Breadcrumb,
    PersonalTrainerText,
    GroupTrainigText,
    IndividualTrainingText,
    Alert,
    Footer
  },
  data() {
    return {
      serviceTitle: this.$route.params.name,
      servicesComponents: {
        "group-training": GroupTrainigText,
        "individual-training": IndividualTrainingText,
        "personal-trainer": PersonalTrainerText
      },
      value: "",
      day: null,
      coaches: null,
      context: null,
      time: "",
      selected: "radio1",
      selectedGender: "M",
      trainer: null,
      options: [
        { text: "9:00 AM", value: "radio1", disabled: false },
        { text: "13:00 PM", value: "radio2", disabled: false },
        { text: "19:00 PM", value: "radio4", disabled: false }
      ],
      form: {
        email: "",
        name: "",
        food: null,
        gender: [
          { value: "M", name: "Male" },
          { value: "F", name: "Female" }
        ]
      },
      show: true,
      alert: false
    };
  },
  methods: {
    onContext(ctx) {
      this.context = ctx;
    },

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
    },
    dateDisabled(ymd, date) {
      let calendarYear = new Date(date).getFullYear();
      let calendarMonth = new Date(date).getMonth();
      let calendarDate = new Date(date).getDate();
      let currentYear = new Date().getFullYear();
      let currentMonth = new Date().getMonth();
      let currentDate = new Date().getDate();

      let pastYears = calendarYear < currentYear;
      let pastMonths =
        calendarYear === currentYear && calendarMonth < currentMonth;
      let pastDays =
        calendarYear === currentYear &&
        calendarMonth === currentMonth &&
        calendarDate < currentDate;

      return pastYears || pastMonths || pastDays;
    }
  },

  created() {
    if (this.serviceTitle === "personal-trainer") {
      axios.get("api/coaches").then(res => {
        this.coaches = res.data;
      });
    }
  },
  filters: {
    uppercase: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.toUpperCase();
    },
    removeDash: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.replace("-", " ");
    }
  },
  watch: {
    value() {
      this.day = new Date(this.value).getDay();
      this.options[0].disabled = this.day === 0;
    }
  }
};
</script>

<style lang="scss" scoped>
.services {
  img {
    width: 100%;
  }

  &__text {
    font-size: 19px;
  }
}
</style>