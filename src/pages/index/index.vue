<template>
  <div class="container">
    <nav-bar></nav-bar>
    <banner></banner>
    <honor></honor>
    <procate></procate>
    <scene></scene>
    <product></product>
    <index-pic></index-pic>
    <brand-list></brand-list>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Banner from "./component/banner";
import NavBar from "./component/nav-bar";
import Honor from "./component/honor";
import Procate from "./component/procate";
import Scene from "./component/scene";
import Product from "./component/product";
import IndexPic from "./component/index-pic";
import BrandList from "./component/brand-list";
import Footer from "./component/footer"
export default {
  name: "index",
  components: {
    banner: Banner,
    "nav-bar": NavBar,
    honor: Honor,
    procate: Procate,
    scene: Scene,
    product: Product,
    "index-pic":IndexPic,
    "brand-list":BrandList,
    "my-footer":Footer
  }
};
</script>

<style lang="less" scoped>
.container {
  padding-bottom: 84px;
  background: #E9ECF0;
}
</style>
