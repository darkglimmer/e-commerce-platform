<template>
    <div class="address-card">
        <!-- <div class="address-card-icon"> -->
        <div :class="ifPick ? 'address-card-icon' : 'noaddress-card-icon'">
            <div class="address-card-icon-inside">
                <img src="../assets/address.png" style="margin-left: 30px; margin-top: 10px; height: 88px; width: 88px;">
            </div>
            <div class="address-name">
                <el-input v-model="nickname" placeholder="请输入名称"></el-input>
            </div>
        </div>
        <!-- <div class="address-card-content"> -->
        <div :class="ifPick ? 'address-card-content' : 'noaddress-card-content'">
            <div class="address-postcode">
                <el-input v-model="postcode" placeholder="请输入邮编" maxlength="6" show-word-limit></el-input>
            </div>
            <div class="address-phone">
                <el-input v-model="phone" placeholder="请输入电话"></el-input>
            </div>
            <div class="address-info">
                <div style="display: inline-block;">
                    <el-input v-model="province" placeholder="省" style="width: 100px;"></el-input>    
                </div>
                <div style="display: inline-block; margin-left: 20px;">
                    <el-input v-model="city" placeholder="市" style="width: 100px;"></el-input> 
                </div>
                <div style="display: inline-block; margin-left: 20px;">
                    <el-input v-model="country" placeholder="县/区" style="width: 100px;"></el-input>    
                </div>
                <div style="display: inline-block; margin-left: 20px;">
                    <el-input v-model="street" placeholder="街道" style="width: 200px;"></el-input>
                </div>
                </div>
            <div class="address-detail">
                <el-input v-model="address" placeholder="详细地址"></el-input>                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'address',
    data() {
        nickname = "",
        postcode = "",
        phone = "",
        province = "",
        city = "",
        country = "",
        street = "",
        address = "",
        ifPick = ""
    },
    methods: {

    } 
}
</script>

<style scoped>
.address-card{
    height: 200px;
    width: 800px;
}
.address-card-icon{
    display: inline-block;
    height: 200px;
    width: 200px;
    border-right: 4px dashed rgb(255, 0, 0, .04);
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    vertical-align: top;
    vertical-align: bottom;
    background-color: white;
}
.noaddress-card-icon{
    display: inline-block;
    height: 200px;
    width: 200px;
    border-right: 4px dashed rgb(255, 0, 0, .04);
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    vertical-align: top;
    vertical-align: bottom;
    background-color: rgb(231, 231, 231);
}
.address-card-content{
    display: inline-block;
    height: 200px;
    margin-left: 10px;
    width: 582px;
    border-left: 4px dashed rgb(255, 0, 0, .04);
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    background-color: white;
    vertical-align: top;
    vertical-align: bottom;
}
.noaddress-card-content{
    display: inline-block;
    height: 200px;
    margin-left: 10px;
    width: 582px;
    border-left: 4px dashed rgb(255, 0, 0, .04);
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    background-color: rgb(231, 231, 231);
    vertical-align: top;
    vertical-align: bottom;
}
.address-card-icon-inside{
    height: 100px;
    width: 150px;
    margin-left: 28px;
    margin-top: 20px;
    background-color: rgba(0, 0, 0, .02);
    border-radius: 15px;
}
.address-name{
    height: 50px;
    width: 150px;
    margin-left: 28px;
    margin-top: 20px;
    background-color: rgba(0, 0, 0, .02);
    border-radius: 15px;
}
.address-postcode{
    height: 50px;
    width: 150px;
    margin-left: 10px;
    margin-top: 10px;
    text-align: center;
    display: inline-block;
}
.address-phone{
    height: 30px;
    width: 150px;
    margin-left: 10px;
    margin-top: 10px;
    text-align: center;
    display: inline-block;
    margin-left: 50px;
}
.address-info{
    height: 30px;
    width: 566px;
    margin-left: 10px;
    margin-top: 10px;
    text-align: center;
}
.address-detail{
    height: 80px;
    width: 566px;
    margin-left: 10px;
    margin-top: 40px;
}
</style>
