<template>
  <div class="container">
    <nav-bar></nav-bar>
    <banner></banner>
    <honor></honor>
    <procate></procate>
    <scene></scene>
    <product></product>
  </div>
</template>

<script>
import Banner from "./component/banner";
import NavBar from "./component/nav-bar";
import Honor from "./component/honor";
import Procate from "./component/procate";
import Scene from "./component/scene";
import Product from "./component/product";
export default {
  name: "index",
  components: {
    banner: Banner,
    "nav-bar": NavBar,
    honor: Honor,
    procate: Procate,
    scene: Scene,
    Product: Product
  }
};
</script>

<style lang="less" scoped>
.container {
  padding-bottom: 84px;
}
</style>
