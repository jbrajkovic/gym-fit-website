<template>
  <div class="count">
    <b-container>
      <div class="numbers">
        <div class="number number-members">
          <h2 class="text-danger">Members</h2>
          <number ref="numberExample" :delay="3" :to="68" />
        </div>
        <div class="number number-equipment">
          <h2 class="text-danger">Gyms</h2>
          <number ref="numberExample" :delay="3" :to="3" />
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  
};
</script>

<style lang="scss" scoped>
.count {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;

  .numbers {
    display: flex;
    justify-content: space-around;
    background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
      url("../../assets/gym-3.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: #fff;
    padding: 20px;
    border-radius: 15px;

    .number {
      width: 170px;
      max-width: 45%;
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 40px;
    }
  }
}

@media (max-width: 576px) {
  .count {
    .numbers {
      .number {
        font-size: 26px;

        h2 {
          font-size: 25px;
        }
      }
    }
  }
}
</style>