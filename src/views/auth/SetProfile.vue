<template>
  <v-card color="blue-grey darken-2" dark class="elevation-12">
    <v-toolbar justify-center align-center color="teal darken-1">
      <v-spacer></v-spacer>
      <v-toolbar-title class="white--text">Setup Profile</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-layout class="pa-3" align-center justify-center v-if="imageUrl">
        <v-avatar size="120">
          <v-img :src="imageUrl"></v-img>
        </v-avatar>
      </v-layout>
      <v-form class="px-3">
        <v-layout row>
          <input
            type="file"
            ref="fileInput"
            accept="image/*"
            @change="onFileSelected"
            style="display: none"
          />
          <v-btn block color="blue-grey darken-1" large @click="$refs.fileInput.click()">
            CHOOSE FILE
            <v-icon right color="white">mdi-file-find</v-icon>
          </v-btn>
        </v-layout>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn block color="teal darken-1" large @click="uploadFile">
        UPLOAD IMAGE
        <v-icon right dark>cloud_upload</v-icon>
      </v-btn>
      <v-btn block color="teal darken-1" large @click="skip">
        SKIP FOR NOW
        <v-icon right dark>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";
import db from "@/firebase/init";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "SetProfile",
  data() {
    return {
      imageName: null,
      imageUrl: null,
      imageFile: null
    };
  },
  methods: {
    onFileSelected(ev) {
      const files = ev.target.files;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
          this.imageFile = files[0]; // this is an image file that can be sent to server...
        });
      } else {
        this.imageName = "";
        this.imageFile = "";
        this.imageUrl = "";
      }
    },

    uploadFile() {
      let user = firebase.auth().currentUser;
      let userRef = user.uid;

      let fileName = this.imageName;
      let storageRef = firebase.storage().ref("images/" + userRef + fileName);

      storageRef.put(this.imageFile).then(snapshot => {
        snapshot.ref.getDownloadURL().then(downloadURL => {
          let user = firebase.auth().currentUser;

          db.collection("users")
            .where("user_id", "==", user.uid)
            .get()
            .then(snapshot => {
              snapshot.forEach(doc => {
                db.collection("users")
                  .doc(doc.id)
                  .update({
                    image_url: downloadURL
                  });
              });
            })
            .then(() => {
              this.$router.push({ name: "Gmap" });
            });
        });
      });
    },

    skip() {
      this.$router.push({ name: "Gmap" });
    }
  }
};
</script>

<style>
</style>
