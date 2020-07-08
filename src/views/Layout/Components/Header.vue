<template>
  <div id="home">
    <!-- 全屏背景,大父级,相对定位 -->
    <div class="bgc">
      <!-- 控制上下滑动浮动图标 -->
      <transition>
        <!-- div与icon一样大小 -->
        <div v-show="showFlag" class="icon_div">
          <a href="#blog_main" v-smooth-scroll style="width:100px;height:100px;display:block;">
            <svg-icon iconClass="pull" class="pull"></svg-icon>
          </a>
        </div>
      </transition>
      <!-- 斜标签 -->
      <div class="fork-me">
        <a class="fork-me-link">
          <span class="fork-me-text">No pain, no gain</span>
        </a>
      </div>
      <!-- 头像及名字 -->
      <div class="avatar_box">
        <img src="../../../assets/images/avatar.png" alt class="avatar" />
        <div class="name">我背景离乡了好多年</div>
        <div class="typer">
          <Typer></Typer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { move } from "@/utils/toolFunc.js";
import Typer from "@c/Typer";
export default {
  data() {
    return {
      //下拉浮动标志的显示控制
      showFlag: true
    };
  },
  methods: {
    //点击事件 实现点击浮动下拉图标,平滑滑动到主页开头部分(也是侧边栏的头)
    moveToHome() {
      //目标元素距离页面顶部的距离,在这里是恒定值
      let total = document.getElementById("blog_main").offsetTop;
      move(total);
    }
  },
  created() {
    //定时器
    const timer = setInterval(() => {
      this.showFlag = !this.showFlag;
    }, 1000);
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
    });
  },
  mounted() {},
  components: {
    Typer
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/fork.scss";
#home {
  width: 100%;
  overflow: hidden;
  .bgc {
    // position: absolute;
    // top: 0;
    // left: 0;
    // width: 100%;
    // height: 100%;
    // z-index: -1;
    //======================
    width: 100%;
    height: 100vh;
    position: relative;
    //======================
    background: #50616d url(../../../assets/images/background.jpg) no-repeat 50%
      scroll;
    background-size: cover;
  }
  //浮动图标
  .icon_div {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 100px;
    z-index: 1;
    width: 100px;
    height: 100px;
    // background-color: red;
    text-align: center;
    line-height: 100px;
  }
  //头像及名字
  .avatar_box {
    // background-color: #ccc;
    width: 300px;
    height: 500px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 25%;
    .avatar {
      width: 100px;
      margin: 0 auto;
      border-radius: 50%;
      opacity: 0.8;
    }
    .name {
      text-align: center;
      margin: 20px auto;
      color: #fff;
      font-size: 20px;
      opacity: 0.8;
    }
    .typer {
      // text-align: center;
      margin-left: 28px;
    }
  }
}
//======================动画
.v-enter,
.v-leave-to {
  opacity: 1;
  // transform: translateY(5px) !important;
  bottom: 80px !important;
}
.v-leave-active {
  transition: all 1s ease;
}

.v-enter-active {
  transition: all 1s ease;
}
</style>