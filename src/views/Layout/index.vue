<template>
  <div>
    <!-- 普通定位,高度为视口大小 -->
    <LayoutHeader />
    <!-- 普通定位,左浮动,固定宽度,设置左margin -->
    <LayoutMain />
    <!-- <div id="blog_ex" class="hehehe" @click="toWowo">wowow喔喔</div> -->
    <!-- 刚开始是relative,之后fixed -->
    <LayoutNav />
    <!-- 普通定位,左浮动,固定宽度,设置左margin -->
    <Foot />
  </div>
</template>

<script>
import LayoutHeader from "./Components/Header";
import LayoutMain from "./Components/Main";
import LayoutNav from "./Components/Nav";
import Foot from "./Components/foot";
export default {
  data() {
    return {};
  },
  methods: {
    toWowo() {
      let anchorElement = document.getElementById("blog_ex");
      if (anchorElement) {
        anchorElement.scrollIntoView();
      }
    }
  },
  created() {},
  mounted() {},
  components: {
    LayoutHeader,
    LayoutMain,
    LayoutNav,
    Foot
  }
};
</script>
<style lang="scss" scoped>
.hehehe {
  height: 2000px;
  float: left;
  margin-left: 320px;
  width: calc(100% - 320px);
  padding-left: 30px;
  padding-top: 40px;
  position: relative;
  box-sizing: border-box;
  background-color: darkcyan;
}
</style>