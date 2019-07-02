<template>
  <v-app class="red lighten-4">
    <Navigation />
    <v-content>
      <router-view></router-view>
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
