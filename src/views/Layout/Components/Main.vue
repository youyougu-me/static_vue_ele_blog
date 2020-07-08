<template>
  <div id="blog_main">
    <!-- 移动端抽屉控制图标 -->
    <div
      :class="['draw_flagico',drawerFlag==true?'drawer_open':'drawer_close',fixedFlag==true?'haha':'']"
      @click="controlDrawer"
      ref="drawFlagico"
    >
      <svg-icon
        :iconClass="drawerFlag==true?'rightarrow':'list'"
        :class="drawerFlag==true?'rightarrow':'list'"
      />
    </div>
    <!-- 移动端抽屉 -->
    <el-drawer
      :visible.sync="drawerFlag"
      direction="ltr"
      :before-close="drawerHandleClose"
      :with-header="false"
      :wrapperClosable="true"
      :show-close="true"
      :size="'256px'"
    >
      <MyMenu @controlDrawer="controlDrawer"></MyMenu>
    </el-drawer>

    <!-- 可变内容 -->
    <div style="width:100%">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
import MyMenu from "./MyMenu";
export default {
  data() {
    return {
      drawerFlag: false,
      //页面滑出距离
      toTopDistance: "",
      //整屏幕距离
      fullHeight: document.documentElement.clientHeight,
      fixedFlag: false
    };
  },
  methods: {
    drawerHandleClose(done) {
      done();
    },
    //控制抽屉
    controlDrawer() {
      this.drawerFlag = !this.drawerFlag;
    },
    //获取页面滑出距离
    funx() {
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
  },
  mounted() {
    // this.$refs.drawFlagico.style.top = this.fullHeight + "px";
    const that = this;
    //页面一旦改变便会执行
    //但是刷新不会执行
    window.onresize = () => {
      return (() => {
        window.fullHeight = document.documentElement.clientHeight;
        that.fullHeight = window.fullHeight;
      })();
    };

    //监听滚动
    window.addEventListener("scroll", () => {
      this.funx();
      if (this.toTopDistance > this.fullHeight) {
        this.fixedFlag = true;
      } else {
        this.fixedFlag = false;
      }
    });
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
  components: {
    MyMenu
  }
};
</script>

<style lang="scss" scoped>
#blog_main {
  // height: 2000px;
  float: left;
  margin-left: 320px;
  width: calc(100% - 320px);
  padding-left: 30px;
  padding-top: 40px;
  padding-right: 30px;
  position: relative;
  box-sizing: border-box;

  // 小屏幕所见图标
  .draw_flagico {
    z-index: 9999;
    position: absolute;
    width: 35px;
    height: 35px;
    border: 1px solid #409eff;
    text-align: center;
    line-height: 43px;
    border-radius: 50%;
    display: none;
    left: 15px;
    top: 6px;
    background-color: #fff;
    &:hover {
      border: 2px solid #409eff;
    }
    &.haha {
      position: fixed !important;
      top: 6px !important;
    }
  }

  .el-drawer {
    //小屏幕下图标可见,只有图标才可以打开抽屉、
    //不用设置大屏幕图标不可见
    //系统自带必须关闭抽屉才能操作
    // display: none !important;
  }

  //根据flag控制图标横向距离
  .drawer_open {
    left: 270px;
  }
  .drawer_close {
    left: 15px;
  }
}

//媒体查询
@media screen and (max-width: $--screen-sm-min) {
  //小屏幕
  #blog_main {
    margin-left: 0px;
    width: 100%;
    //去掉左边距
    padding: 0 5px;
    // 控制抽屉图标可见
    .draw_flagico {
      display: block;
    }
    //抽屉可见
  }
}
</style>