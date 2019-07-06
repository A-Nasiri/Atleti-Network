<template>
  <v-card color="blue-grey darken-2" dark class="elevation-12">
    <v-toolbar justify-center align-center color="teal darken-1">
      <v-toolbar-title class="white--text">Setup Profile</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form class="px-3">
        <v-layout row>
          <v-icon left color="white">mdi-file-find</v-icon>
          <v-text-field label="Image"></v-text-field>
        </v-layout>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn block color="teal darken-1" large>
        UPLOAD IMAGE
        <v-icon right dark>cloud_upload</v-icon>
      </v-btn>
      <v-btn block color="teal darken-1" large>
        SKIP FOR NOW
        <v-icon right dark>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "SetProfile",
  data() {
    return {};
  }
};
</script>

<style>
</style>
