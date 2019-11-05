<template>
  <div class="container">
    <nav-bar></nav-bar>
    <banner></banner>
  </div>
</template>

<script>
import Banner from "./component/banner";
import NavBar from "./component/nav-bar";
export default {
  name: "index",
  components: {
    banner: Banner,
    "nav-bar": NavBar
  }
};
</script>

<style lang="less" scoped>
.container {
  padding-top: 96px;
}
</style>
