<template>
  <div class="map">
    <div class="google-map" id="map">map</div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import db from "@/firebase/init";

export default {
  name: "Gmap",
  data() {
    return {
      lat: 53,
      lng: -2
    };
  },
  mounted() {
    let user = firebase.auth().currentUser;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          this.lat = pos.coords.latitude;
          this.lng = pos.coords.longitude;

          db.collection("users")
            .where("user_id", "==", user.uid)
            .get()
            .then(snapshot => {
              snapshot.forEach(doc => {
                db.collection("users")
                  .doc(doc.id)
                  .update({
                    geolocation: {
                      lat: pos.coords.latitude,
                      lng: pos.coords.longitude
                    }
                  });
              });
            })
            .then(() => {
              this.renderMap();
            });

          this.renderMap();
        },
        err => {
          consle.log(err);
          this.renderMap();
        },
        { maximumAge: 60000, timeout: 5000 }
      );
    } else {
      this.renderMap();
    }
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
