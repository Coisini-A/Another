<template>
  <div class="product-list">
    <div class="product-item" v-for="(item,index) in product" :key="index">
      <a href="#" class="product-item-horizontal">
        <div class="product-item-pic">
          <img :src="item.img" />
        </div>
        <div>
          <div class="product-item-info">
            <p class="product-item-info-name text-overflow" v-text="item.text"></p>
            <p class="product-item-info-desc text-overflow-line2" v-text="item.line2"></p>
            <div class="hot" v-if="item.isHot">畅销爆款</div>
            <div class="product-item-info-promo" v-text="item.promo"></div>
          </div>
          <item-info-bottom :ProductList="item"></item-info-bottom>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import ItemInfoBottom from "./item-info-bottom";
export default {
  name: "product-list",
  components: {
    "item-info-bottom": ItemInfoBottom
  },
  props: {
    product: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.product-list {
  background: #fff;
  padding: 0 16px;
}
.product-item {
  margin-top: 24px;
}
.product-item-horizontal {
  height: 385px;
  display: flex;
  overflow: hidden;
  box-shadow: 0 0.28571429rem 0.85714286rem 0 #e0e5eb;
  border-radius: 0.28571429rem;
  > div:nth-of-type(2) {
    flex: 1;
    padding: 0 40px;
    position: relative;
  }
}
.navigation {
  display: block;
}
a {
  text-decoration: none;
  color: inherit;
  outline: none;
}
.product-item-pic {
  width: 352px;
}
img {
  width: 100%;
  vertical-align: middle;
}
.product-item-horizontal > .product-item-info {
  flex: 1;
  position: relative;
}
.text-overflow {
  overflow: hidden;
  font-size: 30px;
  padding: 36px 0 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text-overflow-line2 {
  overflow: hidden;
  text-overflow: ellipsis;
}
.product-item-info-promo {
  margin-top: 30px;
  padding: 20px 0;
  color: black;
  border-top: 1px solid #e9ecf0;
  border-bottom: 1px solid #e9ecf0;
}
.hot {
  width: 120px;
  background-color: #ff734c;
  color: white;
  text-align: center;
  border-radius: 20px;
}
</style>