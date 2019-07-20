<template>
  <div>
    <v-container>
      <div class="white--text display-3 text-xs-center">NEWS</div>
      <v-layout justify-center align-center class="my-4" row wrap>
        <v-flex xs12 sm6 md4 lg4 v-for="(article, index) in articles" :key="index">
          <v-card
            min-height="450px"
            max-width="450px"
            color="cyan darken-3"
            class="rounded-card card-bg elevation-10 ma-3 white--text text-xs-center text-sm-center text-md-center text-lg-center text-xl-center"
          >
            <v-img v-if="article.urlToImage" :src="article.urlToImage" height="250px"></v-img>
            <v-img v-else :src="require('@/assets/logo.png')" contain height="250px"></v-img>
            <v-card-title primary-title>
              <div class="font-weight-medium headline pa-1">{{ article.title | snippet }}</div>
            </v-card-title>
            <v-divider light></v-divider>
            <!-- <v-card-text>
              <div class="subheading">{{ article.description }}</div>
            </v-card-text>-->
            <v-card-actions>
              <div class="text-xs-center">
                <v-btn outline dark @click="read(article.url)">
                  READ
                  <v-icon right>mdi-open-in-new</v-icon>
                </v-btn>
              </div>
              <v-layout align-center justify-end>
                <span class="subheading">{{ article.publishedAt }}</span>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <main-footer></main-footer>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "News",
  data() {
    return {
      apiUrl: `https://newsapi.org/v2/everything?q=atletico-madrid&language=en&pageSize=9&page=${this.currentPage}&apiKey=5b68f93fd6f1468a8f4aa3d63cf050b2`,
      totalResults: null,
      maxPerPage: 9,
      currentPage: 1,
      maxPerPage: 9,
      articles: []
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.totalResults / this.maxPerPage);
    }
  },
  created() {
    this.fetchNews();
  },
  methods: {
    fetchNews() {
      axios
        .get(this.apiUrl)
        .then(res => {
          this.articles = res.data.articles;
          this.totalResults = res.data.totalResults;
        })
        .catch(err => {
          console.log(err);
        });
    },
    read(url) {
      window.open(url);
    }
  }
};
</script>

<style>
/* background-image: linear-gradient(to top, #09203f 0%, #537895 100%); */
</style>
