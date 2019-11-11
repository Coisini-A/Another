<template>
  <div class="catebox-menu-list">
    <div
      :class="['catebox-menu-item',index===currentIndex ?'focus':'']"
      :key="index"
      v-for="(item,index) in left"
      @click="classifyChange(index)"
    >{{item.text}}</div>
  </div>
</template>

<script>
export default {
  name: "catebox-left",
  props: {
    left: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    classifyChange(index) {
      if (this.currentIndex === index) return;
      this.currentIndex = index;
      this.$emit('classifyChange',index);
    }
  }
};
</script>

<style lang="less" scoped>
.catebox-menu-list {
  top: 90px;
  float: left;
  width: 20%;
  border-right: 1px solid #e9ecf0;
  overflow-x: hidden;
  overflow-y: auto;
  .catebox-menu-item {
    position: relative;;
    height: 112px;
    line-height: 112px;
    text-align: center;
    font-size: 28px;
    &.focus {
      color: #ff734c;
      &::after {
        content: "";
        width: 4px;
        height: 50%;
        position: absolute;
        left: 0;
        top: 50%;
        background: #ff734c;
        transform: translateY(-50%);
      }
    }
  }
}
</style>