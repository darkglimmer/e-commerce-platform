<template>
    <div class="information">
        <hr width=100% size=2 color=#B0B0B0 style="filter:progid:DXImageTransform.Microsoft.Glow(color=#B0B0B0); margin-top: 10px;"> 
        <div class="information-tabs">
            <div class=el-tabs__item>
                <el-tabs v-model="activeName" style="width:1350px" type="card" @tab-click="handleClick">
                    <el-tab-pane label="商品概况" name="first">{{this.content1}}</el-tab-pane>
                    <el-tab-pane label="商品描述" name="second"></el-tab-pane>
                    <el-tab-pane label="附加信息" name="third"></el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'information',
    data() {
        return {
            activeName: 'first',
            content1: "请勿随意接收任何来源不明的文件，请勿随意点击任何来源不明的链接。涉及资金往来的事项请务必仔细核对资金往来信息。 天猫不会以订单有问题，让您提供任何银行卡、密码、手天猫为第三方交易平台及互联网信息服务提供者，天猫（含网站、客户端等）所展示的商品/服务的标题、价格、详情等信息内容系由店铺经营者发布，其真实性、准确性和合法性均由店铺经营者负责。天猫提醒用户购买商品/服务前注意谨慎核实。如用户对商品/服务的标题、价格、详情等任何信息有任何疑问的，请在购买前通过阿里旺旺与店铺经营者沟通确认；天猫存在海量店铺，如用户发现店铺内有任何违法/侵权信息，请立即向天猫举报并提供有效线索。机验证码！遇到可疑情况可在钱盾“诈骗举报”中进行举报."
        };
    },
    methods: {
        handleClick(tab, event){
            console.log(tab, event);
        }
    }
};
</script>
<style scoped>
.information{
    margin-top: 120px;
}
.information-tabs{
    margin-top: 50px;
    margin-left: 30px;
    color: red;
}
</style>

<style>
.el-tabs__item.is-top{
    color: black !important;
    background-color: whitesmoke;
    height: 50px;
    width: 190px;
    font-size:18px;
    text-align: center;
    line-height: 50px;
}
.el-tabs__item.is-active{
    color: white !important;
    background-color: red !important;
    height: 50px;
    width: 190px;
    font-weight: bold;
}
.el-tab-pane{
    color: black !important;
}
</style>