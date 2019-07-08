<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  },
  name: 'app'
}
</script>

<style>
*{
  padding: 0;
  margin: 0
}
#app {
  font-family: 'Adobe Heiti Std' 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: scroll;
}
</style>
