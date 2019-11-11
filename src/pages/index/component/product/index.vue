<template>
  <div>
    <product-h
      v-for="(item,index) in productListH"
      :key="'h'+index"
      :title="item.title"
      :product="item.product"
    ></product-h>
    <product-v
      v-for="(item,index) in productListV"
      :key="'v'+index"
      :title="item.title"
      :product="item.product"
    ></product-v>
  </div>
</template>
    
<script>
import ProductH from "./product-h";
import ProductV from "./product-v";
export default {
  name: "index",
  components: {
    "product-h": ProductH,
    "product-v": ProductV
  },
  data() {
    return {
      productListV: [
        {
          title: "永生花推荐",
          product: [
            {
              img: require("./../../../../assets/img/index/1073264.jpg"),
              text: "一鹿(路)有你永生花小...",
              left1: "￥239",
              left2: "￥315",
              sales: "已销售7.4万件",
              icon: "&#xe653;",
              tags:['生日推荐']
            },
            {
              img: require("./../../../../assets/img/index/1073185.jpg"),
              text: "我如此爱你—口红款999...",
              left1: "￥588",
              left2: "￥788",
              sales: "已销售6306件",
              icon: "&#xe653;",
              tags:['畅销']
            },
            {
              img: require("./../../../../assets/img/index/1073033.jpg"),
              text: "一生一世~厄瓜多尔进口...",
              left1: "￥198",
              left2: "￥259",
              sales: "已销售1.2万件",
              icon: "&#xe653;",
              tags:['爱的承诺']
            },
            {
              img: require("./../../../../assets/img/index/1073263.jpg"),
              text: "永生花满月艺术台灯/朦...",
              left1: "￥398",
              left2: "￥498",
              sales: "已销售50件",
              icon: "&#xe653;",
              tags:['创意新品']
            }
          ]
        },
        {
          title: "蛋糕推荐",
          product: [
            {
              img: require("./../../../../assets/img/index/5602016.jpg"),
              text: "四重奏蛋糕（约2磅）~方...",
              left1: "￥228",
              left2: "￥296",
              sales: "已销售2247件",
              icon: "&#xe653;",
              tags:['生日推荐']
            },
            {
              img: require("./../../../../assets/img/index/9092114.jpg"),
              text: "真爱+生日蛋糕B款（8寸）红玫瑰9枝，石竹...",
              left1: "￥268",
              left2: "￥298",
              sales: "已销售975件",
              icon: "&#xe653;",
            },
            {
              img: require("./../../../../assets/img/index/5010023.jpg"),
              text: "生日蛋糕A8寸（2磅）心形水果鲜奶蛋糕",
              left1: "￥168",
              left2: "￥178",
              sales: "已销售2.1万件",
              icon: "&#xe653;",
              // tags:['生日推荐']
            },
            {
              img: require("./../../../../assets/img/index/5602045.jpg"),
              text: "浪漫果纷蛋糕（约2磅），水果蛋糕",
              left1: "￥218",
              left2: "￥336",
              sales: "已销售2156件",
              icon: "&#xe653;",
              // tags:['生日推荐']
            }
          ]
        },
        {
          title: "礼物推荐",
          product: [
            {
              img: require("./../../../../assets/img/index/1060038.jpg"),
              text: "一路上有你/三色玫瑰 5年不凋谢...",
              left1: "￥359",
              left2: "￥569",
              sales: "已销售1934件",
              icon: "&#xe653;",
              // tags:['生日推荐']
            },
            {
              img: require("./../../../../assets/img/index/1073247.jpg"),
              text: "花好月圆永生花台灯 精...",
              left1: "￥298",
              left2: "￥398",
              sales: "已销售744件",
              icon: "&#xe653;",
              tags:['热销单品']
            },
            {
              img: require("./../../../../assets/img/index/1077029.jpg"),
              text: "猫王 原子唱机B612 蓝...",
              left1: "￥298",
              left2: "￥399",
              sales: "已销售82件",
              icon: "&#xe653;",
              tags:['温馨首选']
            },
            {
              img: require("./../../../../assets/img/index/1076062.jpg"),
              text: "星期耳钉礼盒 s925银...",
              left1: "￥198",
              left2: "￥298",
              sales: "已销售1152件",
              icon: "&#xe653;",
              tags:['火热畅销款']
            }
          ]
        },
        {
          title: "巧克力推荐",
          product: [
            {
              img: require("./../../../../assets/img/index/3010004.jpg"),
              text: "费列罗巧克力300克·意大利品牌巧克力",
              left1: "￥138",
              left2: "￥168",
              sales: "已销售7064件",
              icon: "&#xe653;"
            },
            {
              img: require("./../../../../assets/img/index/1207010.jpg"),
              text: "巧克巧蔻定制16粒装手工夹心巧克力·手工夹心巧克力",
              left1: "￥288",
              left2: "￥388",
              sales: "已销售2412件",
              icon: "&#xe653;"
            },
            {
              img: require("./../../../../assets/img/index/1204042.jpg"),
              text: "Felchlin妃亭18粒装巧克力礼盒·德国进口松露夹心巧克力",
              left1: "￥348",
              left2: "￥348",
              sales: "已销售300件",
              icon: "&#xe653;"
            },
            {
              img: require("./../../../../assets/img/index/1201003.jpg"),
              text: "奢悦之美巧克力礼盒·夹心巧克力",
              left1: "￥158",
              left2: "￥358",
              sales: "已销售4792件",
              icon: "&#xe653;"
            }
          ]
        }
      ],
      productListH: [
        {
          title: "送恋人/爱情鲜花",
          product: [
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
          ]
        },
        {
          title: "送长辈鲜花",
          product: [
            {
              img: require("./../../../../assets/img/index/9012201.jpg"),
              text: "馨情无限",
              line2: "戴安娜玫瑰11枝，红色...",
              promo: "高端花盒设计",
              left1: "￥238",
              left2: "￥312",
              sales: "已销售5964件",
              icon: "&#xe653;"
            },
            {
              img: require("./../../../../assets/img/index/9012440.jpg"),
              text: "星河璀璨",
              line2: "香槟玫瑰9枝、蓝绣球、...",
              promo: "倾情设计，为爱相守",
              left1: "￥289",
              left2: "￥376",
              sales: "已销售647件",
              icon: "&#xe653;"
            },
            {
              img: require("./../../../../assets/img/index/9012332.jpg"),
              text: "留住好时光",
              line2: "粉绣球1枝粉雪山玫瑰...",
              promo: "精选昆明A级花材",
              left1: "￥239",
              left2: "￥306",
              sales: "已销售8356件",
              icon: "&#xe653;"
            },
            {
              img: require("./../../../../assets/img/index/9012092.jpg"),
              text: "母爱",
              line2: "紫红色康乃馨9枝，粉色...",
              promo: "红粉搭配，花色明艳",
              left1: "￥172",
              left2: "￥228",
              sales: "已销售1.4万件",
              icon: "&#xe653;"
            },
            {
              img: require("./../../../../assets/img/index/9012441.jpg"),
              text: "语笑嫣然",
              line2: "粉佳人玫瑰9枝，粉色小...",
              promo: "温柔相伴，笑容常在",
              left1: "￥198",
              left2: "￥256",
              sales: "已销售970件",
              icon: "&#xe653;",
              isHot: true
            },
            {
              img: require("./../../../../assets/img/index/9012201.jpg"),
               text: "馨情无限",
              line2: "戴安娜玫瑰11枝，红色...",
              promo: "高端花盒设计",
              left1: "￥238",
              left2: "￥312",
              sales: "已销售5964件",
              icon: "&#xe653;",
              // isHot: true
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>

</style>