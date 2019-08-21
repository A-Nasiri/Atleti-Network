<template>
  <div>
    <div class="text-xs-center">
      <img class="laliga-logo" :src="require('@/assets/laliga1.png')" alt />
    </div>
    <div class="text-xs-center">
      <iframe
        class="league-table"
        frameborder="0"
        scrolling="no"
        width="600"
        height="700"
        src="https://www.fctables.com/spain/liga-bbva/iframe/?type=table&lang_id=2&country=201&template=43&team=180603&timezone=Europe/London&time=24&po=1&ma=1&wi=1&dr=1&los=1&gf=1&ga=1&gd=1&pts=1&ng=0&form=1&width=600&height=700&font=Verdana&fs=14&lh=28&bg=transparent&fc=ffffff&logo=1&tlink=0&scfs=22&scfc=333333&scb=1&sclg=1&teamls=80&ths=1&thb=1&thba=09005c&thc=ffffff&bc=150059&hob=150059&hobc=ebe7e7&lc=333333&sh=0&hfb=1&hbc=3bafda&hfc=FFFFFF"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.league-table {
  border-radius: 10px;
}

@media only screen and (max-width: 800px) {
  /* .league-table {
    width: 100%;
    overflow: auto;
  } */

  .laliga-logo {
    width: 450px;
  }
}

@media only screen and (max-width: 600px) {
  .league-table {
    width: 100%;
  }

  .laliga-logo {
    width: 300px;
  }
}
</style>