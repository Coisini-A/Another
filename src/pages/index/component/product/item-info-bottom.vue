<template>
  <div :class="'product-item-info-bottom-'+type">
    <div class="product-item-info-bottom-left">
      <p class="product-item-info-bottom-left">
        <strong v-text="ProductList.left1"></strong>
        <s v-text="ProductList.left2"></s>
      </p>
      <p class="product-item-info-sales" v-text="ProductList.sales"></p>
    </div>
    <i class="iconfont" v-html="ProductList.icon"></i>
  </div>
</template>

<script>
export default {
  name: "item-info-bottom",
  props: ["ProductList","type"]
};
</script>

<style lang="less" scoped>
.product-item-info-bottom-h {
  position: absolute;
  left: 40px;
  right: 40px;
  bottom: 20px;
  z-index: 1;
  flex: 1;
  align-items: center;
}
.product-item-info-bottom-v {
  position: absolute;
  left: 16px;
  right: 16px;
  bottom: 32px;
  z-index: 1;
  flex: 1;
  align-items: center;
}
.product-item-info-bottom-left {
  flex: 1;
}
strong {
  font-size: 45px;
  color: #ff734c;
  font-weight: 500;
}
i,
em,
strong {
  font-style: normal;
}
.product-item-info-prices > s {
  font-size: 0.71428571rem;
  color: #71797f;
  margin-left: 0.42857143rem;
  text-decoration: line-through;
}
.product-item-info-sales {
  color: #71797f;
  font-size: 24px;
}
.iconfont {
  font-size: 40px;
  color: black;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
}
.product-item-info-bottom .iconfont-buy {
  font-size: 1.42857143rem;
}
</style>