<template>
    <div class="shop-table">
        <el-table
        :data="tableData"
        style="width: 800px">
        <el-table-column
            prop="date"
            label="日期"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="address"
            label="地址">
        </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.shop-table{
    padding: 120px 130px;
}
</style>
