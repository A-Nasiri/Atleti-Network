<template>
  <div class="lR indigo white--text">
    <div class="comp hidden-xs-only">
      <span class="subheading">{{ competition }}</span>
      <span class="subheading cyan-lighten-5-text">{{ venue }}</span>
    </div>
    <div class="score subheading">
      <div class="home-img">
        <img :src="require('@/assets/rm.png')" alt />
      </div>
      <div>
        <span>{{ home }}</span>
        <span class="mx-3">-</span>
        <span>{{ away }}</span>
      </div>
      <div class="away-img">
        <img :src="require('@/assets/logo.png')" alt />
      </div>
    </div>
    <div class="date">
      <span>{{ date }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LastResult",
  data() {
    return {
      home: 3,
      away: 7,
      venue: "Metlife Stadium",
      competition: "International Champions Cup",
      date: "Sat, 27/07"
    };
  }
};
</script>

<style>
.lR {
  padding: 0.5rem;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.score {
  display: flex;
  align-items: center;
}

.score > * {
  margin: 0.5rem;
}

.home-img {
  width: 30px;
}

.home-img img {
  display: block;
  max-width: 100%;
  height: auto;
}

.away-img {
  width: 30px;
  padding-top: 0.4rem;
}

.away-img img {
  display: block;
  max-width: 100%;
  height: auto;
}

.comp {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 3rem;
}

.date {
  position: absolute;
  right: 3rem;
}
</style>

