<template>
  <div class="product-list">
    <div class="product-item" v-for="(item,index) in ProductList" :key="index">
      <a href="#" class="product-item-horizontal">
        <div class="product-item-pic">
          <img :src="item.img" />
        </div>
        <div>
          <div class="product-item-info">
            <p class="product-item-info-name text-overflow" v-text="item.text"></p>
            <p class="product-item-info-desc text-overflow-line2" v-text="item.line2"></p>
            <div class="product-item-info-promo" v-text="item.promo"></div>
            <div class="hot" v-if="item.isHot">123</div>
          </div>
          <div class="product-item-info-bottom">
            <div class="product-item-info-bottom-left">
              <p class="product-item-info-bottom-left">
                <strong v-text="item.left1"></strong>
                <s v-text="item.left2"></s>
              </p>
              <p class="product-item-info-sales" v-text="item.sales"></p>
            </div>
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
  data() {
    return {
      ProductList: [
        {
          img: require("./../../../../assets/img/index/9010966.jpg"),
          text: "一往情深",
          line2: "精品玫瑰礼盒：19支红玫瑰，勿忘我0.1扎",
          promo: "经典爆款，年销量冠军！",
          left1: "￥239",
          left2: "￥315",
          sales: "已销售7.4万件",
          icon: "&#xe653;",
          isHot: true
        },
        {
          img: require("./../../../../assets/img/index/9010966.jpg"),
          text: "一往情深",
          line2: "精品玫瑰礼盒：19支红玫瑰，勿忘我0.1扎",
          promo: "经典爆款，年销量冠军！",
          left1: "￥239",
          left2: "￥315",
          sales: "已销售7.4万件",
          icon: "&#xe653;"
        },
        {
          img: require("./../../../../assets/img/index/9010966.jpg"),
          text: "一往情深",
          line2: "精品玫瑰礼盒：19支红玫瑰，勿忘我0.1扎",
          promo: "经典爆款，年销量冠军！",
          left1: "￥239",
          left2: "￥315",
          sales: "已销售7.4万件",
          icon: "&#xe653;"
        },
        {
          img: require("./../../../../assets/img/index/9010966.jpg"),
          text: "一往情深",
          line2: "精品玫瑰礼盒：19支红玫瑰，勿忘我0.1扎",
          promo: "经典爆款，年销量冠军！",
          left1: "￥239",
          left2: "￥315",
          sales: "已销售7.4万件",
          icon: "&#xe653;"
        },
        {
          img: require("./../../../../assets/img/index/9010966.jpg"),
          text: "一往情深",
          line2: "精品玫瑰礼盒：19支红玫瑰，勿忘我0.1扎",
          promo: "经典爆款，年销量冠军！",
          left1: "￥239",
          left2: "￥315",
          sales: "已销售7.4万件",
          icon: "&#xe653;"
        },
        {
          img: require("./../../../../assets/img/index/9010966.jpg"),
          text: "一往情深",
          line2: "精品玫瑰礼盒：19支红玫瑰，勿忘我0.1扎",
          promo: "经典爆款，年销量冠军！",
          left1: "￥239",
          left2: "￥315",
          sales: "已销售7.4万件",
          icon: "&#xe653;"
        },
        {
          img: require("./../../../../assets/img/index/9010966.jpg"),
          text: "一往情深",
          line2: "精品玫瑰礼盒：19支红玫瑰，勿忘我0.1扎",
          promo: "经典爆款，年销量冠军！",
          left1: "￥239",
          left2: "￥315",
          sales: "已销售7.4万件",
          icon: "&#xe653;"
        }
      ]
    };
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
.product-item-info-bottom {
  position: absolute;
  left: 40px;
  right: 40px;
  bottom: 20px;
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