<template>
  <div>
    <div class="button"> 
      <el-button @click="product">查看商品</el-button>
      <el-button @click="order">查看订单</el-button>
    </div>
    <div class="picture">
      <img src="../assets/neng.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods:{
    product(){
      this.$router.push("/product")
    },
    order(){
      this.$router.push("/order")
    }
  }
}
</script>

<style>
.button{
  margin-top: 50px;
  margin-left: 620px;
}
.picture{
  margin-top: 90px;
  margin-left: 400px;
}
</style>
