<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>Hello World</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-body">
      <Navigation />
      <h1>Welcome to @ionic/vue home page</h1>
      <img alt="Vue logo" src="../assets/logo.png" />
    </ion-content>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  components: {
    Navigation
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
