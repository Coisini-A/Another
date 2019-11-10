<template>
  <div>
    <h1 class="product-title" v-text="title"></h1>
    <product-item :product="product"></product-item>
    <p class="more">查看更多</p>
  </div>
</template>

<script>
import ProductItem from "./product-item";
export default {
  name: "index",
  components: {
    "product-item": ProductItem
  },
  props: {
    product: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
div {
  background: #fff;
  padding-bottom: 40px;
  margin-bottom: 16px;
}
.product-title {
  font-size: 32px;
  padding: 30px 0;
  text-align: center;
  font-weight: normal;
}
.more {
  border: 1px solid black;
  border-radius: 6px;
  width: 192px;
  height: 52px;
  text-align: center;
  line-height: 52px;
  margin: 50px auto 0;
}
</style>