<template>
  <div id="app">
    <Header :ifLogin="this.ifLogin" />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  },
  data(){
    return{
      ifLogin :false
    }
  },
  mounted(){
    if(window.localStorage.getItem("userID")){
        this.ifLogin = true;
    }
  },
  updated(){
    if(window.localStorage.getItem("userID")){
        this.ifLogin = true;
    }
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
  background-color: #fdfdfd;
}
</style>
