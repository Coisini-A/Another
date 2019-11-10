<template>
  <div class="brand">
    <h3>为什么选择我们</h3>
    <div class="list-box">
      <div class="brand-list" v-for="(item,index) in BrandList" :key="index">
        <img :src="item.img" />
        <p v-text="item.text"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      BrandList: [
        {
          img: "https://img02.hua.com/m/pro_detail/m_details_brand_01.png",
          text: "获评鲜花龙头企业"
        },
        {
          img: "https://img02.hua.com/m/pro_detail/m_details_brand_01.png",
          text: "获评鲜花龙头企业"
        },
        {
          img: "https://img02.hua.com/m/pro_detail/m_details_brand_01.png",
          text: "获评鲜花龙头企业"
        },
        {
          img: "https://img02.hua.com/m/pro_detail/m_details_brand_01.png",
          text: "获评鲜花龙头企业"
        },
        {
          img: "https://img02.hua.com/m/pro_detail/m_details_brand_01.png",
          text: "获评鲜花龙头企业"
        },
        {
          img: "https://img02.hua.com/m/pro_detail/m_details_brand_01.png",
          text: "获评鲜花龙头企业"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.brand {
  background-color: white;
  h3 {
    text-align: center;
    padding: 40px 0;
    font-size: 32px;
    font-weight: normal;
  }
}

.list-box {
  display: flex;
  flex-wrap: wrap;
}
.brand-list {
  width: 250px;
  height: 216px;
  padding: 0 0 48px;
  text-align: center;
  > img {
    // vertical-align: middle;
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }
  p {
    width: 250px;
    font-size: 24px;
    margin-top: 8px;
  }
}
</style>