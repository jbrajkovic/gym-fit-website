<template>
  <div>
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >{{ msg }}</b-alert>
  </div>
</template>

<script>
export default {
  props: ["msg", "alert"],
  data() {
    return {
      dismissSecs: 5,
      dismissCountDown: 0
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    }
  },
  watch: {
    alert() {
      this.showAlert();
    }
  }
};
</script>