<template>
    <div class="about-us">
        <div>
            <Header :ifLogin="this.ifLogin" />
        </div>
        <div class="about-us-title">
            <span class="about-us-title-span">About Us</span>
        </div>
        <hr width=100% size=6 color=#B0B0B0 style="filter:progid:DXImageTransform.Microsoft.Glow(color=#B0B0B0); margin-top: 50px;"> 
        <div class="about-us-content">
            <div class="quq-img">
                <img src="../assets/quq.png" height="300px" width="300px">
            </div>
            <div class="quq-text">
                <p style="text-align: center;">
                    <span style="font-size: 40px; font-weight: bold;">生活不易，猪猪叹气</span>
                </p>
                <hr width=70% size=3 color=#B0B0B0 style="filter:progid:DXImageTransform.Microsoft.Glow(color=#B0B0B0); margin: 0 auto; margin-top: 20px;"> 
                <p style="text-align: center; font-size: 20px;">
                    <a>:等了好久终于等到今天～</a>
                    <br>
                    <a>:梦了好久终于把梦实现～</a>
                    <br>
                    <a style="font-weight: bold;">包子爸爸告诉我这个页面可以放飞自我，发展个性，发挥特长，那就骚一点吧</a>
                    <br>
                    <br>
                    <a>经过四只猪猪和一个梅西的努力之下，我们终于用</a>
                    <a style="font-weight: bold;">Vue.js</a>和
                    <a style="font-weight: bold;">Java Servlet</a><a>完成了这个项目。</a>
                </p>
            </div>
        </div>
        <div class="about-us-cxk">
            <div class="cxk-text">
                <p style="text-align: center;">
                    <span style="font-size: 40px; font-weight: bold;">我们来盘一盘梗吧</span>
                </p>
                <hr width=70% size=3 color=#B0B0B0 style="filter:progid:DXImageTransform.Microsoft.Glow(color=#B0B0B0); margin: 0 auto; margin-top: 20px;"> 
                <p style="text-align: center; font-size: 20px;">
                    <a style="font-weight: bold;">包欣雨一节课能被cue300次哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</a>
                    <br>
                    <a style="font-weight: bold;">"但是包欣雨肯定不会这么写"</a>
                    <br>
                    <a style="font-weight: bold;">"一会儿可以让包欣雨来给你讲一下"</a>
                    <br>
                    <a style="font-weight: bold;">"包欣雨是我的老师"</a>
                    <br><br><br>
                    <br>
                    <a style="font-weight: bold;">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</a>
                </p>
            </div>
            <div class="cxk-img">
                <img src="../assets/cxk.jpg" height="300px" width="300px;">
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../components/Header"
export default {
    name: "AboutUs",
    data(){
        return{
            ifLogin: false
        }
    },
    components:{
        Header
    },
    mounted(){
        if(window.localStorage.getItem("userID")){
            this.ifLogin = true
        }
    }
}
</script>

<style>
.about-us{
    margin: 0 auto;
    width: 1400px;
    height: 1000px;
    background-color: #fdfdfd;
}
.about-us-title{
    margin: 0 auto;
    margin-top: 100px;
    width: 1000px;
    height: 130px;
    border-radius: 20px;
    background-color:  #ff5a5f;
    color: white;
    text-align: center;
    box-shadow: 0 20px 40px rgba(0, 0, 0, .12), 0 0 60px rgba(0, 0, 0, .04);
}
.about-us-title-span{
    font-size: 100px;
    line-height: 130px;
}
.about-us-content{
    width: 1400px;
    margin: 0 auto;
    margin-top: 30px;
    background-color: #f2f2f2;
    box-shadow: 0 20px 40px rgba(0, 0, 0, .12), 0 0 60px rgba(0, 0, 0, .04);
    border-radius: 20px;    
    vertical-align: top;
    vertical-align: bottom;
}
.quq-img{
    display: inline-block;
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
}
.quq-text{
    display: inline-block;
    width: 1000px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, .12), 0 0 60px rgba(0, 0, 0, .04);
    border-radius: 20px;    
    margin-left: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
    vertical-align: top;
    vertical-align: bottom;
    height: 300px;
}
.about-us-cxk{
    width: 1400px;
    margin: 0 auto;
    margin-top: 30px;
    background-color: #f2f2f2;
    box-shadow: 0 20px 40px rgba(0, 0, 0, .12), 0 0 60px rgba(0, 0, 0, .04);
    border-radius: 20px;    
    vertical-align: top;
    vertical-align: bottom;
}
.cxk-img{
    display: inline-block;
    margin-top: 20px;
    margin-left: 50px;
    margin-bottom: 20px;
}
.cxk-text{
    display: inline-block;
    width: 1000px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, .12), 0 0 60px rgba(0, 0, 0, .04);
    border-radius: 20px;    
    margin-left: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
    vertical-align: top;
    vertical-align: bottom;
    height: 300px;
}
</style>
