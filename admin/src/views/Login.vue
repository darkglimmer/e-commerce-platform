<template>
    <div>
        <el-card class="card">
            <div style="margin-left:160px;">Welcome to login</div>
            <el-form ref="form" :model="form" label-width="60px" style="margin-top:20px;">
                <el-form-item label="用户名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password"></el-input>
                </el-form-item>
                <el-button style="margin-left:180px;" @click="login">管理员登录</el-button>
            </el-form>
        </el-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                name:'',
                password:''
            }
        }
    },
    methods:{
        login(){
            if(this.form.name == 'admin' && this.form.password == '123456'){
                this.$router.push('/')
            }else{
                window.alert('用户名或密码错误');
            }
        }
    }
}
</script>

<style scoped>
.card{
    width: 500px;
    margin: 300px 450px 320px 450px;
}
</style>
