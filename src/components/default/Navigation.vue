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
        <v-btn flat>
          <span>News</span>
        </v-btn>
        <v-btn flat router :to="{ name: 'Register' }">
          <v-icon left color="indigo">mdi-account-plus</v-icon>
          <span>Signup</span>
        </v-btn>
        <v-btn flat router :to="{ name: 'Login' }">
          <v-icon left color="indigo">mdi-login</v-icon>
          <span>Login</span>
        </v-btn>
        <v-btn flat @click="logOut">
          <v-icon left color="indigo">mdi-logout</v-icon>
          <span>Logout</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="drawer">
      <v-layout
        column
        justify-center
        align-center
        class="text-xl-center text-lg-center text-md-center text-sm-center text-xs-center"
      >
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-avatar>
          <p class="white--text subheading mt-1">Diego</p>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "Navigation",
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Login" });
        });
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

.drawer {
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
