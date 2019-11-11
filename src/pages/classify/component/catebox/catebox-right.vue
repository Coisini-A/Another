<template>
  <div class="box-wrap">
    <div class="box">
      <div class="ad-pic">
        <img :src="classifyList.adImg" alt />
      </div>
      <div
        class="classify-chunk"
        :key="index"
        v-for="(item,index) in classifyList.productClassIfyChunk"
      >
        <div class="classify-title">
          <div class="classify-title-text" v-text="item.title"></div>
          <div class="classify-title-desc">
            <span v-text="item.descIcon"></span>
            <span v-text="item.desc"></span>
          </div>
        </div>
        <div class="classify-content">
          <div
            class="classify-content-item"
            v-for="(classifyItem,classifyIndex) in item.productClassIfy"
            :key="classifyIndex"
          >
            <img :src="classifyItem.img" />
            <p v-text="classifyItem.text"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "catebox-right",
  props: {
    classifyList: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.box-wrap {
  // float: right;
  margin:0 auto;
  overflow-y: auto;
  height: 100%;
  width: 75%;
}
.box {
  .classify-chunk {
      margin:20px 0;
    box-shadow: 0px 2px 6px 0px #e9ecf0;
  }
}
.classify-title {
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  padding: 30px 0;
}
.classify-content {
  display: flex;
  flex-wrap: wrap;
  .classify-content-item {
    width: 170px;
    padding: 16px 0;
    > img {
      display: block;
      margin: 0 auto;
      width: 112px;
      height: 112px;
      border-radius: 50%;
    }
    > p {
      text-align: center;
      margin: 16px 16px 0;
    }
  }
}
</style>