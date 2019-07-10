<template>

    <div class="address-card">
        <div class="address-card-icon">
            <div class="address-card-icon-inside">
                <img src="../assets/address.png" style="margin-left: 30px; margin-top: 10px; height: 88px; width: 88px;">
            </div>
            <div class="address-name">
                <span style="font-size: 20px; line-height: 50px; margin-left: 10px;">:{{this.nickname}}</span>
            </div>
        </div>
        <div class="address-card-content">
            <div class="address-postcode">
                <span style="font-size: 30px; line-height: 50px; font-weight: bold;">{{this.postcode}}</span>
            </div>
            <div class="address-phone">
                <span style="font-size: 18px; line-height: 30px; font-weight: bold;">{{this.phone}}</span>
            </div>
            <div class="address-info">
                <span style="font-size: 15px; line-height: 30px; font-weight: bold;">{{this.province+this.city+this.country+this.street}}</span>
            </div>
            <div class="address-detail">
                <span style="margin-left: 10px;">{{this.address}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'address',
    data() {
    },
    props: {
        nickname: String,
        postcode: String,
        phone: String,
        province: String,
        city: String,
        country: String,
        street: String,
        address: String,
    },
    methods: {

    } 
}
</script>

<style>
.address-card{
    height: 200px;
    width: 800px;
    margin-left: 30px;
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
}
.address-card-content{
    display: inline-block;
    height: 200px;
    margin-left: 10px;
    width: 582px;
    border-left: 4px dashed rgb(255, 0, 0, .04);
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

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
    margin-top: 17px;
    background-color: rgba(0, 0, 0, .02);
    border-radius: 15px;
}
.address-postcode{
    height: 50px;
    width: 150px;
    margin-left: 10px;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, .02);
    border-radius: 15px;
    text-align: center;
    display: inline-block;
}
.address-phone{
    height: 30px;
    width: 150px;
    margin-left: 10px;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, .02);
    border-radius: 15px;
    text-align: center;
    display: inline-block;
    margin-left: 50px;
}
.address-info{
    height: 30px;
    width: 566px;
    margin-left: 10px;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, .02);
    border-radius: 15px;
    text-align: center;
}
.address-detail{
    height: 80px;
    width: 566px;
    margin-left: 10px;
    margin-top: 10px;
    background-color: rgba(0, 0, 0, .02);
    border-radius: 15px;
}
</style>
