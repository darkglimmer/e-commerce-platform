<template>
    <div class="header">
        <div class="header-container">
            <el-menu class="el-menu-demo menu" background-color="rgb(12, 39, 60)" active-text-color="#ff5a5b" text-color="#fff" mode="horizontal" @select="handleSelect">
                <span class="title">
                    <img style="margin-right:10px;" src="../assets/Forma.png" />
                    CATEGOIES
                </span>
                <el-menu-item index="1">HOME</el-menu-item>
                <el-menu-item index="2">SHOP</el-menu-item>
                <el-menu-item index="3">ABOUT US</el-menu-item>
                <span class="header-login">LOGIN IN</span>
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
          if(key == 2){
              this.$router.push("/shoppingCart");
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
    width: 250px;
    float: left;
    text-align: center;
    color: white;
}
.header-container{
    margin-left: 130px;
    width: 1280px;
}
.menu{
    font-weight: bold;
}
.header-login{
    float: right;
    margin-right: 30px;
    color: white;
}
</style>
<style>
.el-menu-item{
    width: 250px;
    text-align: center;
    border: 0;
}
.el-menu{
    height: 60px;
}
</style>
