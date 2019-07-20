<template>
  <div>
    <v-parallax class="sign-up" :src="require('@/assets/reg.jpg')">
      <v-container fill-height>
        <v-layout row wrap align-center>
          <v-flex xs12 sm8 offset-sm2 align-center justify-center>
            <v-card style="background: rgba(0, 0, 0, 0.5)" dark class="elevation-12">
              <v-toolbar color="teal darken-1">
                <v-spacer></v-spacer>
                <v-toolbar-title>LOG IN</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form class="px-3">
                  <v-layout row>
                    <v-icon left color="white">mdi-at</v-icon>
                    <v-text-field type="email" label="E-mail" v-model="email"></v-text-field>
                  </v-layout>
                  <v-layout row>
                    <v-icon left color="white">mdi-lock-question</v-icon>
                    <v-text-field type="password" label="Password" v-model="password"></v-text-field>
                  </v-layout>
                </v-form>
                <div v-if="feedback" block class="red darken-2 text-xs-center pa-1">
                  <span class="white--text subheading">{{ feedback }}</span>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn block color="teal darken-1" large @click.prevent="logIn">LOG IN</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-parallax>
    <main-footer></main-footer>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      feedback: null
    };
  },
  methods: {
    logIn() {
      if (this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            this.$router.push({ name: "Gmap" });
          })
          .catch(err => {
            this.feedback = err.message;
          });
        this.feedback = null;
      } else {
        this.feedback = "Please provide your Email & Password";
      }
    }
  }
};
</script>

<style>
</style>
