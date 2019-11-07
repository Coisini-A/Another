<template>
  <div class="scene-list">
    <div class="scene-item scene-item-radius" v-for="(item,index) in sceneList" :key="index">
      <a href="#" class="navigation">
        <img :src="item.img" />
        <span class="scene-item-use-title" v-text="item.text"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "person-type",
  data() {
    return {
      sceneList: [
        {
          img: require("./../../../../assets/img/index/m_home_use_lover.png"),
          text: "送恋人"
        },
        {
          img: require("./../../../../assets/img/index/m_home_use_elder.png"),
          text: "送长辈"
        },
        {
          img: require("./../../../../assets/img/index/m_home_use_friends.png"),
          text: "送朋友"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.scene-list {
  margin: 0;
}
.scene-item {
  display: block;
  flex: 1;
  position: relative;
  margin: 0 5px;
  overflow: hidden;
}
.scene-item-use-title {
  position: absolute;
  bottom: 8px;
  left: 0;
  right: 0;
  z-index: 1;
  color: #fff;
  text-align: center;
}
</style>