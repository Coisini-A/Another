<template>
  <div>
    <div class="links-item" v-for="(item,index) in FooterList" :key="index">
      <div>
        <a href="#" v-text="item.text"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      FooterList: [
        // {
        //   text: "企业团购"
        // },
        // {
        //   text: "企业团购"
        // },
        // {
        //   text: "企业团购"
        // },
        // {
        //   text: "企业团购"
        // },
        // {
        //   text: "企业团购"
        // },
        // {
        //   text: "企业团购"
        // },
        // {
        //   text: "企业团购"
        // },
        {
          text: "企业团购"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.links-item {
  display: flex;
  flex-wrap: wrap;
  >div{
      width: 131px;
       height: 32px;
  }
  a {
    padding: 8px 16px;
    margin: 0 28px;
    background-color: #e9ecf0;
  }
}
</style>