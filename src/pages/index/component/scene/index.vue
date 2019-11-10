<template>
  <div class="scene">
    <modetitle></modetitle>
    <person-type></person-type>
    <scene-type></scene-type>
    <hot-sale></hot-sale>
    <elect-type></elect-type>
  </div>
</template>

<script>
import Modetitle from "./modetitle";
import PersonType from "./person-type";
import SceneType from "./scene-type";
import HotSale from "./hot-sale";
import ElectType from "./elect-type";
export default {
  name: "index",
  components: {
    modetitle: Modetitle,
    "person-type": PersonType,
    "scene-type": SceneType,
    "hot-sale": HotSale,
    "elect-type":ElectType
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.scene{
  background-color: white;
}
.scene-list {
  display: flex;
  margin-top: 16px;
  padding: 0 6px;
}
</style>