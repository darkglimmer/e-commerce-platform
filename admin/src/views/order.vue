<template>
  <div style="padding: 60px 0">
      <div>
        <el-button @click="back"  class="back-button">返回首页</el-button>
      </div>
      <Card v-for="order in this.tableData" 
            :name="order.receiver.name"
            :province="order.receiver.province"
            :city="order.receiver.city"
            :country="order.receiver.country"
            :address="order.receiver.address"
            :phone="order.receiver.phone"
            :postcode="order.receiver.postcode"
            :street="order.receiver.street"
            :products="order.products"
            :sum="order.sum" />
    <div>
        
    </div>
  </div>
</template>

<script>
  import Card from "../components/orderCard"
  export default {
    name: 'order',
    components:{
        Card
    },
    data() {
      return {
        tableData: []
      }
    },
    mounted() {
      this.showAllOrder()
    },
    methods: {
        back(){
          this.$router.push('/')
        },
        showAllOrder(){
            fetch(`/api/order`, {
                method: 'GET',
                headers: {
                    "Content-Type":"application/json",
                },
            }).then(res => {
                if (res.ok){
                    return res.json();
                }
                }).then(res => {
                    this.tableData = res
                    console.log(this.tableData)
            })
        }
    }
  };
</script>

<style scoped>
.back-button{
    margin-left: 650px;
}
</style>