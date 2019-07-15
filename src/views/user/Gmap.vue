<template>
  <div>
    <div class="map">
      <div class="google-map" id="map">map</div>
    </div>
    <v-dialog v-model="dialog" max-width="350">
      <v-card class="pa-3">
        <v-btn color="teal darken-1" fab small dark absolute right @click="dialog = false">
          <v-icon>close</v-icon>
        </v-btn>
        <v-layout justify-center align-center column>
          <v-avatar size="70" color="grey lighten-4">
            <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar" />
          </v-avatar>
          <v-card-title class="headline">User</v-card-title>
        </v-layout>
        <v-card-actions>
          <v-btn color="teal darken-1" block dark @click="dialog = false">Visit Profile</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      lng: -2,
      marker: require("@/assets/marker.png"),
      dialog: false
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
      db.collection("users")
        .get()
        .then(users => {
          users.docs.forEach(doc => {
            let data = doc.data();
            if (data.geolocation) {
              let marker = new google.maps.Marker({
                position: {
                  lat: data.geolocation.lat,
                  lng: data.geolocation.lng
                },
                map,
                icon: this.marker
              });

              // add click event to marker
              marker.addListener("click", () => {
                this.dialog = true;
              });
            }
          });
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

.dialog-close {
  position: absolute;
  top: 5px;
  right: 5px;
}
</style>
