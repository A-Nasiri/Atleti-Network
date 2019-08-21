<template>
  <div>
    <last-result></last-result>
    <v-container fluid class="hero">
      <v-container>
        <v-layout align-center justify-center row wrap>
          <v-flex class="pa-6 text-md-center text-sm-center text-xs-center" xs12 sm10 md8 lg9 xl7>
            <div>
              <h1
                class="font-weight-medium white--text"
                :class="[{'display-4': $vuetify.breakpoint.smAndUp}, {'display-3': $vuetify.breakpoint.xsOnly}]"
              >
                Join the global
                Los Colchoneros network
              </h1>
            </div>
          </v-flex>
          <v-flex xs8 sm6 md4 lg3 xl2 :class="[{'my-4': $vuetify.breakpoint.xs}]">
            <div class="hero-logo">
              <v-img :src="require('@/assets/logo.png')"></v-img>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container class="my-4">
        <v-layout align-center justify-center row wrap>
          <v-flex xs12 sm6 md4 lg4 xl3>
            <v-card
              max-width="400px"
              color="cyan darken-3"
              class="rounded-card card-bg elevation-10 ma-3 white--text text-xs-center text-sm-center text-md-center text-lg-center text-xl-center"
            >
              <v-img :src="require('@/assets/fans.jpg')" height="240px"></v-img>
              <v-card-title primary-title>
                <div
                  class="font-weight-medium headline pa-2"
                >Engage with fellow Atleti fans from all over the world</div>
              </v-card-title>
              <v-card-actions>
                <v-btn block dark large class="btn-bg" router :to="{ name: 'Register' }">Join Now</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md4 lg4 xl3>
            <v-card
              max-width="400px"
              color="cyan darken-3"
              class="rounded-card card-bg elevation-10 ma-3 white--text text-xs-center text-sm-center text-md-center text-lg-center text-xl-center"
            >
              <v-img :src="require('@/assets/diego.jpg')" height="240px"></v-img>
              <v-card-title primary-title>
                <div
                  class="font-weight-medium headline pa-2"
                >Stay at the fore-front of Los Colchoneros action & News</div>
              </v-card-title>
              <v-card-actions>
                <v-btn block dark large class="btn-bg" router :to="{ name: 'News' }">NEWS</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 md4 lg4 xl3>
            <v-card
              max-width="400px"
              class="rounded-card card-bg elevation-10 ma-3 white--text text-xs-center text-sm-center text-md-center text-lg-center text-xl-center"
            >
              <v-img :src="require('@/assets/simeone.jpg')" height="240px"></v-img>
              <v-card-title primary-title>
                <div
                  class="font-weight-medium headline pa-2"
                >Contribute to the most amazing club on the planet</div>
              </v-card-title>
              <v-card-actions>
                <v-btn block dark large class="btn-bg" router :to="{ name: 'Login' }">LOG IN</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-container>
    <div class="table-section">
      <league-table></league-table>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "Home",
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.hero {
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
}

.btn-bg {
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    radial-gradient(
        at top center,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 120%
      )
      #989898;
  background-blend-mode: multiply, multiply;
}

.card-bg {
  background-image: linear-gradient(to right, #243949 0%, #517fa4 100%);
}

.rounded-card {
  border-radius: 5px;
}

.table-section {
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
}
</style>
