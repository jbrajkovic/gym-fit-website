<template>
  <div id="app">
    <Navbar />
    <keep-alive>
      <router-view :key="$route.fullPath" />
    </keep-alive>
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

ul {
  list-style: none !important;
}

a {
  text-decoration: none;
}

a:focus {
  outline: none !important;
}

.custom-nav .nav-item a {
  color: #ffffff;
}

.dropdown-toggle {
  color: #ffffff !important;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

::selection {
  background: #007bff; /* WebKit/Blink Browsers */
  color: #ffffff;
}
::-moz-selection {
  background: #007bff; /* Gecko Browsers */
  color: #ffffff;
}
</style>
