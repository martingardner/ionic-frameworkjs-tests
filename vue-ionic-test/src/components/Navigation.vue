<template>
  <div class="navigation">
    <ul>
      <li>
        <!--<ion-router-link :to="{ name: 'home' }">Home</ion-router-link>-->
        <!--<router-link to="/">Home</router-link>-->
        <router-link :to="{ name: 'home' }">Home</router-link>
        <!--
        <ion-item button @click="$router.push('/home')">
          <ion-icon name="home"></ion-icon>
          <ion-label>
            home
          </ion-label>
        </ion-item>
-->
        <!--<ion-route url="/">home</ion-route>-->
      </li>
      <li>
        <!-- <ion-router-link :to="{ name: 'about' }">About</ion-router-link> -->
        <!--<router-link to="/about">About</router-link>-->
        <router-link :to="{ name: 'about' }">About</router-link>
        <!--
        <ion-item button @click="$router.push('/about')">
          <ion-icon name="about"></ion-icon>
          <ion-label>
            about
          </ion-label>
        </ion-item>
-->
        <!--<ion-route url="/about">about</ion-route>-->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {};
  }
};
</script>

<style>
ul li {
  list-style-image: none;
  display: inline-block;
  margin: 10px;
}

a {
  color: red;
}
</style>
