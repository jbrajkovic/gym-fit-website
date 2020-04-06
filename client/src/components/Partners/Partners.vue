<template>
  <div class="partners">
    <b-container>
      <h1 class="text-center my-5">Partners</h1>
      <vue-glide
        class="my-5"
        :gap="20"
        autoplay
        :animationDuration="3000"
        :perView="5"
        hoverpause
        type="carousel"
      >
        <vue-glide-slide v-for="(img, i) in images" :key="i">
          <Logo :img="img" />
        </vue-glide-slide>
      </vue-glide>
    </b-container>
  </div>
</template>

<script>
import Logo from "./Logo";
import { Glide, GlideSlide } from "vue-glide-js";

export default {
  components: {
    Logo,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  data() {
    return {
      images: [
        "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6713806/600/400/m2/fpnw/wm0/logos-21-77-.jpg?1563702063&s=3cbd11d46ab37b14314625d8db7d95bd",
        "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6713603/600/400/m2/fpnw/wm0/logos-21-23-.jpg?1563698260&s=6a1124e2f15406668a0346e1b2e3b201",
        "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6713806/600/400/m2/fpnw/wm0/logos-21-77-.jpg?1563702063&s=3cbd11d46ab37b14314625d8db7d95bd",
        "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6713603/600/400/m2/fpnw/wm0/logos-21-23-.jpg?1563698260&s=6a1124e2f15406668a0346e1b2e3b201",
        "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6713806/600/400/m2/fpnw/wm0/logos-21-77-.jpg?1563702063&s=3cbd11d46ab37b14314625d8db7d95bd",
        "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6713603/600/400/m2/fpnw/wm0/logos-21-23-.jpg?1563698260&s=6a1124e2f15406668a0346e1b2e3b201",
        "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6713806/600/400/m2/fpnw/wm0/logos-21-77-.jpg?1563702063&s=3cbd11d46ab37b14314625d8db7d95bd"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.partners {
  width: 100%;
  min-height: 200px;
  display: flex;
  align-items: center;
}
</style>