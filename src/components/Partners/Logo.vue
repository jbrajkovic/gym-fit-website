<template>
  <div class="logo">
    <div class="card">
      <img
        :src="img"
        class="card-img-top"
        alt="..."
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['img'],
  data() {
    return {

    }
  }
};
</script>

<style lang="scss" scoped>
.logo {
  img {
    min-width: 50px;
  }
}
</style>