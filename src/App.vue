<template>
  <v-app class="black">
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
</style>
