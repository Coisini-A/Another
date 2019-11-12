<template>
  <div class="linkbox">
      <linkbox-list v-for="(item,index) in linkboxList" :key="index" :linkboxItem="item"></linkbox-list>
  </div>
</template>

<script>
import LinkBoxList from "./linkbox-list";
export default {
  name: "index",
  components: {
      "linkbox-list":LinkBoxList,
  },
  props: {
    linkboxList: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
</style>