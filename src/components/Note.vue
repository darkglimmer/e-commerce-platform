<template>
    <div class="note">
        <div class="image">
            <img style="height: 290px; width: 290px;" src="../assets/product.png">
        </div>
        <div class="block"></div>
        <div class="info">
            <div class="title">
                <span style="font-weight: bold;">{{this.name}}</span>
            </div>
            <div class="description">
                <a>{{this.description}}</a>
            </div>
            <div class="price">
                <span style="display: inline-block; font-size: 25px; color: Red; font-weight: bold;">$ {{this.price-1}}</span>
                <a style="display: inline-block; font-size: 17px; font-weight: bold;">/ $ {{this.price}}</a> 
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
  props: {
    name: String,
    description: String,
    price: Number,
    productID: Number,
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
    margin-top: 18px;
    outline: 2px;
}
.block{
    height: 40px;
    color: rgba(red, green, blue, 0)
}
</style>