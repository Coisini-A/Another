<template>
  <div class="banner">
    <div class="swiper-wrapper">
      <div v-for="(item,index) in bannerList" :key="index" class="swiper-slide">
        <img :src="item.img" alt />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper/js/swiper.min";
import "swiper/css/swiper.min.css";
export default {
  name: "index",
  data() {
    return {
      bannerList: [
        {
          img: "https://img02.hua.com/slider/18_youflower_m.jpg"
        },
        {
          img: "https://img02.hua.com/slider/17_banner_tx_m.jpg"
        },
        {
          img: "https://img02.hua.com/slider/18_birthday_m.jpg"
        },
        {
          img: "https://img02.hua.com/slider/17_banner_tx_m.jpg"
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      new Swiper(".banner", {
        autoplay: true,
        loop: true,
        Observer: true,
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  height: 360px;
  position: relative;
  .swiper-wrapper {
    width: 100%;
    height: 100%;
    /deep/.swiper-slide {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
