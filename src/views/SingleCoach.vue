<template>
  <div class="coaches">
    <Breadcrumb :title="coach.name" />
    <b-container>
      <b-row class="my-4">
        <b-col cols="12" md="8" mt="-4">
          <h1 class="py-2 border-bottom">About {{coach.name}}...</h1>
          <p>{{coach.description}}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda sapiente tenetur voluptate quasi odio, hic rerum molestiae voluptatibus? Nesciunt eius quos pariatur necessitatibus accusantium. Ab voluptate et nobis porro?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, quam quo? Cumque.</p>
        </b-col>
        <b-col cols="12" md="4">
          <img :src="coach.imgUrl" alt class="mb-2" />
          <b-card bg-variant="info" text-variant="white" header="Contact" class="text-center">
            <b-card-text>
              <i class="fab fa-facebook"></i>
              {{coach.facebook}}
            </b-card-text>
            <b-card-text>
              <i class="fab fa-instagram"></i>
              {{coach.instagram}}
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Footer from "../components/Footer/Footer";
import axios from "axios";

export default {
  components: { Breadcrumb, Footer },
  data() {
    return {
      coachName: this.$route.params.name,
      value: "",
      coach: {},
      context: null,
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  },
  methods: {
    onContext(ctx) {
      this.context = ctx;
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
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
  },
  created() {
    axios.get("api/coaches/" + this.coachName).then(res => {
      this.coach = res.data;
      
    });
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
  }
};
</script>

<style lang="scss" scoped>
.coaches {
  img {
    width: 100%;
  }
}
</style>