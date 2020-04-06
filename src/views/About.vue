<template>
  <div class="about">
    <Breadcrumb :title="'ABOUT US'" />
    <b-container>
      <b-row class="mt-5">
        <b-col sm="12" lg="7" class="my-3 my-sm-4">
          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000"
            fade
            indicators
            img-width="1024"
            img-height="480"
          >
            <b-carousel-slide img-src="https://kron.ba/wp-content/uploads/2017/06/kron-20.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="https://kron.ba/wp-content/uploads/2017/06/kron-1.jpg"></b-carousel-slide>
            <b-carousel-slide img-src="https://kron.ba/wp-content/uploads/2017/06/kron-5.jpg"></b-carousel-slide>
          </b-carousel>
        </b-col>
        <b-col sm="12" lg="4" offset-lg="1" class="my-3 my-sm-4 about__text">
          <h2 class="text-left mb-3 border-bottom">How we work</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quis?
            Nam obcaecati sequi ratione voluptates quo dicta
            perferendis quia assumenda, alias corporis. Eligendi vero
            ullam distinctio reprehenderit fugit laboriosam quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, quis?
            Nam obcaecati sequi ratione voluptates quo dicta
            perferendis quia assumenda, alias corporis. Eligendi vero
            ullam distinctio reprehenderit fugit laboriosam quibusdam.
          </p>
        </b-col>
      </b-row>
      <h2 class="text-left mb-3 border-bottom">Gallery</h2>
      <LightBox />
    </b-container>
    <Count />
    <Footer />
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Footer from "../components/Footer/Footer";
import Count from "../components/Count/Count";
import LightBox from "../components/ImageLightBox/LightBox";

export default {
  components: { Breadcrumb, Footer, Count, LightBox }
};
</script>

<style lang="scss" scoped>
.about {
  &__text {
    font-size: 19px;
  }
}
</style>