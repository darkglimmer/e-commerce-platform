<template>
    <div class="header">
        <div class="header-container">
            <el-menu class="el-menu-demo menu" background-color="rgb(12, 39, 60)" active-text-color="#ff5a5b" text-color="#fff" mode="horizontal" @select="handleSelect">
                <el-submenu index="1">
                    <template  slot="title">CATEGOIES</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="2">HOME</el-menu-item>
                <el-menu-item index="3">SHOP</el-menu-item>
                <el-menu-item index="4">ABOUT US</el-menu-item>
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
.el-submenu__title{
    width: 180px;
    text-align: center;
    background-color: #ff5a5b !important;
}
</style>
