<template>
  <div>
    <v-container>
      <div class="white--text display-3 text-xs-center mb-3">NEWS</div>
      <div class="text-xs-center">
        <v-btn fab small dark color="cyan" :disabled="disabled" @click.prevent="prev()">
          <v-icon dark>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn outline fab small class="title" color="white">{{ this.currentPage }}</v-btn>
        <v-btn fab small dark color="cyan" @click.prevent="next()">
          <v-icon dark>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
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
                <span class="subheading">{{ article.publishedAt | trimDate }}</span>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <div class="text-xs-center">
        <v-btn fab small dark color="cyan" :disabled="disabled" @click.prevent="prev()">
          <v-icon dark>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn outline fab small class="title" color="white">{{ this.currentPage }}</v-btn>
        <v-btn fab small dark color="cyan" @click.prevent="next()">
          <v-icon dark>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
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
      totalResults: null,
      maxPerPage: 9,
      currentPage: 1,
      articles: []
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.totalResults / this.maxPerPage);
    },
    isFirstPage() {
      return this.currentPage === 1;
    },
    isLastPage() {
      return this.currentPage >= this.pageCount;
    },
    apiUrl() {
      return `https://newsapi.org/v2/everything?q=atletico-madrid&language=en&sortBy=publishedAt&page=${this.currentPage}&pageSize=${this.maxPerPage}&apiKey=5b68f93fd6f1468a8f4aa3d63cf050b2`;
    },
    disabled() {
      return this.currentPage <= 1;
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
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    next() {
      if (this.isLastPage) return;
      this.currentPage += 1;
      this.fetchNews();
    },
    prev() {
      if (this.isFirstPage) return;
      this.currentPage -= 1;
      this.fetchNews();
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
