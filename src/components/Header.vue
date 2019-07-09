<template>
    <div class="header">
        <!-- <img class="login-logo" width="100px" src="@/assets/logo.png" /> -->
        <div class="header-container">
            <el-menu class="el-menu-demo menu" background-color="rgb(12, 39, 60)" active-text-color="#ff5a5b" text-color="#fff" mode="horizontal" @select="handleSelect">
                <!-- <el-menu-item class="title" index="1">CATEGOIES</el-menu-item> -->
                <span class="title">
                    <img style="margin-right:10px;" src="../assets/Forma.png" />
                    CATEGOIES
                </span>
                <el-menu-item index="1">HOME</el-menu-item>
                <el-menu-item index="2">SHOP</el-menu-item>
                <el-menu-item index="3">ABOUT US</el-menu-item>
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
    line-height: 60px;
    position: absolute;
    top: 0;
    left: 0;
    background-color:rgb(12, 39, 60);
}
.title{
    background-color: #ff5a5b;
    width: 200px;
    float: left;
    text-align: center;
    color: white;
}
.header-container{
    width: 800px;
    margin: 0 auto;
}
.menu{
    font-weight: bold;
}
</style>
<style>
.el-menu-item{
    width: 200px;
    text-align: center;
}
</style>
