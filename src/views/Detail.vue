<template>
    <div class="detail">
        <ProductCard :productId="this.id" :name="this.name" :num="this.num" :price="this.price" :desc="this.desc" :imagUrl="this.imagUrl"></ProductCard>
        <Information></Information>
        <div class="detail-footer">
            <Footer />
        </div>
    </div>
</template>

<script>
import ProductCard from '@/components/Card.vue'
import Information from '@/components/Information.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'detail',
    components: {
        ProductCard,
        Information,
        Footer
    },
    data(){
        return{
            id: 0,
            name: '',
            num: 0,
            price: 0,
            desc: '',
            imagUrl: ''
        }
    },
    mounted(){
         this.id = this.$route.params.id
         fetch(`/api/ProductServlet?action=seek&ID=${this.id}`, {
          method: 'GET',
          headers: {
            "Content-Type":"application/json",
          },
        }).then(res => {
          if (res.ok){
            return res.json();
          }
        }).then(res => {
            this.name = res.name,
            this.num = res.num,
            this.price = res.price,
            this.desc = res.desc,
            this.imagUrl = res.imagUrl
      })
    }

}
</script>

<style>
.detail{
    margin-top: 180px;
}
.detail-footer{
    margin-top: 100px;
}
</style>

