<template>
  <div class="coaches bg-light text-dark py-5">
    <b-container v-if="coaches.length">
      <h1 class="text-center mb-5">Coaches</h1>
      <vue-glide :gap="50" bound :breakpoints="breakpoints" class="coaches__list">
        <vue-glide-slide
          class="d-flex justify-content-center"
          v-for="(coach, i) in coaches"
          :key="i"
        >
          <Coach :coach="coach" />
        </vue-glide-slide>
        <template slot="control">
          <button
            class="control__button control__button--left bg-danger text-light"
            data-glide-dir="<"
          >
            <font-awesome-icon icon="arrow-left"></font-awesome-icon>
          </button>
          <button
            class="control__button control__button--right bg-danger text-light"
            data-glide-dir=">"
          >
            <font-awesome-icon icon="arrow-right"></font-awesome-icon>
          </button>
        </template>
      </vue-glide>
    </b-container>
    <b-container v-else>
      <div class="no-data-message p-5">
        <h1 class="text-center">No data</h1>
      </div>
    </b-container>
  </div>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";
import axios from 'axios'

import Coach from "./CoachCard";
export default {
  components: {
    Coach,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  data() {
    return {
      breakpoints: {
        1000: {
          perView: 2
        },

        500: {
          perView: 1
        }
      },
      coaches: [],
      
    };
  },
  created() {
    axios.get('api/coaches')
     .then(res => {
       this.coaches = res.data
     })
  }
};
</script>

<style lang="scss" scoped>
.coaches {
  width: 100%;
  min-height: 300px;

  &__list:hover .control__button {
    display: inline-block;
    opacity: 0.9;
  }

  .control {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    top: 46%;

    &__button {
      background: #eee;
      border: none;
      font-size: 15px;
      border-radius: 50%;
      padding: 10px;
      position: absolute;
      top: 46%;
      outline: none;
      display: none;
      transition: all 0.2s ease;
      opacity: 0;
    }

    &__button--left {
      left: -15px;
    }

    &__button--right {
      right: -15px;
    }
  }
}

@media (max-width: 1000px) {
  .coaches {
    .control__button {
      opacity: 0.5;

      &--left {
        left: 0;
      }
      &--right {
        right: 0;
      }
    }
  }
}
</style>