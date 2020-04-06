<template>
  <div id="services" class="services bg-light text-dark py-5">
    <b-container>
      <h1 class="text-center mt-3 mb-5">Services</h1>
      <b-row>
        <b-col xs="12" sm="6" md="4" class="d-flex justify-content-center mb-3">
          <ServicesCard :service="services.gym"/>
        </b-col>
        <b-col xs="12" sm="6" md="4" class="d-flex justify-content-center mb-3">
          <ServicesCard :service="services.group"/>
        </b-col>
        <b-col xs="12" sm="6" md="4" class="d-flex justify-content-center mb-3">
          <ServicesCard :service="services.pilates"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ServicesCard from "./ServicesCard";

export default {
  components: { ServicesCard },
  data() {
    return {
      services: {
          gym: {
              imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbSdwohYtHI82uvKNJfATu2Arlmg3BAzn-kvAq4apS59zRmf0o',
              title: 'Individual Training',
              description: 'Lorem Ipsum Dolor sit, lorem ipsum dolor lorem ipsu, dolor...'
          },
          group: {
              imgUrl: 'https://www.fitness.com.hr/images/articles/f9cd322f-26e8-41d9-8853-84fa539485b3.jpg',
              title: 'Group Training',
              description: 'Lorem Ipsum Dolor sit, lorem ipsum dolor lorem ipsu, dolor...'
          },
          pilates: {
              imgUrl: 'https://www.ucd.ie/sportandfitness/t4media/Banner---PT-Course.jpg',
              title: 'Personal Trainer',
              description: 'Lorem Ipsum Dolor sit, lorem ipsum dolor lorem ipsu, dolor...'
          }
      }
    };
  },
  methods: {
    setShadow(hovered) {
      this.shadow = hovered;
    }
  }
};
</script>

<style lang="scss" scoped>
.services {
  width: 100%;
}
</style>