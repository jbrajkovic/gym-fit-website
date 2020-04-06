<template>
  <div class="calculation">
    <h1 class="calculation__title">BMI CALCULATOR</h1>
    <p>Easily calculate your Body Mass Index</p>
    <b-form-group>
      <b-form-input class="form-input" type="number" v-model="weight" placeholder="Weight kg"></b-form-input>
      <b-form-input class="form-input" type="number" v-model="height" placeholder="Height cm"></b-form-input>
    </b-form-group>
    <button class="btn btn-danger btn-lg mr-4" @click="calculateBmi()">Calculate</button>
    <span v-if="finalBmi" class="calculation__message text-success">Your BMI is: {{finalBmi.toFixed(1)}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weight: null,
      height: null,
      finalBmi: null
    }
  },
  methods: {
    calculateBmi() {
      this.finalBmi = this.weight / (this.height / 100 * this.height / 100);
      this.$emit('calculate', this.finalBmi);
      this.weight = null;
      this.height = null
    }
  }
};
</script>

<style lang="scss" scoped>

.calculation {
  &__title {
    border-bottom: 2px solid #dc3545;
    padding: 5px 0;
    display: inline-block;
  }

  .form-input {
    width: 200px;
    margin: 10px 0;
    border-radius: 17px;
  }
}

@media (max-width: 576px) {
  .calculation {

    .form-input {
      width: 100%;
    }
  }
}
</style>