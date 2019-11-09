<template>
    <div>
        <product></product>
        <product></product>
    </div>
</template>
    
<script>
import Product from "./product"; 
export default {
  name: "index",
    components:{
    product:Product
  },
    data(){
        return{};
  }
};
</script>

<style lang="less" scoped>
</style>