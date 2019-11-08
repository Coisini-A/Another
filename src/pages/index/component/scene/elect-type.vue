<template>
    <div class="scene-list">
    <div class="scene-item scene-item-radius" v-for="(item,index) in electList" :key="index">
      <a href="#" class="navigation">
        <img :src="item.img" />
        <span class="scene-item-pange" v-text="item.text"></span>
      </a>
    </div>
  </div>

</template>

<script>
export default {
  name: "elect-type",
  data(){
      return{
          electList:[
              {
                  img:require("./../../../../assets/img/index/m_home_category_new2.png"),
                  text:"新品来袭"
              }, {
                  img:require("./../../../../assets/img/index/m_home_category_quality2.png"),
                  text:"品味之选"
              },
               {
                  img:require("./../../../../assets/img/index/m_home_category_you2.png"),
                  text:"设计师臻选"
              }
          ]
      }
  }
};
</script>

<style lang="less" scoped>
    .scene-item {
        display: block;
        flex: 1;
        position: relative;
        margin: 0 0.14285714rem;
        overflow: hidden;
    }
    a {
        text-decoration: none;
        color: inherit;
        outline: none;
        .scene-item-pange {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(35, 38, 40, 0.8);
            color: #fff;
            text-align: center;
            font-size:16px;
            padding: 0.08rem 0;
        }
    }
</style>