<template>
  <div class="procate-container">
    <div class="procate-item" v-for="(item,index) in procateList" :key="index">
      <img :src="item.img" />
      <span class="contet" v-text="item.text"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "procate",
  data() {
    return {
      procateList: [
        {
          img: require("./../../../assets/img/index/m_home_category_flower.png"),
          text: "鲜花"
        },
        {
          img: require("./../../../assets/img/index/m_home_category_ppf.png"),
          text: "永生花"
        },
        {
          img: require("./../../../assets/img/index/m_home_category_cake.png"),
          text: "蛋糕"
        },
        {
          img: require("./../../../assets/img/index/m_home_category_gift.png"),
          text: "礼物"
        },
        {
          img: require("./../../../assets/img/index/m_home_category_chocolate.png"),
          text: "巧克力"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.procate-container {
  background-color: white;
  display: flex;
  justify-content: space-around;
  height: 136px;
  padding: 16px 0;
  .procate-item {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      height: 72px;
      width: 72px;
    }
  }
}
</style>