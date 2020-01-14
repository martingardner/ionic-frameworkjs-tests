<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>About Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-body">
      <Navigation />
      <h1>Welcome to @ionic/vue ABOUT Page</h1>
    </ion-content>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";

export default {
  name: "AboutComponent",
  components: {
    Navigation
  }
};
</script>
