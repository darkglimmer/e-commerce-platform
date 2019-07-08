<template>
    <div class="note">
        <div class="image">
            <img style="height: 290px; width: 290px;" src="../assets/img.png">
        </div>
        <div class="block"></div>
        <div class="info">
            <div class="title">
                <span style="font-weight: bold;">ACR System - 15mm Rods Adapter</span>
            </div>
            <div class="description">
                <a>Here's the story of a man.</a>
            </div>
            <div class="price">
                <span style="display: inline-block; font-size: 23px; color: Red; font-weight: bold;">$ 12.00</span>
                <a style="display: inline-block; font-size: 17px; font-weight: bold;">/ $ 09.00</a> 
            </div>
            <div class="addToCart">
                <button style="margin-left: 10px; border: none; outline: none; background-color: white; width: 260px;">
                    <span style="font-size: 30px; margin-left: 0;">🛒</span>
                    <span style="font-size: 20px; margin-right: 0; font-weight: 700">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;ADD TO CART</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'note',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.note{
    height: 500px;
    width: 290px;
    background-color: white;
}
.image{
    height: 290px;
    width: 290px;
    top: 0;
}
.info{
    height: 100px;
    width: 290px;
    margin-top: -5px;;
}
.title{
    margin-top: 20px;
    width: 260px;
    margin-left: 15px;
}
.description{
    margin-top: 5px;
    width: 260px;
    margin-left: 20px;
}
.price{
    margin-top: 10px;
    width: 260px;
    margin-left: 20px;
}
.addToCart{
    margin-top: 20px;
    outline: 2px;
}
.block{
    height: 50px;
}
</style>