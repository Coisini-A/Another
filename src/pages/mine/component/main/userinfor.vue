<template>
  <div class="box">
    <div class="userinfor-con">
      <div>我的订单</div>
      <div>
        
        <span class="iconfont">全部订单&#xe705;</span>
      </div>
    </div>
    <div class="userinfor-bot">
      <div class="indent" v-for="(item,index) in UserInFor" :key="index">
        <img :src="item.img" />
        <p class="Allindent" v-text="item.text"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "userinfor",
  data() {
    return {
      UserInFor: [
        {
          img: "https://img02.hua.com/m/member/center/myinfo_pendingpay.png",
          text: "待付款"
        },
        {
          img: "https://img02.hua.com/m/member/center/myinfo_distribution.png",
          text: "今日配送"
        },
        {
          img: "https://img02.hua.com/m/member/center/myinfo_evaluation.png",
          text: "待评价"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  top: 90px;
  background-color: white;
  width: 95%;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 0.28571429rem 0.42857143rem 0 #dee2e5;
}
.userinfor-con {
  height: 88px;
  display: flex;
  justify-content: space-around;
  > div:nth-of-type(1) {
    font-size:32px;
    width: 327px;
    line-height: 88px;
  }
  > div:nth-of-type(2) {
    line-height: 88px;
    width: 327px;
    >span{
      float:right;
      font-size: 26px;
    }
  }
}
.userinfor-bot {
  display: flex;
  .indent {
    width:33%;
    font-size: 28px;
    padding-bottom: 20px;
    > img {
      width: 64px;
      height: 64px;
    }
  }
}
.userinfor-bot{
  text-align: center;
}
</style>