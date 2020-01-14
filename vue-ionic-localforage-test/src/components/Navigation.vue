<template>
  <div class="navigation">
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'about' }">About</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'encryption' }">Encryption</router-link>
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
