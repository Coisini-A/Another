<template>
  <div class="product-list">
    <div class="product-item" v-for="(item,index) in product" :key="index">
      <a href="#" class="navigation product-item-vertical">
        <div class="product-item-pic">
          <img :src="item.img" />
        </div>
        <div>
          <div class="product-item-info">
            <div class="product-item-info-tags" v-text="item.tags"></div>
            <p class="product-item-info-name text-overflow" v-text="item.text"></p>
          </div>
          <item-info-bottom :Produc1="item"></item-info-bottom>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import ItemInfoBottom from "./item-info-bottom";
export default {
  name: "product1",
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
.product-item .product-item-vertical {
    float: left;
    width: 50%;
    padding: 0 0.28571429rem;
    margin-bottom: 0.57142857rem;
}
.product-item > .navigation {
    display: block;

  overflow: hidden;
  width: 352px;
  height: 600px;
  box-shadow: 0 0.28571429rem 0.85714286rem 0 #e9ecf0;
  border-radius: 0.28571429rem;
}
.text-overflow {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>