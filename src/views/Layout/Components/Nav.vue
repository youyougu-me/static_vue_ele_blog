<template>
  <!-- 2 是控制固定, 0 是文档流 -->
  <div :class="[sideNavFixed==true?'sidenav2':'sidenav']" ref="sidenav" id="sidercontainer">
    <MyMenu></MyMenu>
  </div>
</template>

<script>
import MyMenu from "./MyMenu";
import { getCurrentToTop, move } from "@/utils/toolFunc.js";
export default {
  data() {
    return {
      //保证一来,未改变页面就有值
      fullHeight: document.documentElement.clientHeight,
      sideNavFixed: false
    };
  },
  mounted() {
    const that = this;
    //页面一旦改变便会执行
    //但是刷新不会执行
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight;
        that.fullHeight = window.fullHeight;
      })();
    };
    // 滚动事件,页面刷新便会执行
    window.addEventListener("scroll", that.watchScroll);
  },
  watch: {
    //优化获取屏幕高度的值
    fullHeight(val) {
      if (!this.timer) {
        this.fullHeight = val;
        this.timer = true;
        let that = this;
        setTimeout(function() {
          that.timer = false;
        }, 400);
      }
    }
  },
  computed: {},
  destroyed() {
    window.removeEventListener("scroll", this.watchScroll);
  },
  methods: {
    //判断是否滑动到主页顶部,控制侧边栏固定
    watchScroll() {
      this.funx();
      //页面滑出了一个屏 则固定
      if (this.toTopDistance > this.fullHeight) {
        this.sideNavFixed = true;
      } else {
        this.sideNavFixed = false;
      }
    },
    funx() {
      {
        if (document.documentElement.scrollTop != undefined) {
          this.toTopDistance = document.documentElement.scrollTop;
          return;
        }
        if (document.body.scrollTop != undefined) {
          this.toTopDistance = document.body.scrollTop;
          return;
        }
        if (window.pageYOffset != undefined) {
          this.toTopDistance = window.pageYOffset;
          return;
        }
      }
    }
  },
  created() {},
  components: {
    MyMenu
  }
};
</script>
<style lang="scss" scoped>
//控制位置
//这两个类代表侧边栏最大盒子
//动态设置
.sidenav {
  width: 320px;
  height: 100vh;
  position: relative;
}
.sidenav2 {
  width: 320px;
  height: 100vh;
  position: fixed;
  top: 0;
}
//侧边栏最大盒子id
#sidercontainer {
}

//媒体查询
//小屏幕下
@media screen and (max-width: $--screen-sm-min) {
  #sidercontainer {
    display: none;
  }
}

//大屏幕
@media screen and (min-width: $--screen-sm-min) {
  #sidercontainer {
    box-shadow: 1px 0 5px #e0e0e0;
  }
}
</style>