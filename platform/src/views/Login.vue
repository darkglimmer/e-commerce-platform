<template>
<div class="background">
    <div>
        <Header :ifLogin="this.ifLogin" />
    </div>
    <div class="login">
        <div class="login-img">
            <img style="width: 320px" src="../assets/regimg.png" />
        </div>
        <div class="login-card">
            <div class="login-card-title">Welcome to login</div>
            <el-form label-width="80px">
                <div class="login-message">用户名:<el-input v-model="account"></el-input></div>
                <div class="login-message">密码:<el-input v-model="password"></el-input></div>
                <el-button type="danger" class="login-button" round @click="login">登录</el-button>
            </el-form>
            <div class="login-tips">还没账号，马上<span style="cursor:pointer;" @click="toRegister" class="register">注册</span></div>
        </div>
    </div>
    <div class="login-foot">
        <Footer :ifLogo="true" />
    </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Login',
  components: {
    Footer,
    Header
  },
  data(){
    return {
        account: '',
        password:'',
        ifLogin: false
    }
  },
  methods:{
      toRegister(){
          this.$router.push("/register")
      },
      login(){
        const data = {
            "account": parseInt(this.account),
            "password": this.password
        }
        fetch(`/api/login`, {
            method: 'POST',
            headers: {
              "Content-Type":"application/json",
            },
            body: JSON.stringify(data)
          }).then(res => {
            if (res.ok){
              return res.json();
            }
          }).then(res => {
            window.localStorage.setItem("userID", res.body.id)
            this.$router.push('/');
          })
      }
  }
}
</script>

<style scoped>
.background{
    padding: 240px 0;
    
}
.login{
    width: 800px;
    margin: 0 auto;
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
    margin-left: 150px;
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
.login-foot{
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>
<style>
.el-input__inner{
    border-radius: 50px !important;
}

</style>
