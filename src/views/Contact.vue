<template>
  <div class="contact">
    <Breadcrumb :title="'CONTACT US'" />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import Footer     from "../components/Footer/Footer";
import Contact    from "../components/Contact/Contact";

export default {
  components: {
    Breadcrumb,
    Footer,
    Contact
  }
};
</script>

<style lang="scss" scoped>
</style>