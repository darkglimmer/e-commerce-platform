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
            prop="imagUrl"
            width="60"
            align="center">
              <template slot-scope="scope">
                <img :src="scope.row.imagUrl" style="width: 50px;height: 50px">
              </template>
        </el-table-column>
        <el-table-column
            prop="name"
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
            prop="num"
            align="center"
            label="数量"
            width="180">
            <template slot-scope="scope">
                <el-input-number v-model="scope.row.num" size="mini" width="50px" @change="handleChange(scope.row.num)" :min="1"></el-input-number>
            </template>
        </el-table-column>
         <el-table-column
            align="center"
            label="总价"
            width="100">
         <template slot-scope="scope">
            ${{scope.row.num * scope.row.price}}
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
            <el-button class="shop-button" type="info" style="margin-left:550px" round @click="deleteAll">清空购物车</el-button> 
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
        <el-button class="check-button" type="danger" @click.native="chooseAddress(true)">支付</el-button>
    </div>
    <div class="pop-container" v-if="this.pop">
        <div class="address-selection">
            <AddressSelection></AddressSelection>
        </div>
        <div style="margin-top: 50px; margin-left: 700px;">
            <el-button type="danger" round @click.native="chooseAddress(false)">选择地址信息</el-button>
        </div>
    </div>

    <div>
        <Footer :ifLogo="true" />
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer"
import AddressSelection from '@/components/AddressSelection.vue'

export default {
    name: "shoppingCart",
    components:{
        Footer,
        AddressSelection
    },
    data(){
        return{
            checked: false,
            pop: false,
            tableData:[],
            multipleSelection: [],
            summary: 0,
        }
    },
    mounted(){
        const User = window.localStorage.getItem("userID")
        fetch(`/api/shop?action=getShopCar&userId=${User}`, {
            method: 'GET',
            headers: {
                "Content-Type":"application/json",
            },
        }).then(res => {
            if (res.ok){
                return res.json();
            }
        }).then(res => {
            this.tableData = res.body
        })
    },
    methods:{
        getShoppingCart(){
            const User = window.localStorage.getItem("userID")
            fetch(`/api/shop?action=getShopCar&userId=${User}`, {
                method: 'GET',
                headers: {
                    "Content-Type":"application/json",
                },
                }).then(res => {
                if (res.ok){
                    return res.json();
                }
                }).then(res => {
                    this.tableData = res.body
            })
        },
        handleChange(num){
            this.num = num
            console.log(this.tableData)
            this.summary = 0;
            for(var i in this.tableData){
                for(var j in this.multipleSelection){
                    if(this.multipleSelection[j].id === this.tableData[i].id){
                        this.summary += this.tableData[i].price * this.tableData[i].num
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
                        this.summary += this.tableData[i].price * this.tableData[i].num
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
        },
        chooseAddress(v) {
            if (v) {
                if (!this.checked) {
                    window.alert("请先同意用户隐私政策！")
                    return
                }
            } 
            this.pop = v
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
    margin-top: 100px;
    width: 800px;
    border-radius: 10px;
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
