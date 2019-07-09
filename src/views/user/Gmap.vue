<template>
  <div class="map">
    <div class="google-map" id="map">map</div>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "Gmap",
  data() {
    return {
      lat: 53,
      lng: -2
    };
  },
  mounted() {
    this.renderMap();
  },
  methods: {
    renderMap() {
      const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: this.lat, lng: this.lng },
        zoom: 6,
        maxZoom: 15,
        minZoom: 3,
        streetViewControl: false
      });
    }
  }
};
</script>

<style>
.google-map {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
