<template>
  <div class="drawing-page">
    <canvas width="400" height="200"></canvas>
    <ion-item>
      <ion-button @click="clearPad">Clear</ion-button>
      <ion-button @click="saveDataToSVG">Save Image</ion-button>
      <ion-button @click="loadCanvasWithSVG">Load Image</ion-button>
    </ion-item>
  </div>
</template>

<script>
import SignaturePad from "signature_pad";

export default {
  name: "DrawingPad",
  data() {
    return {
      signaturePad: null
    };
  },
  methods: {
    signaturePadSetup() {
      var canvas = document.querySelector("canvas");

      this.signaturePad = new SignaturePad(canvas);

      // Returns signature image as data URL (see https://mdn.io/todataurl for the list of possible parameters)
      //signaturePad.toDataURL(); // save image as PNG
      //signaturePad.toDataURL("image/jpeg"); // save image as JPEG
      //signaturePad.toDataURL("image/svg+xml"); // save image as SVG

      // Draws signature image from data URL.
      // NOTE: This method does not populate internal data
      //structure that represents drawn signature.
      //Thus, after using #fromDataURL, #toData won't work properly.
      //signaturePad.fromDataURL("data:image/png;base64,iVBORw0K...");

      // Returns signature image as an array of point groups
      //const data = signaturePad.toData();

      // Draws signature image from an array of point groups
      //signaturePad.fromData(data);

      // Clears the canvas
      //signaturePad.clear();

      // Returns true if canvas is empty, otherwise returns false
      //signaturePad.isEmpty();

      // Unbinds all event handlers
      //signaturePad.off();

      // Rebinds all event handlers
      //signaturePad.on();
    },
    clearPad() {
      //clear canvas
      this.signaturePad.clear();
    },
    saveDataToSVG() {
      //let imageData = this.signaturePad.toDataURL("image/svg+xml");
      let imageData = this.signaturePad.toDataURL();
      console.log("imageData", imageData);
      localStorage.setItem("image1", imageData);
    },
    loadCanvasWithSVG() {
      //this.signaturePad.fromDataURL("data:image/png;base64,iVBORw0K...");
      let canvas = document.querySelector("canvas");
      let ctx = canvas.getContext("2d");
      let imageData = localStorage.getItem("image1");
      let img = new Image();

      img.src = imageData;
      img.onload = () => {
        ctx.drawImage(img, 0, 0);
      };

      /*
      img.onload = () => {
        document.querySelector("canvas").drawImage(img, 0, 0);
      };
      */
      //this.signaturePad.fromDataURL(`data:image/png;base64,${imageData}`);
      //this.signaturePad.fromDataURL("data:image/png;base64,iVBORw0K...");
    }
  },
  mounted() {
    this.signaturePadSetup();
  }
};
</script>

<style>
canvas {
  border: 1px solid black;
}
</style>

<!--
https://www.npmjs.com/package/signature_pad
https://github.com/szimek/signature_pad

-->