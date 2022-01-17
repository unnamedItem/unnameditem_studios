<template>
  <div id="app">
    <Navbar id="nav"/>
    <router-view id="main-content"/>
    <Footer id="footer"/>
  </div>
</template>


<script>
import Navbar from './components/TheNavbar.vue'
import Footer from './components/TheFooter.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

#app {
  font-family: 'VT323', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}

#main-content {
  padding-top: 25px;
  padding-bottom: 80px;
  max-height: 100vh;
  overflow: auto;
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
