<template>
  <div>
    <product v-for="(item,index) in productList" :key="index" :product="item"></product>
  </div>
</template>
    
<script>
import Product from "./product";
export default {
  name: "index",
  components: {
    product: Product
  },
  data() {
    return {
      productList: [
        [
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
            img: require("./../../../../assets/img/index/9012154.jpg"),
            text: "甜美公主",
            line2: "白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔梗5枝",
            promo: "甜美设计 清新典雅",
            left1: "￥368",
            left2: "￥485",
            sales: "已销售2.2万件",
            icon: "&#xe653;"
          },
          {
            img: require("./../../../../assets/img/index/9012177.jpg"),
            text: "不变的承诺",
            line2: "99枝红玫瑰",
            promo: "经典99枝，鼎力推荐！",
            left1: "￥539",
            left2: "￥766",
            sales: "已销售6.1万件",
            icon: "&#xe653;"
          },
          {
            img: require("./../../../../assets/img/index/9012437.jpg"),
            text: "粉雪佳人",
            line2: "戴安娜粉玫瑰11枝，白色香水百合2枝，白色洋桔...",
            promo: "清新典雅，至臻设计",
            left1: "￥219",
            left2: "￥282",
            sales: "已销售1270件",
            icon: "&#xe653;"
          },
          {
            img: require("./../../../../assets/img/index/9010011.jpg"),
            text: "一心一意",
            line2: "玫瑰11枝，粉色勿忘我0...",
            promo: "经典款式，精选爆款",
            left1: "￥139",
            left2: "￥189",
            sales: "已销售11.0万件",
            icon: "&#xe653;",
            isHot: true
          },
          {
            img: require("./../../../../assets/img/index/9012009.jpg"),
            text: "忘情巴黎",
            line2: "33枝红玫瑰",
            promo: "唯美浪漫 女神挚爱",
            left1: "￥298",
            left2: "￥382",
            sales: "已销售6.4万件",
            icon: "&#xe653;",
            isHot: true
          },
          {
            img: require("./../../../../assets/img/index/9010855.jpg"),
            text: "用心爱你",
            line2: "99枝：33枝戴安娜+66枝红玫瑰",
            promo: "与你相守，直到天荒地老",
            left1: "￥520",
            left2: "￥869",
            sales: "已销售3.3万件",
            icon: "&#xe653;"
          },
          {
            img: require("./../../../../assets/img/index/9012089.jpg"),
            text: "爱在心头",
            line2: "玫瑰50枝：戴安娜粉玫瑰19枝，红玫瑰31枝",
            promo: "双色搭配，赏心悦目",
            left1: "￥311",
            left2: "￥479",
            sales: "已销售1.9万件",
            icon: "&#xe653;"
          }
        ],
        [
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
            img: require("./../../../../assets/img/index/9012154.jpg"),
            text: "甜美公主",
            line2: "白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔梗5枝",
            promo: "甜美设计 清新典雅",
            left1: "￥368",
            left2: "￥485",
            sales: "已销售2.2万件",
            icon: "&#xe653;"
          },
          {
            img: require("./../../../../assets/img/index/9012177.jpg"),
            text: "不变的承诺",
            line2: "99枝红玫瑰",
            promo: "经典99枝，鼎力推荐！",
            left1: "￥539",
            left2: "￥766",
            sales: "已销售6.1万件",
            icon: "&#xe653;"
          },
          {
            img: require("./../../../../assets/img/index/9012437.jpg"),
            text: "粉雪佳人",
            line2: "戴安娜粉玫瑰11枝，白色香水百合2枝，白色洋桔...",
            promo: "清新典雅，至臻设计",
            left1: "￥219",
            left2: "￥282",
            sales: "已销售1270件",
            icon: "&#xe653;"
          },
          {
            img: require("./../../../../assets/img/index/9010011.jpg"),
            text: "一心一意",
            line2: "玫瑰11枝，粉色勿忘我0...",
            promo: "经典款式，精选爆款",
            left1: "￥139",
            left2: "￥189",
            sales: "已销售11.0万件",
            icon: "&#xe653;",
            isHot: true
          },
          {
            img: require("./../../../../assets/img/index/9012009.jpg"),
            text: "忘情巴黎",
            line2: "33枝红玫瑰",
            promo: "唯美浪漫 女神挚爱",
            left1: "￥298",
            left2: "￥382",
            sales: "已销售6.4万件",
            icon: "&#xe653;",
            isHot: true
          }
        ]
      ]
    };
  }
};
</script>

<style lang="less" scoped>
</style>