<template>
    <div class="login">
        <div class="login-img">
            <img style="width: 320px" src="../assets/regimg.png" />
        </div>
        <div class="login-card">
            <div class="login-card-title">Welcome to login</div>
            <el-form ref="form" :model="form" label-width="80px">
                <!-- <el-form-item label="Username">
                </el-form-item> -->
                <div class="login-message">Username:<el-input></el-input></div>
                <div class="login-message">Password:<el-input></el-input></div>
                <el-button type="danger" class="login-button" round>Login</el-button>
            </el-form>
            <div class="login-tips">I have not registed yet, click to <span class="register">register</span></div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Login'
}
</script>

<style scoped>
.login{
    width: 730px;
    margin: 0 auto;
    margin-top:250px;
}
.login-img{
    display: inline-block;
}
.login-card-title {
    text-align: center;
    font-size: 23px;
    font-weight: bold;
    color: #555555;
    margin-bottom: 30px;
}
.login-card{
    display: inline-block;
    width: 250px;
    margin-left: 100px;
}
.login-button{
    width: 250px;
    margin-top: 20px;
}
.login-message{
    color: #989898;
    font-size: 13px;
    font-weight: bold;
    margin-top: 10px;
}
.login-tips{
    font-weight: bold;
    font-size: 14px;
    color: #555555;
    width: 300px;
    margin-top: 40px;
}
.register{
    color: #ff5a5b;
    font-weight: bold;
}
</style>
<style>
.el-input__inner{
    border-radius: 50px;
}
</style>
