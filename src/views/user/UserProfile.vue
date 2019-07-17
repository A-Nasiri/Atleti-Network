<template>
  <v-container>
    <v-btn fixed dark left color="teal" style="z-index: 999" @click="back">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <v-layout column>
      <v-flex xs12>
        <v-card v-if="profile" min-width="50%" dark class="pa-3 blue-grey">
          <v-layout justify-center align-center column>
            <v-avatar size="110">
              <v-img :src="profile.image_url"></v-img>
            </v-avatar>
            <v-card-title class="display-1">{{ profile.username }}</v-card-title>
          </v-layout>
        </v-card>
      </v-flex>
      <v-flex xs12 class="scroll-y" style="max-height: 500px">
        <v-card
          v-for="(comment, index) in comments"
          :key="index"
          dark
          class="pa-3 my-1 cyan darken-1"
        >
          <v-card-text class="subheading font-weight-medium">{{ comment.comment }}</v-card-text>
          <v-card-actions>
            <v-list-tile class="grow">
              <v-list-tile-avatar color="grey darken-3">
                <v-img class="elevation-6" :src="comment.avatar"></v-img>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>{{ comment.from }}</v-list-tile-title>
              </v-list-tile-content>
              <v-layout align-center justify-end>
                <span class="subheading">{{ comment.time }}</span>
              </v-layout>
            </v-list-tile>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 class="white pa-2">
        <form>
          <v-textarea solo label="Comment" v-model="newComment"></v-textarea>
          <v-btn color="teal darken-1" block dark @click.prevent="addComment">Add Comment</v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase/app";
import moment from "moment";

export default {
  name: "UserProfile",
  data() {
    return {
      profile: null,
      newComment: null,
      feedback: null,
      user: null,
      comments: []
    };
  },
  created() {
    let ref = db.collection("users");

    ref
      .where("user_id", "==", firebase.auth().currentUser.uid)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.user = doc.data();
          this.user.id = doc.id;
        });
      });

    ref
      .doc(this.$route.params.id)
      .get()
      .then(user => {
        this.profile = user.data();
      });

    db.collection("comments")
      .orderBy("time")
      .where("to", "==", this.$route.params.id)
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type == "added") {
            this.comments.unshift({
              from: change.doc.data().from,
              comment: change.doc.data().comment,
              avatar: change.doc.data().avatar,
              time: moment(change.doc.data().time).format("lll")
            });
          }
        });
      });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    addComment() {
      if (this.newComment) {
        this.feedback = null;

        db.collection("comments")
          .add({
            to: this.$route.params.id,
            from: this.user.username,
            avatar: this.user.image_url,
            comment: this.newComment,
            time: Date.now()
          })
          .then(() => {
            this.newComment = null;
          });
      } else {
        this.feedback = "Please write your comment...";
      }
    }
  }
};
</script>

<style>
</style>
