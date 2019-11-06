<template>
  <div class="container">
    <nav-bar></nav-bar>
    <banner></banner>
    <honor></honor>
    <procate></procate>
  </div>
</template>

<script>
import Banner from "./component/banner";
import NavBar from "./component/nav-bar";
import Honor from "./component/honor";
import Procate from "./component/procate";
export default {
  name: "index",
  components: {
    banner: Banner,
    "nav-bar": NavBar,
    honor: Honor,
    procate:Procate
  }
};
</script>

<style lang="less" scoped>
.container {
  padding-top: 96px;
}
</style>
