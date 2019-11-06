<template>
  <div class="honor-container">
    <div v-for="(item,index) in honorList" :key="index" class="honor-item">
      <span class="iconfont" v-html="item.icon"></span>
      <span v-text="item.text"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "honor",
  data() {
    return {
      honorList: [
        {
          icon: "&#xe632;",
          text: "认证龙头企业"
        },
        {
          icon: "&#xe632;",
          text: "14年品牌"
        },
        {
          icon: "&#xe632;",
          text: "3小时送花"
        },
        {
          icon: "&#xe632;",
          text: "最近12313好评"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.honor-container {
  font-size: 24px;
  height: 72px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>