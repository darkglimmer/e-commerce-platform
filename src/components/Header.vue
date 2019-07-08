<template>
    <div class="header">
        <!-- <img class="login-logo" width="100px" src="@/assets/logo.png" /> -->
        <div class="header-container">
            <el-menu class="el-menu-demo menu" background-color="rgb(12, 39, 60)" active-text-color="#ff5a5b" text-color="#fff" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">HOME</el-menu-item>
                <el-menu-item index="2">SHOP</el-menu-item>
                <el-menu-item index="3">ABOUT US</el-menu-item>
                <el-menu-item index="4">SUPPORT</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {
      handleSelect(key, keyPath){
          if(key == 1){
              this.$router.push("/");
          }
      }
  }
}
</script>

<style scoped>
.header{
    width: 100%;
    height: 60px;
    line-height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    background-color:rgb(12, 39, 60);
}
.header-container{
    width: 720px;
    margin: 0 auto;
}
.menu{
    font-weight: bold;
}
</style>
<style>
.el-menu-item{
    width: 180px;
    text-align: center;
}
</style>
