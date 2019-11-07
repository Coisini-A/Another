<template>
    <div class="nav-bar">
        <div class="iconfont">&#xe684;</div>
        <div class="nav-bar-log"><img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png"></div>
        <div class="iconfont">&#xec2e;</div>
    </div>
</template>

<script>
export default {
    name:"nav-bar",
    data(){
       return {
          
       }
    }
}
</script>

<style lang="less" scoped>
    .nav-bar{
        width: 100%;
        height:96px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        top: 0;
        left: 0;
        background-color:#435448;
        padding: 0 28px;
        .iconfont{
            width:7%;
            color:#ffffff;
            font-size:45px;
        }
        .nav-bar-log{
            width:45%;
            margin:0 auto;
            line-height:96px;
        }
    }
</style>