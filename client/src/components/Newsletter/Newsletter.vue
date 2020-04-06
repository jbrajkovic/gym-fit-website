<template>
  <div class="newsletter py-4">
    <b-container>
      <b-row>
        <b-col xs="12" sm="6">
          <div class="newsletter__info">
            <h2 style="font-size: 45px;">Newsletter</h2>
            <p>Subscribe to our Newsletter to get helpful tips from our experts</p>
          </div>
        </b-col>
        <b-col xs="12" sm="6" class="newsletter__form">
          <b-form inline>
            <label class="sr-only" for="inline-form-input-username">Email</label>
            <b-input id="inline-form-input-username" placeholder="Username"></b-input>

            <b-button variant="primary" class="my-2 mx-md-2">Save</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.newsletter {
  width: 100%;
  min-height: 200px;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("https://metkovic-news.com/wp-content/uploads/2018/12/Body-club-Ultimate-Sports-3-1.jpeg")
      no-repeat;
  background-position: center;
  background-size: cover;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  &__form {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>