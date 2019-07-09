<template>
  <v-container fluid class="hero">
    <v-layout align-center justify-center row fill-height wrap>
      <v-flex class="pa-6 text-md-center text-sm-center text-xs-center" xs10 sm8 md8 lg8>
        <div>
          <h1
            class="display-4 font-weight-medium white--text"
            :class="[{'display-3': $vuetify.breakpoint.xs}, {'display-3': $vuetify.breakpoint.sm}]"
          >
            Join the global
            Los Colchoneros network
          </h1>
        </div>
      </v-flex>
      <v-flex class="pa-5" xs10 sm6 md4 lg4>
        <div class="hero-logo">
          <v-img :src="require('@/assets/logo.png')"></v-img>
        </div>
      </v-flex>
    </v-layout>
    <v-layout justify-center fill-height class="my-4" row wrap>
      <v-flex xs12 sm6 md4 lg4>
        <v-card
          max-width="450px"
          color="cyan darken-3"
          class="rounded-card card-bg elevation-10 ma-3 white--text text-xs-center text-sm-center text-md-center text-lg-center text-xl-center"
        >
          <v-img :src="require('@/assets/fans.jpg')" height="200px"></v-img>
          <v-card-title primary-title>
            <div
              class="font-weight-medium headline pa-2"
            >Engage with fellow Atleti fans from all over the world</div>
          </v-card-title>
          <v-card-actions>
            <v-btn block dark large class="btn-bg">Join Now</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 lg4>
        <v-card
          max-width="450px"
          color="cyan darken-3"
          class="rounded-card card-bg elevation-10 ma-3 white--text text-xs-center text-sm-center text-md-center text-lg-center text-xl-center"
        >
          <v-img :src="require('@/assets/diego.jpg')" height="200px"></v-img>
          <v-card-title primary-title>
            <div
              class="font-weight-medium headline pa-2"
            >Stay at the fore-front of Los Colchoneros action</div>
          </v-card-title>
          <v-card-actions>
            <v-btn block dark large class="btn-bg">NEWS</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md4 lg4>
        <v-card
          max-width="450px"
          class="rounded-card card-bg elevation-10 ma-3 white--text text-xs-center text-sm-center text-md-center text-lg-center text-xl-center"
        >
          <v-img :src="require('@/assets/simeone.jpg')" height="200px"></v-img>
          <v-card-title primary-title>
            <div
              class="font-weight-medium headline pa-2"
            >Contribute to the most amazing club on the planet</div>
          </v-card-title>
          <v-card-actions>
            <v-btn block dark large class="btn-bg">LOG IN</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      //
    }
  }
};
</script>

<style>
.hero {
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
}

.btn-bg {
  background-image: linear-gradient(
    -225deg,
    #77ffd2 0%,
    #6297db 48%,
    #1eecff 100%
  );
}

.card-bg {
  background-image: linear-gradient(to right, #243949 0%, #517fa4 100%);
}

.rounded-card {
  border-radius: 5px;
}
</style>
