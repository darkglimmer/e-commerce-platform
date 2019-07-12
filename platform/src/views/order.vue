<template>
  <div style="padding: 80px 0">
      <div>
          <Header :ifLogin="this.ifLogin" />
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
    <div style="margin-top: 30px">
      <Footer :ifLogo="true" />
    </div>
  </div>
</template>

<script>
  import Header from "../components/Header"
  import Footer from "../components/Header"
  import Card from "../components/orderCard"
  export default {
    name: 'order',
    components:{
        Card,
        Header,
        Footer
    },
    data() {
      return {
        tableData: [],
        ifLogin: true
      }
    },
    mounted() {
         const User = window.localStorage.getItem("userID")
        if(User === null){
            this.$router.push("/login")
        }
        else{
            this.showAllOrder()
        }
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
            })
        }
    }
  };
</script>

<style scoped>
</style>