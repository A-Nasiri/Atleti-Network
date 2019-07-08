<template>
  <nav>
    <v-toolbar app height="90px">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <div class="logo">
          <img class="atl" :src="require('@/assets/atleti.png')" />
          <img class="lg" :src="require('@/assets/logo.png')" />
          <img class="net" :src="require('@/assets/net.png')" />
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          <v-icon left color="indigo">mdi-account-plus</v-icon>
          <span>Signup</span>
        </v-btn>
        <v-btn flat>
          <v-icon left color="indigo">mdi-login</v-icon>
          <span>Login</span>
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
export default {
  name: "Navigation",
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style>
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
  background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
}
</style>
