<template>
  <div class="shop">
    <div class="shop-table">
        <el-table
        ref="multipleTable"
        @selection-change="handleSelectionChange"
        :data="tableData"
        style="width: 850px; background-color:#fdfdfd;"
        align="center"
        :header-cell-style="{background:'#fdfdfd'}">
         <template slot="empty">
            <div>购物车空空如也～快去购物吧</div>
        </template>
        <el-table-column
            type="selection"
            width="35">
        </el-table-column>
        <el-table-column
            prop="id"
            width="90"
            align="center"
            label="商品编号">
        </el-table-column>
        <el-table-column
            prop="img"
            width="60"
            align="center">
              <template slot-scope="scope">
                <img :src="scope.row.img" style="width: 50px;height: 50px">
              </template>
        </el-table-column>
        <el-table-column
            prop="product"
            label="商品名称"
            width="220"
            align="center">
        </el-table-column>
        <el-table-column
            prop="price"
            label="价格"
            align="center"
            width="100">
        <template slot-scope="scope">
            ${{scope.row.price}}
          </template>
        </el-table-column>
        <el-table-column
            prop="number"
            align="center"
            label="数量"
            width="180">
            <template slot-scope="scope">
                <el-input-number v-model="scope.row.number" size="mini" width="50px" @change="handleChange(scope.row.number)" :min="1"></el-input-number>
            </template>
        </el-table-column>
         <el-table-column
            align="center"
            label="总价"
            width="100">
         <template slot-scope="scope">
            ${{scope.row.number * scope.row.price}}
          </template>
        </el-table-column>
          <el-table-column
            width="55">
            <template slot-scope="scope">
               <el-button
                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                    type="text"
                    size="small">
                ✖️
                </el-button>
            </template>
        </el-table-column>
        </el-table>
        <div>
            <el-button class="shop-button" type="info" round @click="goShopping">继续购物</el-button>
            <el-button class="shop-button" type="info" style="margin-left:400px" round @click="deleteAll">清空购物车</el-button> 
            <el-button class="shop-button" type="info" round>刷新购物车</el-button>
        </div>
    </div>
    <div class="summary">
        <div>订单</div>
        <hr style="margin-top:10px; margin-bottom:20px;">
        <span >价格:</span>
        <span style="float:right">${{this.summary}}</span>
        <br>
        <span >折扣:</span>
        <span style="float:right">$0</span>
        <hr style="margin-top:30px; margin-bottom:20px;">
        <span >您需支付:</span>
        <span style="float:right">${{this.summary}}</span>
        <div style="margin-top:50px;">
            <el-checkbox v-model="checked">我已同意隐私政策</el-checkbox>
        </div>
        <el-button class="check-button" type="danger">支付</el-button>
    </div>
    <div class="pop-container">
        <div class="address-selection">
        <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="王鹏宇是梅西" name="1">
                <div><Address :nickname="this.addresses[0].name"
                            :postcode="this.addresses[0].postcode"
                            :phone="this.addresses[0].phone"
                            :province="this.addresses[0].province"
                            :city="this.addresses[0].city"
                            :country="this.addresses[0].country"
                            :street="this.addresses[0].street"
                            :address="this.addresses[0].address"></Address></div>
            </el-collapse-item>
            <el-collapse-item title="王鹏宇不是梅西" name="2">
                <div><Address></Address></div>
            </el-collapse-item>
            <el-collapse-item title="王鹏宇竟然不是梅西" name="3">
                <div><Address></Address></div>
            </el-collapse-item>
            <el-collapse-item title="王鹏宇是梅西吗？" name="4">
                <div><Address></Address></div>
            </el-collapse-item>
        </el-collapse>
        </div> 
    </div>
    <div>
        <Footer :ifLogo="true" />
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer"
import Address from "@/components/Address.vue"

export default {
    name: "shoppingCart",
    components:{
        Footer
    },
    data(){
        return{
            tableData:[
                {
                    id: 1,
                    img: require('../assets/cart1.jpg'),
                    product: 'smart phone',
                    price: 299.00,
                    number: 1,
                },
                {
                    id: 2,
                    img: require('../assets/cart1.jpg'),
                    product: 'smart phone',
                    price: 299.00,
                    number: 1,
                },
                {
                    id: 3,
                    img: require('../assets/cart1.jpg'),
                    product: 'smart phone',
                    price: 299.00,
                    number: 1,
                }
            ],
            multipleSelection: [],
            summary: 0,
            activeName: "1",
            addresses: [{
                name: "梅西",
                postcode: "430000",
                phone: "1364749287",
                province: "湖北省",
                city: "武汉市",
                country: "洪山区",
                street: "虎泉街道",
                address: "湖北省武汉市洪山区珞喻路152号华中师范大学东区宿舍16"
            }]
        }
    },
    methods:{
        handleChange(number){
            this.number = number
            console.log(this.tableData)
            this.summary = 0;
            for(var i in this.tableData){
                for(var j in this.multipleSelection){
                    if(this.multipleSelection[j].id === this.tableData[i].id){
                        this.summary += this.tableData[i].price * this.tableData[i].number
                    }
                }
            }
        },
        handleSelectionChange(val){
            this.multipleSelection = val;
            this.summary = 0;
            for(var i in this.tableData){
                for(var j in this.multipleSelection){
                    if(this.multipleSelection[j].id === this.tableData[i].id){
                        this.summary += this.tableData[i].price * this.tableData[i].number
                    }
                }
            }
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
        },
        goShopping(){
            this.$router.push("/")
        },
        deleteAll(){
            this.tableData=[];
        }
    }
}
</script>

<style scoped>
.shop{
    padding-top: 160px;
    box-sizing: border-box;
}
.shop-table{
    box-sizing: border-box;
    padding: 0 90px;
    min-height: 583px;
    display: inline-block;
    vertical-align: top;
}
.summary{
    box-sizing: border-box;
    width: 300px;
    height: 350px;
    padding: 20px;
    display: inline-block;
    vertical-align: top;
    background-color: rgb(246, 246, 246);
}
.shop-button{
    background-color: rgb(12, 39, 60);
    color: white;
    margin-top: 10px;
    font-size: 12px;
}
.check-button{
    width: 100%;
    height: 50px;
    border-radius: 30px;
    margin-top: 20px;
}
.pop-container{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 9999;
}
.address-selection{
    margin-left: 350px;
    margin-top: 250px;
    width: 800px;
    height: 800px;
}
</style>

<style>
.el-table__body td{
    background-color: #fdfdfd;
}
.el-input-number--mini .el-input-number__decrease, .el-input-number--mini .el-input-number__increase{
    border-radius: 20px;
}
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    background-color: #ff5a5b !important;
    border-color: #ff5a5b !important;
}
.el-checkbox__input.is-checked+.el-checkbox__label{
    color: #ff5a5b !important;
}
.el-checkbox__input.is-focus .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner{
    border-color: #ff5a5b !important;
}
.el-checkbox__inner:hover{
    border-color: #ff5a5b !important;
}
.el-checkbox__inner:focus{
    border-color: #ff5a5b !important;
}
.el-input-number__decrease:hover, .el-input-number__increase:hover{
    border-color: #ff5a5b !important;
}
.el-input-number--mini, .el-input-number .el-input-number__decrease:focus{
    border-color: #ff5a5b !important;
}
.el-input-number--mini .el-input-number__decrease [class*=el-icon], .el-input-number--mini .el-input-number__increase [class*=el-icon]{
    color: #ff5a5b !important;
}
.el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled), .el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled){
    border-color: #ff5a5b !important;
}
</style>
