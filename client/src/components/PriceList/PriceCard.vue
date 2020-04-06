<template>
  <div v-b-hover="setShadow" :class="shadow ? 'shadow' : ''" class="price-card mb-2">
    <div class="price-card-top">
      <div class="price-card-top-type" :class="'bg-' + type.color">{{type.title}}</div>
      <img :src="type.img" alt />
    </div>
    <div class="price-card-bottom" :class="'bg-' + type.color">
      <div class="price-card-price">
        <h1>{{type.price}}</h1>
        <p>Per {{type.period}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type"],
  data() {
    return {
      shadow: false
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
.price-card {
  width: 300px;
  max-width: 100%;
  border-radius: 5px;
  overflow: hidden;

  &-top {
    width: 100%;
    height: 250px;
    position: relative;
    overflow: hidden;

    &-type {
      position: absolute;
      width: 100%;
      height: 40px;
      left: -60px;
      top: 30px;
      transform: rotate(-35deg);
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      font-size: 21px;
      text-transform: capitalize;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  &-bottom {
    width: 100%;
    height: 150px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 35px;
    }

    p {
      font-size: 25px;
    }
  }
}
</style>