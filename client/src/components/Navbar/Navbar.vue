<template>
  <div class="nav" :class="{resize: isScrolled}">
    <div class="nav__logo">
      <h1>
        GYM
        <span class="text-primary">Fit</span>
      </h1>
    </div>
    <ul class="nav__menu">
      <li class="nav__menu-item">
        <router-link to="/">Home</router-link>
      </li>
      <li class="nav__menu-item">
        <router-link to="/price-list">Price List</router-link>
      </li>
      <li class="nav__menu-item menu-item-exercises">
        <router-link to="/exercises">Exercises</router-link>
      </li>
      <b-nav-item-dropdown text="Services" right>
        <b-dropdown-item href="#" @click.prevent="$router.push('/services/individual-training')">Individual Training</b-dropdown-item>
        <b-dropdown-item href="#" @click.prevent="$router.push('/services/group-training')">Group Training</b-dropdown-item>
        <b-dropdown-item href="#" @click.prevent="$router.push('/services/personal-trainer')">Personal Trainer</b-dropdown-item>
      </b-nav-item-dropdown>
      <li class="nav__menu-item">
        <router-link to="/about">About us</router-link>
      </li>
      <li class="nav__menu-item">
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
    <div class="nav__membership">
      <button
        class="btn"
        :class="isScrolled ? 'btn-primary': 'btn-outline-primary'"
        @click="go('/exercises')"
      >Exercises</button>
    </div>
    <div class="nav__menu-bar d-none">
      <button
        class="btn btn-sm mx-3"
        :class="isScrolled ? 'btn-primary': 'btn-outline-primary'"
        @click="go('/exercises')"
      >Exercises</button>
      <i class="fas fa-bars fa-2x" @click="sidebar = !sidebar"></i>
    </div>
    <transition name="slide">
      <Sidebar :sidebar="sidebar" @closeSidebar="closeSidebar" />
    </transition>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";

export default {
  components: { Sidebar },
  data() {
    return {
      isScrolled: false,
      sidebar: false
    };
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
      if (currentScrollPosition < 0) {
        return;
      }
      this.isScrolled = currentScrollPosition > 100;
    },
    go(route) {
      this.$router.push(route);
    },
    closeSidebar() {
      this.sidebar = false;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>

<style lang="scss" scoped>
.resize {
  height: 60px !important;
  background: rgba(0, 0, 0, 89) !important;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.06);
  text-transform: capitalize;
  color: #fff;
  z-index: 3;
  transition: all 0.4s ease-in-out;

  &__logo {
    h1 {
      margin: 0 !important;
    }
  }

  &__menu {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0 !important;

    &-item {
      a {
        padding: 20px;
        color: #ffffff !important;
        text-decoration: none;

        &:hover {
          border-bottom: 2px solid #0505ec;
          cursor: pointer;
        }
      }
    }

    .menu-item-exercises {
      display: none;
    }
  }

  &__logo,
  &__membership {
    width: 200px;
  }

  &__membership {
    text-align: right;
  }
}

.dropdown-item {
  color: #000000 !important;
}

@media (max-width: 1200px) {
  .nav {
    &__membership {
      display: none;
    }

    &__menu .menu-item-exercises {
      display: inline-block;
    }
  }
}

@media (max-width: 940px) {
  .nav {
    &__menu {
      display: none;
    }

    &__menu-bar {
      display: flex !important;
    }
  }
}

@media (max-width: 600px) {
  .nav {
    padding: 0 15px;

    &__logo {
      width: initial;

      h1 {
        font-size: 35px;
      }
    }
  }
}

</style>

