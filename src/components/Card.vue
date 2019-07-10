<template>
    <div class="card-productNote">
      <div class="card-img">
        <img src="this.imageURL" style="height: 400px; width: 400px;">
      </div>
      <div class="card-information">
        <div class="card-title">
          <span style="font-size: 28px; font-weight: bold;">{{this.name}}</span>
          <el-rate
            v-model="value5"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
            style="margin-top: 5px;">
          </el-rate>
        </div>
        <hr width=100% size=2 color=#B0B0B0 style="filter:progid:DXImageTransform.Microsoft.Glow(color=#B0B0B0); margin-top: 10px;"> 
        <div class="card-description"> 
          <p style="font-size: 18px; line-height: 25px;">
            <i>{{this.desc}}</i>
          </p>
        </div>
        <div class="card-share">
          <img src="../assets/facebook.png">
          <img src="../assets/tweet.png" style="margin-left: 20px;">
          <img src="../assets/share.png" style="margin-left: 40px;">
        </div>
        <div class="card-statement">
          <span>请仔细阅读《免责声明》</span>
        </div>
      </div>
      <div class="card-shopping">
        <div class="card-shopping-title">
          <span style="font-size: 20px;">购买信息：</span>
        </div>
        <hr width=100% size=2 color=#B0B0B0 style="filter:progid:DXImageTransform.Microsoft.Glow(color=#B0B0B0); margin-top: 20px;"> 
        <div class="card-delivery">
          <el-button type="info" disabled class="card-info-button" round @click="login">
            <span style="font-size: 20px;">🚚</span>
            <span style="font-size: 17px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;货物将会免费派送</span>
            </el-button>
        </div>
        <div class="card-price">
          <span style="font-size: 30px; font-weight: bold; color: red;">$ {{this.num1*(price-1)}}</span>
          <br>
          <span style="text-decoration: line-through; font-size: 22px; line-height: 25px; color: #707070">$ {{this.num1*this.price}}</span>
        </div>
        <div class="card-quantity">
          <span style="font-size: 15px; font-weight: bold;">数量:</span>
        </div>
        <el-input-number v-model="num1" @change="handleChange" size="mini" :min="1" :max="this.num" label="描述文字" style="margin-left: 30px;"></el-input-number>
        <div class="card-add">
          <el-button type="danger" size="small" class="card-info-button" round @click="login">添加到购物车</el-button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'productNote',
  props: {
    id: Number,
    price: Number,
    num: Number,
    categoryid: Number,
    name: String,
    desc: String,
    imageURL: String
  },
  data () {
    return {
      value5: Math.floor(Math.random()*6),
      num1: 1,
    }
  },
  methods: {
  }
}
</script>

<style>
.card-productNote{
  height: 400px;
  vertical-align: top;
  vertical-align: bottom;
}
.card-img{
  display: inline-block;
  width: 400px;
  height: 400px;
  margin-left: 0;
}
.card-information{
  display: inline-block;
  height: 400px;
  width: 500px;
  margin-left: 70px;
  vertical-align: top;
  vertical-align: bottom;
}
.card-title{
  height: 80px;
  margin-top: 0px;
  margin-left: 5px;
}
.card-description{
  margin-top: 20px;
  height: 180px;
}
.card-share{
  margin-top: 0px;
  height: 45px;
}
.card-statement{
  margin-top: 5px;
  height: 55px;
  font-size: 15px;
}
.card-shopping{
  display: inline-block;
  margin-left: 100px;
  width: 300px;
  height: 400px;
  vertical-align: top;
  vertical-align: bottom;
}
.card-shopping-title{
  margin-top: 40px;
  margin-left: 10px;
}
.card-delivery{
  width: 300px;
  margin-top: 20px;
  margin-left: 25px;
}
.card-info-button{
    width: 250px;
    margin-top: 20px;
}
.card-price{
  margin-left: 30px;
  margin-top: 10px;
}
.card-quantity{
  margin-top: 32px;
  margin-left: 30px;
}
.card-add{
  margin-top: 15px;
  margin-left: 30px;
  width: 100px;
}
</style>
