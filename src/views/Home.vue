<template>
  <div class="home">
    <Classify :category="this.category" />
    <div class="banner">
      <el-carousel height="450px">
        <el-carousel-item v-for="item in imgList" :key="item">
          <img :src="item.url" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="product-title">
      <img src="../assets/header.png" />
    </div>
    <div class="shopping-notes">
        <Note class="notes" v-for="note in notes" :key="note.productID" :name="note.name" :description="note.description" :price="note.price"></Note>   
    </div>
    <div class="middle">
      <div class="home-card">
        <div class="home-card-item"  v-show="this.active !== 1" @mouseenter="showActive(1)">
          <img style="margin-bottom: 10px" src="../assets/icon/1-w.png">
          <div>SPECIAL OFFERS</div>
          <div style="font-size:14px">Believe it or not I'm walking  on air. I never thought I could feel so free. Flying away</div>
        </div>
        <div class="home-card-item-hover"  v-show="this.active === 1" @mouseenter="showActive(1)">
          <img style="margin-bottom: 10px" src="../assets/icon/1.png" />
          <div>SPECIAL OFFERS</div>
          <div style="font-size:14px">Believe it or not I'm walking  on air. I never thought I could feel so free. Flying away</div>
        </div>
        <div class="home-card-item"  v-show="this.active !== 2" @mouseenter="showActive(2)">
          <img style="margin-bottom: 10px" src="../assets/icon/2-w.png">
          <div>FREE DELIVERY</div>
          <div style="font-size:14px">Believe it or not I'm walking  on air. I never thought I could feel so free. Flying away</div>
        </div>
        <div class="home-card-item-hover"  v-show="this.active === 2" @mouseenter="showActive(2)">
          <img style="margin-bottom: 10px" src="../assets/icon/2.png" />
          <div>FREE DELIVERY</div>
          <div style="font-size:14px">Believe it or not I'm walking  on air. I never thought I could feel so free. Flying away</div>
        </div>
        <div class="home-card-item" v-show="this.active !== 3" @mouseenter="showActive(3)">
          <img style="margin-bottom: 10px" src="../assets/icon/3-w.png">
          <div>30 DAYS RETURN</div>
          <div style="font-size:14px">Believe it or not I'm walking  on air. I never thought I could feel so free. Flying away</div>
        </div>
        <div class="home-card-item-hover" v-show="this.active === 3" @mouseenter="showActive(3)">
          <img style="margin-bottom: 10px" src="../assets/icon/3.png" />
          <div>30 DAYS RETURN</div>
          <div style="font-size:14px">Believe it or not I'm walking  on air. I never thought I could feel so free. Flying away</div>
        </div>
        <div class="home-card-item" v-show="this.active !== 4" @mouseenter="showActive(4)">
          <img style="margin-bottom: 10px" src="../assets/icon/4-w.png">
           <div>FASTEST SHIPPING</div>
          <div style="font-size:14px">Believe it or not I'm walking  on air. I never thought I could feel so free. Flying away</div>
        </div>
        <div class="home-card-item-hover" v-show="this.active === 4" @mouseenter="showActive(4)">
          <img style="margin-bottom: 10px" src="../assets/icon/4.png" />
          <div>FASTEST SHIPPING</div>
          <div style="font-size:14px">Believe it or not I'm walking  on air. I never thought I could feel so free. Flying away</div>
        </div>
      </div>
    </div>
    <div class="home-footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Classify from "../components/Classify"
import Note from "../components/Note"
import Footer from "../components/Footer"

export default {
  name: 'home',
  components:{
    Classify,
    Note,
    Footer
  },
  data(){
      return {
        imgList:[
          { url:require( "../assets/banner1.jpg") },
          { url:require( "../assets/banner2.jpg") },
          { url:require( "../assets/banner3.jpg") }
        ],
        category: "adfsdf",
        active: 1,
        notes: [
          {
            name: 'ACR System - 15mm Rods Adapter',
            description: "Here's the story of a man.",
            price: 12.00,
            productID: 1,
        },
        {
            name: 'ACR System - 15mm Rods Adapter',
            description: "Here's the story of a man.",
            price: 12.00,
            productID: 1,
        },
         {
            name: 'ACR System - 15mm Rods Adapter',
            description: "Here's the story of a man.",
            price: 12.00,
            productID: 1,
        },
         {
            name: 'ACR System - 15mm Rods Adapter',
            description: "Here's the story of a man.",
            price: 12.00,
            productID: 1,
        },
         {
            name: 'ACR System - 15mm Rods Adapter',
            description: "Here's the story of a man.",
            price: 12.00,
            productID: 1,
        },
         {
            name: 'ACR System - 15mm Rods Adapter',
            description: "Here's the story of a man.",
            price: 12.00,
            productID: 1,
        },
        ]
      }
  },
  methods:{
    showActive(index){
      this.active = index;
    }
  }
}
</script>

<style>
  .home{
    padding-top: 60px;
  }
  .banner{
    /* margin-left: 500px; */
    width:800px;
  }
  .middle{
    margin-top:30px;
    background-color: rgb(12, 39, 60);
    height: 245px;
  }
  .home-card{
    width: 1280px;
    margin: 0 auto;
    color: white;
    font-weight: bold;
  }
  .home-card-item{
    margin-left: 50px;
    display: inline-block;
    vertical-align: middle;
    width: 220px;
    padding:32px 20px;
    text-align: center;
  }
  .home-card-item-hover{
    background-color: #f5f5f5 !important;
    color: #ff5a5b;
    margin-left: 50px;
    display: inline-block;
    vertical-align: middle;
    width: 220px;
    padding:32px 20px;
    text-align: center;
  }
  .product-title{
    width: 650px;
    margin: 50px auto;
  }
  .shopping-notes{
    width: 1300px;
    margin: 0 auto;
  }
  .notes{
    display: inline-block;
    vertical-align: middle;
    margin-left:30px; 
  }
</style>