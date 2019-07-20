<template>
  <v-app style="background-image: linear-gradient(to top, #09203f 0%, #537895 100%);">
    <Navigation />
    <v-content>
      <vue-page-transition name="overlay-up-down">
        <router-view></router-view>
      </vue-page-transition>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "@/components/default/Navigation";

export default {
  name: "App",
  components: { Navigation },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.app-bg {
  background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
}
</style>
