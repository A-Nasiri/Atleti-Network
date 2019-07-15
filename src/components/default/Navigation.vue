<template>
  <nav>
    <v-toolbar class="tlbr" app height="90px">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <router-link :to="{ name: 'Home' }">
        <v-toolbar-title>
          <div class="logo">
            <img class="atl" :src="require('@/assets/atleti.png')" />
            <img class="lg" :src="require('@/assets/logo.png')" />
            <img class="net" :src="require('@/assets/net.png')" />
          </div>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat v-if="user">
          <v-icon left color="indigo">mdi-emoticon-happy-outline</v-icon>
          <span>Hey, {{ userProfile.username }}</span>
        </v-btn>
        <v-btn flat class="hidden-xs-only">
          <v-icon left color="indigo">mdi-newspaper</v-icon>
          <span>News</span>
        </v-btn>
        <v-btn v-if="!user" flat router :to="{ name: 'Register' }" class="hidden-xs-only">
          <v-icon left color="indigo">mdi-account-plus</v-icon>
          <span>Signup</span>
        </v-btn>
        <v-btn v-if="!user" flat router :to="{ name: 'Login' }" class="hidden-xs-only">
          <v-icon left color="indigo">mdi-login</v-icon>
          <span>Login</span>
        </v-btn>
        <v-btn v-if="user" flat @click="logOut" class="hidden-xs-only">
          <v-icon left color="indigo">mdi-logout</v-icon>
          <span>Logout</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" app dark class="indigo">
      <v-list>
        <v-layout
          v-if="user"
          column
          justify-center
          align-center
          class="text-xl-center text-lg-center text-md-center text-sm-center text-xs-center"
        >
          <v-flex class="mt-5">
            <v-avatar size="100">
              <v-img :src="userProfile.image_url"></v-img>
            </v-avatar>
            <p class="white--text title mt-3">{{ userProfile.username }}</p>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>

        <v-list-tile @click="goHome">
          <v-list-tile-action>
            <v-icon>mdi-home</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>HOME</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="!user" @click="goSignup">
          <v-list-tile-action>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>SIGN UP</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="!user" @click="goLogin">
          <v-list-tile-action>
            <v-icon>mdi-login</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>LOG IN</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>mdi-newspaper</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>NEWS</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="user" @click="goMap">
          <v-list-tile-action>
            <v-icon>mdi-earth</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>ATLETI-MAP</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="user" @click="goMap">
          <v-list-tile-action>
            <v-icon>mdi-wall</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>PROFILE</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="user" @click="logOut">
          <v-list-tile-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>LOG OUT</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import firebase from "firebase/app";
import db from "@/firebase/init";

export default {
  name: "Navigation",
  data() {
    return {
      drawer: false,
      user: null,
      userProfile: null
    };
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
        db.collection("users")
          .where("user_id", "==", user.uid)
          .get()
          .then(snapshot => {
            snapshot.forEach(doc => {
              this.userProfile = doc.data();
            });
          });
      } else {
        this.user = null;
      }
    });
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
    },
    goHome() {
      this.$router.push({ name: "Home" });
    },
    goLogin() {
      this.$router.push({ name: "Login" });
    },
    goSignup() {
      this.$router.push({ name: "Register" });
    },
    goMap() {
      this.$router.push({ name: "Gmap" });
    }
  }
};
</script>


<style>
.tlbr {
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
}

.lg {
  width: 50px;
  margin: 0 0.3rem;
}

.logo .atl {
  width: 70px;
}

.logo .net {
  width: 107px;
}

.draw {
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

@media only screen and (max-width: 600px) {
  .lg {
    width: 40px;
    margin: 0 0.3rem;
  }

  .logo .atl {
    width: 50px;
  }

  .logo .net {
    width: 75px;
  }
}
</style>
