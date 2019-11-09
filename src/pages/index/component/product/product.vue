<template>
  <div>
      <h1 class="product-title">送恋人/爱情鲜花</h1>
      <product-list></product-list>
      <p class="more">查看更多</p>
  </div>
</template>

<script>
import ProductList from "./product-list";
export default {
  name: "product",
  components:{
    "product-list":ProductList
  },
  data(){
    return{};
  }
};
</script>

<style lang="less" scoped>
.product-title {
    font-size:32px;
    padding:30px 0;
    text-align: center;
    font-weight: normal;
}
.more{
  border:1px solid black;
  // border-radius: 2px;
  width: 192px;
  height: 52px;
  text-align: center;
  line-height: 52px;
  margin:50px auto;
}
</style>