<template>
  <nav>
    <v-toolbar app height="90px">
      <v-toolbar-title>
        <div class="logo">
          <img class="atl" :src="require('@/assets/atleti.png')" />
          <img class="lg" :src="require('@/assets/logo.png')" />
          <img class="net" :src="require('@/assets/net.png')" />
        </div>
        <!-- <img class="lg" :src="require('@/assets/logo.png')" /> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>
          <v-icon left color="purple">mdi-account-plus</v-icon>
          <span>Signup</span>
        </v-btn>
        <v-btn flat>
          <v-icon left color="purple">mdi-login</v-icon>
          <span>Login</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {};
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
</style>
