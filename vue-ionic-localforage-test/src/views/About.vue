<template>
  <div class="about">
    <AboutComponent />
    <div class="prototype-test">
      {{ this.title }}
    </div>
  </div>
</template>

<script>
import AboutComponent from "@/components/AboutComponent.vue";

export default {
  name: "About",
  data() {
    return {
      title: this.$TTitle
    };
  },
  components: {
    AboutComponent
  }
};
</script>
