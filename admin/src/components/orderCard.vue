<template>
    <div>
        <el-card class="card">
             <div class="shop-table">
                <el-table
                :data="products"
                style="width:100%"
                align="center">
                <el-table-column
                    prop="id"
                    width="180"
                    align="center"
                    label="商品编号">
                </el-table-column>
                <el-table-column
                    prop="imagUrl"
                    width="150"
                    align="center">
                    <template slot-scope="scope">
                        <img :src="scope.row.imagUrl" style="width: 50px;height: 50px">
                    </template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="商品名称"
                    width="260"
                    align="center">
                </el-table-column>
                <el-table-column
                    prop="price"
                    label="价格"
                    align="center"
                    width="180">
                <template slot-scope="scope">
                    ${{(scope.row.price).toFixed(2)}}
                </template>
                </el-table-column>
                <el-table-column
                    prop="num"
                    align="center"
                    label="数量"
                    width="180">
                </el-table-column>
                <el-table-column
                    align="center"
                    label="总价"
                    width="100">
                <template slot-scope="scope">
                    ${{(scope.row.num * scope.row.price).toFixed(2)}}
                </template>
                </el-table-column>
             </el-table>
            </div>
            <div class="order-address">
                <div>收件人: <span>{{name}}</span></div>
                <div style="margin-top:20px;">联系方式: <span>{{phone}}</span></div>
                <div style="margin-top:20px;">收货地址: <span>{{country+province+city+street+address}}</span></div>
                <div style="margin-top:20px;"><span>地址邮编: </span>{{postcode}}</div>
            </div>
            <div class="sum">商品总价:  <span>${{sum}}</span></div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'card',
    props:{
        name: String,
        province: String,
        city: String,
        country: String,
        address: String,
        phone: String,
        postcode: String,
        street: String,
        products: Array,
        sum: Number
    }
}
</script>

<style scoped>
.card{
    width: 1200px;
    margin: 30px auto;
}
.order-address{
    margin: 30px 30px;
}
.sum{
    font-size: 20px;
    font-weight: bold;
    float: right;
    margin-bottom: 20px;
    margin-right: 20px;
}
</style>

