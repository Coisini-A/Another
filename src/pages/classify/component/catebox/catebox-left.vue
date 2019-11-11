<template>
<div>
    <aside class="dada">
    <ul class="catebox-menu">
     <li :key="i" v-for="(q,i) in CataBoxList">{{q.text}}</li>
    </ul>
    <catebox-right></catebox-right>
  </aside>
</div>
  
</template>

<script>
import CataBoxRight from "./catebox-right"
export default {
  name: "catebox-left",
  computed:{
      "catebox-right":CataBoxRight
  },
  data(){
      return{
          CataBoxList:[
              {
                  text:"热门推荐"
              },
              {
                  text:"热门推荐"
              },
              {
                  text:"热门推荐"
              },
              {
                  text:"热门推荐"
              },
              {
                  text:"热门推荐"
              },
          ]
      }
  }
};
</script>

<style lang="less" scoped>
.catebox-menu {
    position: absolute;
    top:90px;
    left: 0;
    bottom: 0;
    z-index: 2;
    width: 21.06666667%;
    border-right: 1px solid #E9ECF0;
    transform: translate3d(0, 0, 0);
    overflow-x: hidden;
    overflow-y: auto;
}
.dada{
    display: flex;
}
</style>