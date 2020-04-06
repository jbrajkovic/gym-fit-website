<template>
  <b-card
    :title="service.title"
    :img-src="service.imgUrl"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    v-b-hover="setShadow"
    class="mb-2 shadow-sm text-center"
    :class="shadow ? 'shadow' : ''"
  >
    <b-card-text>{{service.description}}</b-card-text>

    <b-button href="#" variant="danger" @click="$router.push('/services/' + modifiedTitle)">Details</b-button>
  </b-card>
</template>

<script>
export default {
  props: ["service"],
  data() {
    return {
      shadow: false
    };
  },
  computed: {
    modifiedTitle() {
      return this.service.title.toLowerCase().replace(' ', '-');
    }
  },
  methods: {
    setShadow(hovered) {
      this.shadow = hovered;
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 200px;
}
</style>