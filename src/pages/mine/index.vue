<template>
<div>
  <header class="headerbar">
    <div class="headerbar-left">
      <div class="iconfont">&#xe617;</div>
    </div>
    <p class="headerbar-center">个人中心</p>
    <div class="headerbar-right"></div>
  </header>
  <mymain></mymain>
</div>
</template>

<script>
import Main from "./main";
export default {
  name: "index",
  components:{
    mymain:Main,
  }
};
</script>

<style lang="less" scoped>
.headerbar{
  height: 88px;
  display: flex;
  .headerbar-left{
    width: 176px;
    height: 100%;
    >div{
      width: 88px;
      text-align: center;
      font-size:54px;
      line-height: 88px;
    }
  }
  .headerbar-center{
    width:398px;
    text-align: center;
    font-size:32px;
    line-height: 88px;
  }
  .headerbar-right{
    width: 176px;
    height: 100%;
  }
}

</style>