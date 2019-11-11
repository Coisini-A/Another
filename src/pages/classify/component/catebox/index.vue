<template>
  <div>
    <catebox-left @classifyChange="classifyChange" :left="left"></catebox-left>
    <catebox-right :classifyList="currentRight"></catebox-right>
  </div>
</template>

<script>
import CateBoxLeft from "./catebox-left";
import CateBoxRight from "./catebox-right";
export default {
  name: "index",
  components: {
    "catebox-left": CateBoxLeft,
    "catebox-right": CateBoxRight
  },
  data() {
    return {
      currentRight: {},
      left: [
        {
          text: "热门推荐"
        },
        {
          text: "鲜花"
        },
        {
          text: "永生花"
        },
        {
          text: "蛋糕"
        },
        {
          text: "特色礼品"
        },
        {
          text: "礼盒"
        },
        {
          text: "绿植花卉"
        }
      ],
      right: [
        {
          adImg: "https://img02.hua.com/m/category/Classification/flower.png?v",
          productClassIfyChunk: [
            {
              title: "对象",
              desc: "鲜花排行榜",
              descIcon: "",
              productClassIfy: [
                {
                  img:
                    "https://img02.hua.com/m/category/Classification/m_category_flowers_use_All.png",
                  text: "全部"
                },
                {
                  img:
                    "https://img02.hua.com/m/category/Classification/m_category_flowers_use_1-2Girlfriend.png",
                  text: "送女友鲜花"
                },
                {
                  img:
                    "https://img02.hua.com/m/category/Classification/m_category_flowers_use_Boyfriend.png",
                  text: "送男性鲜花"
                },
                {
                  img:
                    "https://img02.hua.com/m/category/Classification/m_category_flowers_use_Elder.png",
                  text: "送长辈鲜花"
                },
                {
                  img:
                    "https://img02.hua.com/m/category/Classification/m_category_flowers_use_Friend.png",
                  text: "送朋友鲜花"
                }
              ]
            },
            {
              title: "场合",
              productClassIfy: [
                {
                  img:
                    "https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Love.png",
                  text: "爱情鲜花"
                },
                {
                  img:
                    "https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Birthday.png",
                  text: "生日鲜花"
                },
                {
                  img:
                    "https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Visit.png",
                  text: "探望慰问"
                },
                {
                  img:
                    "https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Business.png",
                  text: "商务鲜花"
                },
                {
                  img:
                    "https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Congratulate.png",
                  text: "祝福庆贺"
                },
                {
                  img:
                    "https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Wedding.png",
                  text: "婚庆鲜花"
                },
                {
                  img:
                    "https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Apologize.png",
                  text: "道歉鲜花"
                },
                {
                  img:
                    "https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Grief.png",
                  text: "哀思鲜花"
                },
                {
                  img:
                    "https://img02.hua.com/m/category/Classification/m_category_flowers_occ_gat.png",
                  text: "港澳台鲜花"
                }
              ]
            },
            {
              title: "花材",
              productClassIfy: [
                {
                  img: "https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Rose.png",
                  text: "玫瑰"
                },
                {
                  img: "https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Carnation.png",
                  text: "康乃馨"
                },
                {
                  img: "https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Sunflower.png",
                  text: "向日葵"
                },
                {
                  img: "https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Lily.png",
                  text: "百合"
                },
                {
                  img: "https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Hydrangea.png",
                  text: "绣球"
                },
                {
                  img: "https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Tulips.png",
                  text: "郁金香"
                },
                {
                  img: "https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Gerbera.png",
                  text: "扶郎/太阳花"
                },
                {
                  img: "https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Calla.png",
                  text: "马蹄莲"
                }
              ]
            },
            {
              title: "玫瑰颜色",
              productClassIfy: [
                {
                  img: "https://img02.hua.com/m/category/Classification/m_category_flowers_colour_Red.png?v",
                  text: "红玫瑰"
                },
                {
                  img: "https://img02.hua.com/m/category/Classification/m_category_flowers_colour_Pink.png?v",
                  text: "粉玫瑰"
                },
                {
                  img: "https://img02.hua.com/m/category/Classification/m_category_flowers_colour_White.png?v",
                  text: "白玫瑰"
                },
                {
                  img: "https://img02.hua.com/m/category/Classification/m_category_flowers_colour_Purple.png?v",
                  text: "紫玫瑰"
                },
                {
                  img: "https://img02.hua.com/m/category/Classification/m_category_flowers_colour_Yellow.png?v",
                  text: "黄玫瑰"
                },
                {
                  img: "https://img02.hua.com/m/category/Classification/m_category_flowers_colour_Champagne.png?v",
                  text: "香槟色"
                },
                ]
            },
            {
              title: "类别",
              productClassIfy: [
                {
                  img: "https://img02.hua.com/m/category/Classification/m_category_flowers_kind_bouquet.png",
                  text: "花束"
                },
                {
                  img: "https://img02.hua.com/m/category/Classification/m_category_flowers_kind_Flowerbox.png",
                  text: "花盒"
                },
                {
                  img: "https://img02.hua.com/m/category/Classification/m_category_flowers_kind_flowerbasket.png",
                  text: "桌面花篮"
                },
                {
                  img: "https://img02.hua.com/m/category/Classification/m_category_flowers_kind_bottle.png",
                  text: "瓶插花"
                },
                {
                  img: "https://img02.hua.com/m/category/Classification/m_category_flowers_kind_Fruitbasket.png",
                  text: "果篮"
                },
                {
                  img: "https://img02.hua.com/m/category/Classification/m_category_flowers_kind_business.png",
                  text: "开业花篮"
                },
                ]
            }
          ]
        }
      ]
    };
  },
  created() {
    this.currentRight = this.right[0];
  },
  methods: {
    classifyChange(index) {
      this.currentRight = this.right[index];
      console.log(this.currentRight);
    }
  }
};
</script>

<style lang="less" scoped>
div {
   height: 100%;
  overflow: hidden;
}
</style>