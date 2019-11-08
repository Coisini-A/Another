<template>
  <div>
      <h1 class="product-title">送恋人/爱情鲜花</h1>
      <product-list></product-list>
  </div>
</template>

<script>
import ProductList from "./product-list";
export default {
  name: "index",
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
</style>