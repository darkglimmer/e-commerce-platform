<template>
  <div class="shop">
    <div class="shop-table">
        <el-table
        ref="multipleTable"
        @selection-change="handleSelectionChange"
        :data="tableData"
        style="width: 750px; background-color:#fdfdfd;"
        align="center"
        :header-cell-style="{background:'#fdfdfd'}">
        <el-table-column
            type="selection"
            width="35">
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
            label="Product Name"
            width="220"
            align="center">
        </el-table-column>
        <el-table-column
            prop="price"
            label="Unit Price"
            align="center"
            width="100">
        </el-table-column>
        <el-table-column
            prop="number"
            align="center"
            label="Qty"
            width="180">
            <template slot-scope="scope">
                <el-input-number v-model="scope.row.number" size="mini" width="50px" @change="handleChange(scope.row.number)" :min="1"></el-input-number>
            </template>
        </el-table-column>
         <el-table-column
            prop="total"
            align="center"
            label="SubTotal"
            width="100">
        </el-table-column>
          <el-table-column
            width="55">
            <template slot-scope="scope">
                <i class="el-icon-close"></i>
            </template>
        </el-table-column>
        </el-table>
        <div>
            <el-button class="shop-button" type="info" round>CONTINUE SHOPPING</el-button>
            <el-button class="shop-button" type="info" style="margin-left:200px" round>CLEAR SHOPPING CART</el-button> 
            <el-button class="shop-button" type="info" round>UPDATE SHOPPING CART</el-button>
        </div>
    </div>
    <div class="summary">
        <div>ORDER SUMMARY</div>
        <hr style="margin-top:10px; margin-bottom:20px;">
        <span >Subtotal:</span>
        <span style="margin-left:131px">$458.00</span>
        <br>
        <span >Shopping:</span>
        <span style="margin-left:124px">$458.00</span>
        <hr style="margin-top:30px; margin-bottom:20px;">
        <span >Total:</span>
        <span style="margin-left:156px">$458.00</span>
        <div style="margin-top:50px;">
            <el-checkbox v-model="checked">I have promo code</el-checkbox>
        </div>
        <el-button class="check-button" type="danger">CHECK OUT</el-button>
    </div>
    <div>
        <Footer :ifLogo="true" />
    </div>
  </div>
</template>

<script>
import Footer from "../components/Footer"
export default {
    name: "shoppingCart",
    components:{
        Footer
    },
    data(){
        return{
            tableData:[
                {
                    img: require('../assets/cart1.jpg'),
                    product: 'smart phone',
                    price: '$299.00',
                    number: 1,
                    total: '$299.00'
                },
                {
                    img: require('../assets/cart1.jpg'),
                    product: 'smart phone',
                    price: '$299.00',
                    number: 1,
                    total: '$299.00'
                },
                {
                    img: require('../assets/cart1.jpg'),
                    product: 'smart phone',
                    price: '$299.00',
                    number: 1,
                    total: '$299.00'
                }
            ]
        }
    },
    methods:{
        handleChange(number){
            this.number = number
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
    padding: 0 130px;
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
    background-color: black;
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
</style>
