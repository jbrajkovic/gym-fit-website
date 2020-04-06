<template>
  <transition name="slide">
    <div class="sidebar" v-if="sidebar">
      <div class="sidebar__top mb-3">
        <h1>
          GYM
          <span class="text-primary">Fit</span>
        </h1>
        <i class="fas fa-times fa-2x" @click="$emit('closeSidebar')"></i>
      </div>
      <div class="sidebar__menu my-3">
        <ul>
          <li class="sidebar__menu-item">
            <router-link to="/">
              <span @click="$emit('closeSidebar')">Home</span>
            </router-link>
          </li>
          <li class="sidebar__menu-item">
            <router-link to="/price-list">
              <span @click="$emit('closeSidebar')">Price List</span>
            </router-link>
          </li>
          <li class="sidebar__menu-item">
            <router-link to="/about">
              <span @click="$emit('closeSidebar')">About</span>
            </router-link>
          </li>
          <li class="sidebar__menu-item">
            <router-link to="/exercises">
              <span @click="$emit('closeSidebar')">Exercises</span>
            </router-link>
          </li>
          <li class="sidebar__menu-item">
            <router-link to="/contact">
              <span @click="$emit('closeSidebar')">Contact</span>
            </router-link>
          </li>
          <li class="sidebar__menu-item sidebar__menu-item--toggle" v-b-toggle.accordion-3>
            <a href="#">Services</a>
            <p>+</p>
          </li>
          <b-collapse
            id="accordion-3"
            class="services-menu"
            accordion="my-accordion"
            role="tabpanel"
          >
            <ul>
              <li>
                <router-link to="/services/individual-training">
                  <span @click="$emit('closeSidebar')">Individual Training</span>
                </router-link>
              </li>
              <li>
                <router-link to="/services/group-training">
                  <span @click="$emit('closeSidebar')">Group Training</span>
                </router-link>
              </li>
              <li>
                <router-link to="/services/personal-trainer">
                  <span @click="$emit('closeSidebar')">Personal Trainer</span>
                </router-link>
              </li>
            </ul>
          </b-collapse>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "sidebar",
  props: ["sidebar"],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #ffffff !important;
}

.sidebar {
  width: 100%;
  height: 100vh;
  padding: 25px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  background: linear-gradient(rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.98)),
    url("../../assets/gym-3.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #fff;

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__menu {
    &-item {
      padding: 10px 0;
      border-bottom: 1px solid #333;
      font-size: 18px;

      &--toggle {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          margin: 0 10px;
        }
      }
    }

    .services-menu {
      margin: 10px 0px 0px 20px;

      li {
        padding: 10px 0;
        border-bottom: 1px solid #333;
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
  transition: all 150ms ease-in 0s;
}
</style>