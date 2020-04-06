<template>
  <a href="#services" class="scroll-indicator">
    <b-icon-chevron-compact-down></b-icon-chevron-compact-down>
  </a>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.scroll-indicator {
  position: absolute;
  left: 50%;
  bottom: 50px;
  font-size: 50px;
  transform: translateX(-50%);

  -webkit-animation: bounce 1.6s infinite;
  animation: bounce 1s infinite;

  img {
    width: 50px;
    height: auto;
  }
}

@-webkit-keyframes bounce {
  0% {
    bottom: 10%;
  }
  25% {
    bottom: 8%;
  }
  50% {
    bottom: 6%;
  }
  75% {
    bottom: 4%;
  }
  100% {
    bottom: 2%;
  }
}

@keyframes bounce {
  0% {
    bottom: 6%;
  }
  25% {
    bottom: 5%;
  }
  50% {
    bottom: 4%;
  }
  75% {
    bottom: 3%;
  }
  100% {
    bottom: 2%;
  }
}
</style>