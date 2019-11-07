<template>
    <div class="modetitle">
        <div v-for="(item,index) in modetitleList" :key="index" class="modetitle-item">
            <span class="iconfont" v-html="item.icon"></span>
            <span v-text="item.text"></span>
        </div>
    </div>
    
</template>

<script>
export default {
  name: "modetitle",
  data(){
      return{
          modetitleList:[
              {
                  icon:"&#xe62a;",
                  text:"一秒选花"
              }
          ]
      }
  }
};
</script>

<style lang="less" scoped>
  .modetitle-item{
      font-size:32px;
      padding:10px;
  }
  .iconfont{
      font-size:35px;
      font-weight: 600;
  }
</style>