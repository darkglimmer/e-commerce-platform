<template>
    <div class="footer">
        <div v-if="this.ifLogo" class="footer-logo">
            <img width="100px" src="../assets/logo.png" />
        </div>
        <div class="footer-pay">
            <span>Payment Methods Partner:</span>
            <img width="15px" class="payway" src="../assets/alipay.png" />
            <img width="15px" class="payway" src="../assets/wechat.png" />
            <span style="margin-left:300px">CopyRights  © 2019 All rights reserved</span>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Footer',
  props:{
    ifLogo: Boolean
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.footer-container{
    height: 60px;
    line-height: 60px;
    background-color:rgb(12, 39, 60);
    text-align: center;
}
.footer-logo{
    background-color:rgb(12, 39, 60);
    padding: 10px;
    text-align: center;
}
.footer-title{
    width: 100px;
    margin-top: 20px;
}
.footer-pay{
    height: 30px;
    line-height: 30px;
    color: white;
    background-color: #ff5a5b;
    font-size: 6px;
    text-align: center;
}
.footer{
    width: 100%;
}
.payway{
    margin-left: 20px;
    margin-top: 5px;
}
</style>
