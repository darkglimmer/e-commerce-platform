<template>
<div class="background">
    <div>
        <Header :ifLogin="false" />
    </div>
    <div class="login">
        <div class="login-card">
            <div class="login-card-title">Welcome to register</div>
            <el-form>
                <div class="login-message">用户名:<el-input v-model="name"></el-input></div>
                <div class="login-message">密码:<el-input v-model="passwordhash"></el-input></div>
                <div class="login-message">设置密保问题:<el-input v-model="question"></el-input></div>
                <div class="login-message">你的回答:<el-input v-model="answer"></el-input></div>
                <div class="login-message">性别: 
                    <div class="login-message">
                        <el-select v-model="sex" placeholder="" style="width:350px">
                            <el-option label="女" value="false"></el-option>
                            <el-option label="男" value="true"></el-option>
                        </el-select>
                    </div>
                </div>
                <div class="login-message">生日: 
                    <div class="login-message">
                        <el-date-picker
                            v-model="birth"
                            type="date"
                            style="width:350px"
                        >
                        </el-date-picker>
                    </div>
                </div>
                <div class="login-message">手机:<el-input v-model="phone"></el-input></div>
                <div class="login-message">邮箱:<el-input v-model="mail"></el-input></div>
                <el-button type="danger" class="login-button" round @click="register">注册</el-button>
            </el-form>
            <div class="login-tips">已有账号，立刻 <span style="cursor:pointer;" @click="toLogin" class="register">登录</span></div>
        </div>
    </div>
    <div class="login-foot">
        <Footer :ifLogo="true" />
    </div>
</div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
import { constants } from 'crypto';

export default {
  name: 'register',
  components: {
    Footer,
    Header
  },
  data(){
    return {
        name:'',
        passwordhash:'',
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
      },
      register(){
          const data = {
            "id": 111,
            "name": this.name,
            "passwordhash": this.passwordhash,
            "question": this.question,
            "answer": this.answer,
            "sex": this.sex,
            "birth": this.birth,
            "phone": this.phone,
            "mail": this.mail
          }
           fetch(`/api/login?action=registed`, {
                method: 'POST',
                headers: {
                "Content-Type":"appliation/json",
                },
                body: JSON.stringify(data)
            }).then(res => {
                if (res.ok){
                    window.alert('注册成功！')
                    this.$router.push("/login")
                }else{
                    window.alert('注册失败！')
                }
            })
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
