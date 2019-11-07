<template>
  <div class="scene">
    <modetitle></modetitle>
    <person-type></person-type>
    <scene-type></scene-type>
  </div>
</template>

<script>
import Modetitle from "./modetitle";
import PersonType from "./person-type";
import SceneType from "./scene-type";
export default {
  name: "index",
  components: {
    modetitle: Modetitle,
    "person-type": PersonType,
    "scene-type": SceneType
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.scene-list {
  display: flex;
  margin-top: 16px;
  padding: 0 6px;
}
</style>