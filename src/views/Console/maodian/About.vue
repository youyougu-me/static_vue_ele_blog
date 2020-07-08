<template>
  <div id="about">
    <bigTitle :configText="configText"></bigTitle>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="8">
        <img class="img" src="@/assets/images/about.png" alt />
      </el-col>
      <el-col :xs="24" :sm="16">
        <div class="text_container">
          <div class="tag">
            <el-tag>lovecode</el-tag>
            <el-tag type="success">cook</el-tag>
            <el-tag type="info">sports</el-tag>
            <el-tag type="warning">harder</el-tag>
            <el-tag type="danger">optimism</el-tag>
          </div>
          <div class="info">
            <div style="background-color:#ecf5ff;padding:5px 0;">我是一个正宗的重庆崽儿,家住永川,现已24岁,积极谋生中~</div>
            <div
              style="background-color:#f0f9eb;padding:5px 0;"
            >性格呢?有时内向,有时外向,说话一般简单直接,比较好相处,做事认真负责~</div>
            <div
              style="background-color:#f4f4f5;padding:5px 0;"
            >平时喜欢看看电影,打打羽毛球,对炒菜也比较热爱,但尚未习得一手好厨艺,正在努力中~</div>
            <div
              style="background-color:#fdf6ec;padding:5px 0;"
            >毕业于重庆理工大(本科),本非计算机科班出身,但对代码有热情,于一年前投身与猿类大军~</div>
            <div style="background-color:#fef0f0;padding:5px 0;">很喜欢的一句话 no pain,no gain~</div>
          </div>
          <div class="social">
            <el-row>
              <el-col :xs="24" :sm="12">
                <span>简书:</span>
                <a
                  href="https://www.jianshu.com/u/24f7fd7b8b2d/"
                  target="_blank"
                >https://www.jianshu.com/u/24f7fd7b8b2d</a>
              </el-col>
              <el-col :xs="24" :sm="12">
                <span>github:</span>
                <a href="https://github.com/youyougu-me" target="_blank">github.com/youyougu-me</a>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import bigTitle from "@/components/ModuleHeader";
export default {
  data() {
    return {
      configText: {
        sm: "INFORMATION",
        bg: "ABOUT ME"
      }
    };
  },
  methods: {},
  created() {},
  mounted() {},
  components: {
    bigTitle
  }
};
</script>
<style lang="scss" scoped>
#about {
  .img {
    width: 100%;
    margin-bottom: 20px;
  }
  .text_container {
    .info {
      margin-top: 20px;
      div {
        color: $textColor;
        margin-top: 5px;
        letter-spacing: 1px;
        font-size: 14px;
        box-sizing: border-box;
      }
    }
    .social {
      margin-top: 20px;
      span {
        font-weight: bold;
        color: $textColor;
        margin-right: 5px;
        display: inline-block;
        margin-top: 10px;
      }
      a {
        text-decoration: underline;
        display: inline-block;
        margin-top: 10px;
      }
    }
  }

  //媒体查询
  @media screen and (max-width: $--screen-sm-min) {
    //小屏幕
    // .info {
    // 这个我把它写到了总的里面去
    //   padding: 0 5px;
    // }
  }
}
</style>