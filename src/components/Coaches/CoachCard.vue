<template>
  <b-card
    :title="coach.name"
    :img-src="coach.imgUrl"
    img-alt="Image"
    img-top
    style="max-width: 20rem;"
    class="mb-2 shadow text-center"
    @click="$router.push('/coaches/' + coach._id)"
  >
    <b-card-text>{{coach.description}}</b-card-text>
    <template v-slot:footer>
      <small class="text-danger ml-3">
        <i class="fab fa-instagram-square"></i>
      </small>
      <small class="text-primary ml-3">
        <i class="fab fa-facebook-square"></i>
      </small>
    </template>
  </b-card>
</template>

<script>
export default {
  props: ["coach"],
  data() {
    return {};
  },
  computed: {
    modifiedName() {
      return this.coach.name.toLowerCase().replace(' ', '-');
    }
  },
  

};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 300px;
  clip-path: circle(50% at 70% 40%);
}

.card-footer {
  text-align: right;
  font-size: 25px;

  small {
    cursor: pointer;
  }
}
</style>