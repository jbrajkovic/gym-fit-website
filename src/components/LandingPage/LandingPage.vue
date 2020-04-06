<template>
  <div class="landing-page">
    <div class="landing-page__content container">
      <div class="landing-page__content--left">
        <h1 class="landing-page__content__title">
          Time To Change
          <span>Your Body</span>
        </h1>
        <button class="btn btn-danger btn-lg" @click="$router.push('/contact')">Visit Us</button>
        <vue-glide type="carousel" autoplay :animationDuration="9000" :perView="1">
          <vue-glide-slide v-for="(quote, i) in quotes" :key="i">
            <div class="card landing-page__content__text">
              <p class>
                {{quote.title}}
                <span v-if="quote.by">- {{quote.by}}</span>
              </p>
            </div>
          </vue-glide-slide>
        </vue-glide>

        <hr />
      </div>
      <b-card
        border-variant="primary"
        header="Working Time"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
        class="landing-page__content--right"
      >
        <i class="working-time-pin fas fa-thumbtack"></i>
        <b-card-text>
          <p>MON - SAT | 06:00 - 24:00</p>
          <p>SUN | 12:00 - 20:00</p>
        </b-card-text>
      </b-card>
    </div>
    <Indicator />
  </div>
</template>

<script>
import Indicator from "./ScrollIndicator";

export default {
  name: "landing-page",
  components: {
    Indicator
  },
  data() {
    return {
      quotes: [
        { title: "Life begins at the end of your comfort zone.", by: false },
        {
          title: "The only bad workout is the one that didn’t happen.",
          by: false
        },
        {
          title: "Don’t talk about getting things done. Just get them done.",
          by: false
        },
        {
          title:
            "You will never always be motivated. You have to learn to be disciplined."
        },
        {
          title: "Look in the mirror. That’s your competition.",
          by: "John Assaraf"
        },
        {
          title: "A little progress each day adds up to big results.",
          by: "Satya Nani"
        },
        {
          title:
            "Start now. Not tomorrow. Tomorrow won’t make any difference. You will be as tired as you are now.",
          by: false
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.landing-page {
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)),
    url("../../assets/gym-desktop.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  color: #ffffff;

  &__content {
    display: flex;
    justify-content: space-between;

    &--left {
      width: 50%;
    }

    hr {
      width: 100px;
      height: 3px;
      background: #dc3545;
      margin: 0 auto;
    }

    &__title {
      font-size: 50px;
      margin: 0 0 30px;
    }

    &__text {
      font-size: 26px;
      background: transparent;
      padding: 55px 0 1px;
      font-style: italic;
    }

    &--right {
      width: 30%;
      background: transparent;

      .card-body {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
      }

      .working-time-pin {
        position: absolute;
        top: -18px;
        color: #dc3545;
        font-size: 25px;
      }
    }
  }
}

@media (max-width: 1200px) {
  .landing-page {
    &__content {
      &__text {
        padding: 45px 0 1px;
      }

      &--left {
        width: 70%;
      }

      &--right {
        display: none;
      }
    }
  }
}

@media (max-width: 600px) {
  .landing-page {
    &__content {
      &__title {
        font-size: 40px;
      }

      &__text {
        font-size: 24px;
        padding: 25px 0 1px;
      }

      &--left {
        width: 100%;
      }
    }
  }
}
</style>
