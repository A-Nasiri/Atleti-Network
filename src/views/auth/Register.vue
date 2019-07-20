<template>
  <v-card style="background: rgba(0, 0, 0, 0.5)" dark class="elevation-12">
    <v-toolbar color="teal darken-1">
      <v-spacer></v-spacer>
      <v-toolbar-title>REGISTER</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-form class="px-3">
        <v-layout row>
          <v-icon left color="white">mdi-account-circle</v-icon>
          <v-text-field type="text" label="Username" v-model="username"></v-text-field>
        </v-layout>
        <v-layout row>
          <v-icon left color="white">mdi-at</v-icon>
          <v-text-field type="email" label="E-mail" v-model="email"></v-text-field>
        </v-layout>
        <v-layout row>
          <v-icon left color="white">mdi-lock-question</v-icon>
          <v-text-field type="password" label="Password" v-model="password"></v-text-field>
        </v-layout>
        <v-layout row>
          <v-icon left color="white">mdi-lock-question</v-icon>
          <v-text-field
            type="password"
            label="Confirm Password"
            :rule="[comparePassword]"
            v-model="confirmPassword"
          ></v-text-field>
        </v-layout>
      </v-form>
      <div v-if="feedback" block class="red darken-2 text-xs-center pa-1">
        <span class="white--text subheading">{{ feedback }}</span>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn block color="teal darken-1" large :disabled="disabled" @click.prevent="signUp">SIGN UP</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import slugify from "slugify";
import db from "@/firebase/init";
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Register",
  data() {
    return {
      email: null,
      password: null,
      confirmPassword: null,
      username: null,
      feedback: null,
      slug: null
    };
  },
  methods: {
    signUp() {
      if (
        this.username &&
        this.email &&
        this.password &&
        this.confirmPassword
      ) {
        this.slug = slugify(this.username, {
          replacement: "-",
          remove: /[$*_+.()'"!\-:@]/g,
          lower: true
        });
        let ref = db.collection("users").doc(this.slug);
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = "This Username is already taken!";
          } else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                ref.set({
                  username: this.username,
                  geolocation: null,
                  user_id: cred.user.uid
                });
              })
              .then(() => {
                this.$router.push({ name: "SetProfile" });
              })
              .catch(err => {
                this.feedback = err.message;
              });
          }
        });
      } else {
        this.feedback = "Please fill in all required fields!";
      }
    }
  },
  computed: {
    disabled() {
      return this.password !== this.confirmPassword;
    },
    comparePassword() {
      if (this.password !== this.confirmPassword) {
        this.feedback = `Password's do not match!`;
      } else {
        this.feedback = null;
      }
    }
  }
};
</script>

<style>
</style>
