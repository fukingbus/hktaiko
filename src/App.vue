<template>
  <div id="app">
    <mura-nav/>
    <div id="bg"/>
    <router-view/>
  </div>
</template>

<script>

import NavBar from './components/mura-nav.vue';

export default {
  components: {
    'mura-nav': NavBar,
  },
};
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#bg {
    width: 100%;
    height: 100%;
    background-image: url("/media/img/taiko_bg_main.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    -webkit-filter: blur(8px);
    /* Safari 6.0 - 9.0 */
    filter: blur(8px);
    position: absolute;
    top: 0;
    z-index: -999;
}

html,body,#app{
  height: 100%;
  margin: 0;
}
</style>
