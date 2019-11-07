<template>
  <div class="container">
    <nav-bar></nav-bar>
    <banner></banner>
    <honor></honor>
    <procate></procate>
    <modetitle></modetitle>
    <scene-list></scene-list>
  </div>
</template>

<script>
import Banner from "./component/banner";
import NavBar from "./component/nav-bar";
import Honor from "./component/honor";
import Procate from "./component/procate";
import Modetitle from "./component/scene/modetitle";
import SceneList from "./component/scene/scene-list"
export default {
  name: "index",
  components: {
    banner: Banner,
    "nav-bar": NavBar,
    honor: Honor,
    procate:Procate,
    modetitle:Modetitle,
    "scene-list":SceneList
  }
};
</script>

<style lang="less" scoped>
.container {
  padding-top: 96px;
}
</style>
