<template>
  <div class="calculator">
    <b-container>
      <b-row>
        <b-col sm="12" md="6" class="calculator__calculation py-2 pb-4">
          <Calculation @calculate="updateItems" />
        </b-col>
        <b-col sm="12" md="6" class="calculator__container__table">
          <b-table dark striped bordered fixed :fields="fields" :items="items"></b-table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Calculation from "./Calculation";

export default {
  components: {
    Calculation
  },
  data() {
    return {
      status: "danger",
      fields: ["BMI", "weight-status"],
      itemss: [
        {
          isActive: true,
          BMI: "Below 18.2",
          "weight-status": "Underweight",
          bmi: [0, 18.2],
          _rowVariant: ""
        },
        {
          isActive: true,
          BMI: "18.5 - 24.9",
          "weight-status": "Normal",
          bmi: [18.5, 24.9],
          color: "success",
          _rowVariant: ""
        },
        {
          isActive: true,
          BMI: "25 - 29.9	",
          "weight-status": "Overweight",
          bmi: [25, 29.9],
          _rowVariant: ""
        },
        {
          isActive: true,
          BMI: "30 and Above	",
          "weight-status": "Obese",
          bmi: [30, Infinity],
          _rowVariant: ""
        }
      ]
    };
  },

  computed: {
    items() {
      return this.itemss;
    }
  },
  methods: {
    updateItems(bmi) {
      this.itemss.forEach(field => (field._rowVariant = ""));
      this.bmi = bmi;
      
      let field = this.items.find(item => {
        return item.bmi[0] < this.bmi && item.bmi[1] > this.bmi;
      });

      field._rowVariant = field.color || "danger";
    }
  }
};
</script>

<style lang="scss" scoped>
.calculator {
  width: 100%;
  min-height: 450px;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url("../../assets/gym-3.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;

  &__calculation {
    color: #ffffff;
  }
}
</style>