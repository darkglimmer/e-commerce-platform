<template>
    <div class="header">
        <div class="header-container">
            <el-menu class="el-menu-demo menu" background-color="rgb(12, 39, 60)" active-text-color="#ff5a5b" text-color="#fff" mode="horizontal" @select="handleSelect">
                <span class="title">
                    <img style="margin-right:10px;" src="../assets/Forma.png" />
                    分类
                </span>
                <el-menu-item style="font-size: 18px;" index="1">主页</el-menu-item>
                <el-menu-item style="font-size: 18px;" index="2">购物车</el-menu-item>
                <el-menu-item style="font-size: 18px;" index="3">关于我们</el-menu-item>
                <span v-if="!this.ifLogin" @click="login" class="header-login">登录</span>
                <span v-if="this.ifLogin" @click="logout" class="header-login">退出</span>
            </el-menu>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Header',
  props:{
      ifLogin: Boolean
  },
  methods: {
      handleSelect(key, keyPath){
          if(key == 1){
              this.$router.push("/");
          }
          if(key == 2){
              this.$router.push("/shoppingCart");
          }
          if(key == 3){
              this.$router.push("/aboutUs");
          }
      },
      login(){
           this.$router.push("/login");
      },
      logout(){
            window.localStorage.clear();
            this.ifLogin = false;
            this.$router.push("/login");
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
    width: 1280px;
    margin: 0 auto;
}
.menu{
    font-weight: bold;
    font-size: 18px;
}
.header-login{
    cursor: pointer;
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
