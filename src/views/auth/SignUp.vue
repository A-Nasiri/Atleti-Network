<template>
  <div>
    <v-parallax class="sign-up" :src="require('@/assets/reg.jpg')">
      <v-container fill-height>
        <v-layout row wrap align-center>
          <v-flex xs12 sm8 offset-sm2 align-center justify-center>
            <transition name="slide" mode="out-in">
              <router-view></router-view>
            </transition>
          </v-flex>
        </v-layout>
      </v-container>
    </v-parallax>
    <main-footer></main-footer>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      //
    };
  }
};
</script>

<style>
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-enter-active {
  transition: transform 0.6s ease-out;
}
.slide-enter {
  transform: translateX(-30%);
}
.slide-leave-to {
  transform: translateX(30%);
}
</style>
