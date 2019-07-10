<template>
    <div class="address">
        <el-collapse v-model="this.activeName" accordion>
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
</template>

<script>
import Address from '@/components/Address.vue'

export default {
    name: 'address',
    components: {
        Address,
    },
    data() {
        return {
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
    methods: {

    }
}
</script>

<style>
.address{
    width: 880px;
}
</style>
