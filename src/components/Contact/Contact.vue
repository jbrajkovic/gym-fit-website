<template>
  <div class="contact my-5">
    <b-container>
      <h1 class="text-left mb-4 border-bottom">Where you can find us</h1>
      <b-row>
        <b-col cols="12" md="6" lg="6" class="my-3 my-sm-3">
          <Map />
        </b-col>
        <b-col cols="12" offset-lg="2" lg="4" md="6" class="my-3 my-sm-3">
          <h3 class="text-left mb-4 border-bottom">Send us a message</h3>
          <ContactForm />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Map from "./GoogleMap";
import ContactForm from "./ContactForm";

export default {
  name: "contact",
  components: { Map, ContactForm }
};
</script>

<style>
</style>