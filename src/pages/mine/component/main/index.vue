<template>
  <div class="main">
    <div class="notlogin">
      <p class="notlogin-hi">Hi,欢迎来到花礼网</p>
      <p class="notlogin-gologin">
        <a href="#">登录/注册</a>
      </p>
    </div>
    <userinfor></userinfor>
  </div>
</template>

<script>
import Userinfor from "./userinfor";
export default {
  name: "index",
  components:{
userinfor:Userinfor,
  },
  data(){
      return{}
  }
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 600px;
  background-image: url(./../../../../assets/img/index/bg-img/backgroundv3.png);
  background-size: 100%;
  background-repeat: no-repeat;
}
.notlogin {
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: 50px;
  height: 126px;
  width: 252px;
  .notlogin-hi {
    color: white;
    font-size: 28px;
    width: 252px;
  }
  .notlogin-gologin {
    font-size: 30px;
    margin-top: 16px;
    width: 252px;
    height: 72px;
    text-align: center;
    background-color: white;
    line-height: 72px;
    border-radius: 30px;
  }
}
</style>