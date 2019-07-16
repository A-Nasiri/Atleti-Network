<template>
  <v-container>
    <v-btn fixed dark left color="teal" style="z-index: 999" @click="back">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-layout column>
      <v-flex xs12>
        <v-card v-if="profile" min-width="50%" class="pa-3">
          <v-layout justify-center align-center column>
            <v-avatar size="110" color="grey lighten-4">
              <v-img :src="profile.image_url"></v-img>
            </v-avatar>
            <v-card-title class="display-1">{{ profile.username }}</v-card-title>
          </v-layout>
          <v-card-actions>
            <v-btn color="teal darken-1" block dark @click="dialog = false">Visit Profile</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "UserProfile",
  data() {
    return {
      profile: null
    };
  },
  created() {
    let ref = db.collection("users");
    ref
      .doc(this.$route.params.id)
      .get()
      .then(user => {
        this.profile = user.data();
      });
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>
