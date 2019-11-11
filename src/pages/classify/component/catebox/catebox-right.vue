<template>
<div>
    <div class="box" :key="i" v-for="(q,i) in list">
        {{q.name1}}
    </div>
</div>
</template>

<script>
export default {
  name: "catebox-right",
  data(){
      return{
          list:[
              {
                  name1:"11111"
              },
              {
                  name1:"2222"
              },
              {
                  name1:"33333"
              },
              {
                  name1:"444444"
              },
              {
                  name1:"555555"
              },
              {
                  name1:"666666"
              },
              {
                  name1:"77777"
              }
          ]
      }
  }
};
</script>

<style lang="less" scoped>
.box{
    background: red;
    width: 70%;
    height:800px;
}
</style>