<template>
  <div>
    <p>Testing js encryption library</p>
    <ion-label>Input</ion-label>
    <ion-input class="encryption-field"></ion-input>
    <ion-button @click="encrypt">Save</ion-button>
    <ion-button @click="retrieve">Retrieve</ion-button>
  </div>
</template>

<script>
import sjcl from "sjcl";

export default {
  name: "EncryptionTest",
  data() {
    return {
      key: "test"
    };
  },
  methods: {
    encrypt() {
      let encryptData = sjcl.encrypt(
        this.key,
        document.querySelector(".encryption-field").value
      );
      this.$setItem("encryptFields", encryptData);
    },
    retrieve() {
      let encryptData = this.$getItem("encryptFields");
      Promise.resolve(encryptData).then(resp => {
        let data = sjcl.decrypt(this.key, resp);
        console.log("data", data);
      });
    }
  }
};
</script>

<style></style>

<!-- 
trying out sjcl (stanford university crypto library)
https://www.npmjs.com/package/sjcl
http://bitwiseshiftleft.github.io/sjcl/
https://github.com/bitwiseshiftleft/sjcl
-->
