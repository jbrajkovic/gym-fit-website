<template>
  <div class="gallery">
    <div class="gallery__image" v-for="(img,i) in images" :key="i" @click="showMultiple(i)">
      <img :src="img" :alt="i" />
    </div>
    <VueEasyLightbox :visible="visible" :imgs="imgs" :index="index" @hide="handleHide"></VueEasyLightbox>
  </div>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      imgs: "", // Img Url , string or Array
      visible: false,
      index: 0, // default,
      images: [
        "https://www.hotelexecutiveflorence.com/gallery/gym/1.jpg",
        "https://www.hotelexecutiveflorence.com/gallery/gym/2.jpg",
        "https://www.hotelexecutiveflorence.com/gallery/gym/3.jpg",
        "https://www.hotelexecutiveflorence.com/gallery/gym/4.jpg",
        "https://www.hotelexecutiveflorence.com/gallery/gym/5.jpg",
        "https://www.hotelexecutiveflorence.com/gallery/gym/6.jpg",
        "https://www.hotelexecutiveflorence.com/gallery/gym/7.jpg",
        "https://www.hotelexecutiveflorence.com/gallery/gym/8.jpg"
      ]
    };
  },
  methods: {
    showSingle() {
      this.imgs = "http://via.placeholder.com/350x150";
      this.show();
    },
    showMultiple(i) {
      this.imgs = [
        "https://www.hotelexecutiveflorence.com/gallery/gym/1.jpg",
        "https://www.hotelexecutiveflorence.com/gallery/gym/2.jpg",
        "https://www.hotelexecutiveflorence.com/gallery/gym/3.jpg",
        "https://www.hotelexecutiveflorence.com/gallery/gym/4.jpg",
        "https://www.hotelexecutiveflorence.com/gallery/gym/5.jpg",
        "https://www.hotelexecutiveflorence.com/gallery/gym/6.jpg",
        "https://www.hotelexecutiveflorence.com/gallery/gym/7.jpg",
        "https://www.hotelexecutiveflorence.com/gallery/gym/8.jpg"
      ];
      this.index = i; // index of imgList
      this.show();
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  grid-gap: 10px;

  &__image {
    img {
      width: 100%;
    }
  }
}
</style>

