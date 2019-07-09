<template>
<div class="background">
    <div class="login">
        <div class="login-card">
            <div class="login-card-title">Welcome to register</div>
            <el-form>
                <div class="login-message">Username:<el-input v-model="username"></el-input></div>
                <div class="login-message">Password:<el-input v-model="password"></el-input></div>
                <div class="login-message">Set the secret issue:<el-input v-model="question"></el-input></div>
                <div class="login-message">Your answer:<el-input v-model="answer"></el-input></div>
                <div class="login-message">Sex: 
                    <div class="login-message">
                        <el-select v-model="sex" placeholder="" style="width:350px">
                            <el-option label="woman" value="0"></el-option>
                            <el-option label="man" value="1"></el-option>
                        </el-select>
                    </div>
                </div>
                <div class="login-message">Birthday: 
                    <div class="login-message">
                        <el-date-picker
                            v-model="birth"
                            type="date"
                            style="width:350px"
                        >
                        </el-date-picker>
                    </div>
                </div>
                <div class="login-message">Your Phone:<el-input v-model="phone"></el-input></div>
                <div class="login-message">Your Email:<el-input v-model="mail"></el-input></div>
                <el-button type="danger" class="login-button" round>register</el-button>
            </el-form>
            <div class="login-tips">I have an account, click to <span style="cursor:pointer;" @click="toLogin" class="register">login</span></div>
        </div>
    </div>
    <div class="login-foot">
        <Footer />
    </div>
</div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'register',
  components: {
    Footer
  },
  data(){
    return {
        username:'',
        password:'',
        question:'',
        answer:'',
        sex: null,
        birth:'',
        phone:'',
        mail:''
    }
  },
  methods:{
      toLogin(){
          this.$router.push("/login")
      }
  }
}
</script>

<style scoped>
.background{
    padding-top: 100px;
}
.login{
    width: 900px;
    margin: 0 auto;
}
.login-card-title {
    text-align: center;
    font-size: 23px;
    font-weight: bold;
    color: #555555;
    margin-bottom: 30px;
}
.login-card{
    width: 350px;
    margin: 0 auto;
}
.login-button{
    width: 350px;
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
    margin-top: 30px;
}
.register{
    color: #ff5a5b;
    font-weight: bold;
}
.login-foot{
    margin-top: 80px;
    width: 100%;
}
</style>
<style>
.el-input__inner{
    border-radius: 50px !important;
}

</style>
