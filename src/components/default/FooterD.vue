<template>
  <div>
    <v-footer dark id="ftrr" class="py-4" justify-center align-center height="auto">
      <v-container>
        <v-layout wrap>
          <v-flex xs12>
            <v-layout align-center justify-center column>
              <div class="logo-ftr">
                <img class="lg" :src="require('@/assets/logo.png')" />
                <img class="atl" :src="require('@/assets/atleti.png')" />
                <img class="net" :src="require('@/assets/net.png')" />
              </div>
            </v-layout>
          </v-flex>
          <v-flex xs12>
            <v-layout justify-center align-center class="mb-3">
              <v-btn v-for="icon in icons" :key="icon" icon>
                <v-icon size="30px">{{ icon }}</v-icon>
              </v-btn>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "FooterD",
  data() {
    return {
      icons: [
        "mdi-facebook",
        "mdi-instagram",
        "mdi-twitter",
        "mdi-reddit",
        "mdi-youtube"
      ]
    };
  }
};
</script>

<style>
#ftrr {
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    radial-gradient(
        at top center,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 120%
      )
      #989898;
  background-blend-mode: multiply, multiply;
}

.logo-ftr {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo-ftr > * {
  margin-bottom: 8px;
}

.logo-ftr .atl {
  width: 70px;
}

.logo-ftr .net {
  width: 107px;
}
</style>
