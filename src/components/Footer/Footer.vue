<template>
  <div class="footer bg-dark text-light">
    <b-container>
      <b-row class="footer__content my-5">
        <b-col sm="12" md="6" lg="4" class="text-center">
          <h3 class="d-inline-block mb-3 pb-3 border-bottom border-secondary">
            <i class="fas fa-dumbbell"></i> GYM
            <span class="text-primary">FIT</span>
          </h3>
          <p >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus debitis quos sit nemo, delectus porro
            recusandae laudantium itaque qui ducimus numquam autem explicabo,
            veritatis cum ullam quaerat tempora nisi. Eaque?
          </p>
        </b-col>
        <b-col sm="12" md="6" lg="4" class="text-center">
          <h3 class="d-inline-block mb-3 pb-3 border-bottom border-secondary">WORKING TIME</h3>
          <ul>
            <li>MON-SAT | 07:00 - 24:00</li>
            <li>  SUN   | 12:00 - 22:00</li>
          </ul>
        </b-col>
        <b-col sm="12" md="6" lg="4" class="text-center">
          <h3 class="d-inline-block mb-3 pb-3 border-bottom border-secondary">CONTACT</h3>
          <ul>
            <li><i class="fas fa-phone"></i> +387 36 123 123 1</li>
            <li><i class="fas fa-envelope"></i> gymfit@test.com</li>
            <li><i class="fab fa-facebook"></i> <a class="text-primary" href="https://www.facebook/gymfittest.com">facebook/gymfit</a></li>
            <li><i class="fab fa-instagram"></i> <a class="text-primary" href="https://www.instagram/gymfittest.com">instagram/gymfit</a></li>
          </ul>
        </b-col>
      </b-row>
      <div class="footer__copyrights">
        <p class="text-center my-3">Copyright &copy; {{new Date().getFullYear()}}</p>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  min-height: 150px;
  background: linear-gradient(rgba(0, 0, 0, 0.93), rgba(0, 0, 0, 0.93)),
    url("../../assets/gym-3.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>