<template>
  <div id="app">
    <Header />
    <router-view/>
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
  background-color: #f5f5f5;
  /* overflow: scroll; */
}
</style>
