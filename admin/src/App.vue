<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
* {
  margin: 0;
  padding: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #2c3e50;
  overflow: scroll;
  -webkit-font-smoothing: antialiased;
}
.tb-edit .el-input{
    display: none
}
.tb-edit .current-row .el-input{
    display: block
}
.tb-edit .current-row .el-input+span{
    display: none
}
</style>
