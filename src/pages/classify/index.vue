<template>
<div>
  <headerbar></headerbar>
  <catebox></catebox>
</div>
</template>

<script>
import Headerbar from "./component/headerbar";
import CateBox from "./component/catebox";
export default {
  name: "index",
  components:{
    headerbar:Headerbar,
    catebox:CateBox
  }
};
</script>

<style lang="less" scoped>


</style>