<template>
  <div class="exercises">
    <Breadcrumb :title="'EXERCISES'" />
    <b-container>
      <h1 class="my-4 py-1 border-bottom">Exercises by muscle group...</h1>
      <div class="my-5">
        <b-card no-body v-if="tabs.length > 0">
          <b-tabs card>
            <b-tab :title="tab.muscle" v-for="(tab,i) in tabs" :key="i">
              <div>
                <b-tabs content-class="mt-3" align="center">
                  <b-tab :title="exercise.name" v-for="(exercise,i) in tab.exercises" :key="i">
                    <div class="exercise-container">
                      <p>{{exercise.description}}</p>
                      <div>
                        <b-embed type="iframe" aspect="16by9" :src="exercise.video" allowfullscreen></b-embed>
                      </div>
                    </div>
                  </b-tab>
                </b-tabs>
              </div>
            </b-tab>
          </b-tabs>
        </b-card>
        <div v-else class="d-flex justify-content-center mb-3">
          <b-spinner label="Loading..."></b-spinner>
        </div>
      </div>
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
      tabs: [],
      tabss: [
        {
          title: "Arms",
          exercises: [
            {
              name: "Biceps Curls",
              video: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            },
            {
              name: "Bench Press for Triceps",
              video: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            }
          ]
        },
        {
          title: "Chest",
          exercises: [
            {
              name: "Push Ups",
              video: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            },
            {
              name: "Bench Press for Chest",
              video: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            }
          ]
        },
        {
          title: "Legs",
          exercises: [
            {
              name: "Squat",
              video: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            },
            {
              name: "Leg Press",
              video: "https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            }
          ]
        }
      ]
    };
  },
  created() {
    axios
      .get("api/exercises", {
        headers: { "Set-Cookie": "HttpOnly;Secure;SameSite=Strict" }
      })
      .then(res => {
        this.tabs = res.data;
      });
  }
};
</script>

<style lang="scss" scoped>
a {
  color: #111111 !important;
}
</style>