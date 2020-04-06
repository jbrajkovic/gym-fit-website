<template>
  <div class="breadcrumb">
    <b-container>
      <h1 class="text-center">
        {{title}}
      </h1>
      <p @click="$router.push('/')" class="breadcrumb__home"><b-icon icon="house-fill" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
        Home</p>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  width: 100%;
  height: 350px;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url("../../assets/gym-1.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  &__home {
    font-size: 20px;
    text-align: center;
    cursor: pointer;
  }
}
</style>