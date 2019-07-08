<template>
<div>
    <div class="login">
        <div class="login-img">
            <img style="width: 320px" src="../assets/regimg.png" />
        </div>
        <div class="login-card">
            <div class="login-card-title">Welcome to login</div>
            <el-form label-width="80px">
                <div class="login-message">Username:<el-input v-model="account"></el-input></div>
                <div class="login-message">Password:<el-input v-model="password"></el-input></div>
                <el-button type="danger" class="login-button" round @click="login">Login</el-button>
            </el-form>
            <div class="login-tips">I have not registed yet, click to <span style="cursor:pointer;" @click="toRegister" class="register">register</span></div>
        </div>
    </div>
    <div class="login-foot">
        <Footer />
    </div>
</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
// import Cookie from '@/components/Footer.vue'

export default {
  name: 'Login',
  components: {
    Footer
  },
  data(){
    return {
        account: '',
        password:''
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
            //   'Accept': 'application/json'
            },
            body: JSON.stringify(data)
          }).then(res => {
            if (res.ok){
              console.log(res.json());
              return res
            }
          }).then(res => {
            // cookie.setCookie('userId', res.user_id);
            // this.$router.push('/');
          })
      }
  }
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
