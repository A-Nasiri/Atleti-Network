<template>
  <v-card color="blue-grey darken-2" dark class="elevation-12">
    <v-toolbar justify-center align-center color="teal darken-1">
      <v-toolbar-title class="white--text">Sign Up</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form class="px-3">
        <v-layout row>
          <v-icon left color="white">mdi-at</v-icon>
          <v-text-field label="E-mail" v-model="email"></v-text-field>
        </v-layout>
        <v-layout row>
          <v-icon left color="white">mdi-lock-question</v-icon>
          <v-text-field label="Password" v-model="password"></v-text-field>
        </v-layout>
        <v-layout row>
          <v-icon left color="white">mdi-account-circle</v-icon>
          <v-text-field label="Username" v-model="username"></v-text-field>
        </v-layout>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn block color="teal darken-1" large @click.prevent="signUp">SIGN UP</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: null,
      password: null,
      username: null
    };
  },
  methods: {
    signUp() {
      this.$router.push({ name: "SetProfile" });
      console.log(this.email);
    }
  }
};
</script>

<style>
</style>
