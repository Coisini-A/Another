<template>
  <div class="linkbox-list">
    <div class="linkbox-item" v-for="(item,index) in linkboxItem" :key="index">
      <div class="iconfont" :icon="item.icon"></div>
      <p class="txt" v-text="item.text"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  props: {
    linkboxItem: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
</style>