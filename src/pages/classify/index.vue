<template>
  <div class="container">
    <headerbar></headerbar>
    <catebox></catebox>
  </div>
</template>

<script>
import Headerbar from "./component/headerbar";
import CateBox from "./component/catebox";
export default {
  name: "index",
  components: {
    headerbar: Headerbar,
    catebox: CateBox
  }
};
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  padding-top: 92px; 
}
</style>