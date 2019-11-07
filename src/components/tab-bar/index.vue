<template>
  <div class="tab-bar">
    <router-link class="tab-bar-item" v-for="(item,index) in tabBar" :key="index" tag="div" :to="{name: item.path}">
      <span class="iconfont" v-html="item.icon"></span>
      <span v-text="item.text"></span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "tab-bar",
  data() {
    return {
      tabBar: [
        {
          icon: "&#xe633;",
          text: "首页",
          path:'Index'
        },
        {
          icon: "&#xe684;",
          text: "分类",
          path: 'Classify'
        },
        {
          icon: "&#xe611;",
          text: "购物车",
          path: 'Carts'
        },
        {
          icon: "&#xe63f;",
          text: "我的",
          path: 'Mine'
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.tab-bar {
  width: 100%;
  height: 84px;
  bottom: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  .focus {
    span {
      color: #FF734C;
    }
  }
  .tab-bar-item {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > span:nth-of-type(1) {
      font-size: 36px;
      margin-bottom: 10px;
    }
  }
}
</style>
