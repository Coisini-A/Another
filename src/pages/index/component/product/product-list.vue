<template>
    <div class="product-list">
        <div class="product-item product-item-horizontal" v-for="(item,index) in ProductList" :key="index">
            <a href="" class="product-item product-item-horizontal">
                <div class="product-item-pic">
                    <img :scr="item.img"/>
                </div>
                <div class="product-item-info">
                    <p class="product-item-info-name text-overflow" v-text="item.text"></p>
                    <p class="product-item-info-desc text-overflow-line2" v-text="item.line2"></p>
                    <div class="product-item-info-promo" v-text="item.promo"></div>
                </div>
                <div class="product-item-info-bottom">
                    <div class="product-item-info-bottom-left">
                        <p class="product-item-info-bottom-left">
                            <strong v-text="item.left1"></strong>
                            <s v-text="item.left2"></s>
                        </p>
                        <p class="product-item-info-sales" v-text="item.sales"></p>
                    </div>
                    <div class="product-item-info-bottom-right">
                        <i class="iconfont" v-html="item.icon"></i>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: "product-list",
  data(){
      return{
          ProductList:[
              {
                img: require("@/assets/img/index/9010966.jpg"),
                text:"一往情深",
                line2:"精品玫瑰礼盒：19支红玫瑰，勿忘我0.1扎",
                promo:"经典爆款，年销量冠军！",
                left1:"￥239",
                left2:"￥315",
                sales:"已销售7.4万件",
                icon: "&#xe653;"
              }
          ]
      }
  }
};
</script>

<style lang="less" scoped>
    .product-item.product-item-horizontal > .navigation {
        display: flex;
        overflow: hidden;
        box-shadow: 0 0.28571429rem 0.85714286rem 0 #e9ecf0;
        border-radius: 0.28571429rem;
    }
    .navigation {
        display: block;
    }
    a {
        text-decoration: none;
        color: inherit;
        outline: none;
    }
    .product-item.product-item-horizontal .product-item-pic {
        width: 12.57142857rem;
        height: 380px;
    }
    img {
        width: 100%;
        vertical-align: middle;
        height: 380px;
    }
    .product-item.product-item-horizontal .product-item-info {
        flex: 1;
        max-width: 13.07142857rem;
        padding: 0 1.42857143rem;
        position: relative;
    }
    .product-item.product-item-horizontal .product-item-info-name {
        // padding-top: 1.28571429rem;
         font-weight: 300;
    }
    .text-overflow {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .product-item-info-desc {
        font-weight: 300;
    }
    .text-overflow-line2 {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .product-item.product-item-horizontal .product-item-info-promo {
        margin-top: 0.85714286rem;
        padding: 0.71428571rem 0;
        border-top: 1px solid #E9ECF0;
        border-bottom: 1px solid #E9ECF0;
        font-weight: 500;
    }
    .product-item.product-item-horizontal .product-item-info-bottom {
        position: absolute;
        left: 1.42857143rem;
        right: 1.42857143rem;
        bottom: 1.14285714rem;
        z-index: 1;
        display: flex;
        align-items: center;
    }
    .product-item-info-bottom-left {
        flex: 1;
    }
    .product-item-info-prices > strong {
        font-size: 1.28571429rem;
        color: #FF734C;
        font-weight: 500;
    }
    i, em, strong {
        font-style: normal;
    }
    .product-item-info-prices > s {
        font-size: 0.71428571rem;
        color: #71797F;
        margin-left: 0.42857143rem;
        text-decoration: line-through;
    }
    .product-item-info-sales {
        color: #71797F;
    }
    .product-item-info-bottom-right {
        text-align: right;
    }
    .product-item-info-bottom .iconfont-buy {
        font-size: 1.42857143rem;
    }
</style>