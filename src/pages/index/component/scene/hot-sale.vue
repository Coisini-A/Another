<template>
    <div class="scene-list">
       <a class="scene-item scene-item-bg" :style="{'background-image':`url(${item.bgimg})`}" v-for="(item,desc,index) in hotList" :key="index">
           <p class="scene-item-name" v-text="item.name"></p>
           <p class="scene-item-desc" v-text="item.desc"></p>
           <div class="scene-item-bottom">
               <span class="scene-item-bottom-label" v-text="item.lable"></span>
               <span class="scene-item-bottom-text" v-text="item.text"></span>
           </div>
       </a>
    </div>
</template>
<script>
export default {
  name: "hot-sale",
  data(){
      return{
          hotList:[
              {
                bgimg:require("./../../../../assets/img/index/bg-img/m_home_ranklist2.png"),
                name:"热销榜",
                desc:"集万千宠爱",
                lable:"大家都在买",
                text:"热销10.9万"
              },
              {
                bgimg:require("./../../../../assets/img/index/bg-img/m_home_special2.png"),
                name:"特价专区",
                desc:"超值好货",
                lable:"限时直降",
                text:"￥132"
              }
          ]
      }
  }
};
</script>

<style lang="less" scoped>
    .scene-item-bg {
        display: block;
        position: relative;
        margin: 0;
        width:364px;
        height:320px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center center;
        color:black;
        font-size: 26px;
        padding:24px;
        border: 1px solid #E9ECF0;
        .scene-item-desc {
            color: #71797F;
            font-size:12px;
        }
    }
    .scene-item-bottom {
    position: absolute;
    z-index: 2;
    bottom:0.35rem;
    font-size:26px;
    overflow: hidden;
    white-space: nowrap;
    .scene-item-bottom-label {
        border-radius: 2rem;
        background: #FF734C;
        padding: 0.1rem 0.22857143rem;
        color: #fff;
        margin-right:50px;
        }
    }
</style>