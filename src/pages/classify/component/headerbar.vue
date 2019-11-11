<template>
  <div class="headerbar">
    <div class="headerbar-content">
      <div class="iconfont">&#xe61e;</div>
      <a href="#" class="headerbar-content-center">搜索鲜花、蛋糕、礼品</a>
    </div>
    <!-- <hr /> -->
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>

<style lang="less" scoped>
.headerbar {
  border-bottom: 4px solid #F1F3F6;
  .headerbar-content {
    display: flex;
    background-color: #f3f5f7;
    border-radius: 40px;
    padding-left: 16px;
    margin: 8px 24px;
    .iconfont {
      width: 72px;
      height: 72px;
      line-height: 72px;
      text-align: center;
      font-size: 40px;
      color: #b0b3b6;
    }
    .headerbar-content-center {
      display: inline-block;
      width: 582px;
      flex: 1;
      height: 72px;
      padding-right: 32px;
      line-height: 72px;
      color: #71797f;
      font-size: 28px;
    }
  }
}
</style>