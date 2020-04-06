<template>
  <div class="price-list">
    <Breadcrumb :title="'PRICE LIST'" />
    <b-container>
      <h1 class="mt-4 mb-2 border-bottom border-danger pb-1 d-inline-block">Membership</h1>
      <b-row class="my-5">
        <b-col sm="12" md="4" class="d-flex justify-content-center mb-3">
          <PriceCard :type="priceCard.daily" />
        </b-col>
        <b-col sm="12" md="4" class="d-flex justify-content-center mb-3">
          <PriceCard :type="priceCard.monthly" />
        </b-col>
        <b-col sm="12" md="4" class="d-flex justify-content-center mb-3">
          <PriceCard :type="priceCard.yearly" />
        </b-col>
      </b-row>
    </b-container>
    <PriceTable />
    <Count />
    <Footer />
  </div>
</template>

<script>
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Count from "../Count/Count";
import Footer from "../Footer/Footer";
import PriceCard from "./PriceCard";
import PriceTable from "./PriceTable";

export default {
  components: { Breadcrumb, PriceCard, Count, PriceTable, Footer },
  data() {
    return {
      priceCard: {
        daily: {
          img:
            "https://i1.wp.com/www.gofattofit.com/wp-content/uploads/2018/12/beginner-gym.jpg?fit=500%2C468&ssl=1",
          price: "5$",
          title: "Daily",
          color: "primary",
          period: "day"
        },
        monthly: {
          img:
            "https://i.pinimg.com/originals/37/f9/07/37f9072afa967ec1e145b0f7b97324a8.jpg",
          price: "45$",
          title: "Monthly",
          color: "danger",
          period: "month"
        },
        yearly: {
          img:
            "https://i.pinimg.com/originals/30/6a/b1/306ab1b5793a4f777ffe0328c26a76f6.jpg",
          price: "400$",
          title: "Yearly",
          color: "info",
          period: "year"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
</style>