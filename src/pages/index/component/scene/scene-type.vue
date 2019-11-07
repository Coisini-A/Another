<template>
  <div class="scene-list">
    <div class="scene-item scene-item-radius" v-for="(item,index) in sceneList" :key="index">
      <a href="#" class="navigation">
        <span class="scene-item-use-title" v-text="item.text"></span>
        <img :src="item.img" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "scene-type",
  data() {
    return {
      sceneList: [
        {
          img: require("./../../../../assets/img/index/m_home_use_birthday2.png"),
          text: "生日祝福"
        },
        {
          img: require("./../../../../assets/img/index/m_home_use_profess2.png"),
          text: "表白求婚"
        },
        {
          img: require("./../../../../assets/img/index/m_home_use_business2.png"),
          text: "开业商务"
        },
        {
          img: require("./../../../../assets/img/index/m_home_use_anniversary2.png"),
          text: "周年纪念"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.scene-item {
  margin: 0 4px;
  flex: 1;
  position: relative;
  .navigation {
    display: block;
    img {
      width: 100%;
    }
    .scene-item-use-title {
      position: absolute;
      color: #232628;
      left: 0;
      top: 24px;
      font-size: 28px;
      width: 100%;
      display: block;
      text-align: center;
    }
  }
}
.scene-list {
  display: flex;
}
</style>