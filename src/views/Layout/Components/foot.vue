<template>
  <div id="foot">
    <!-- 如果是响应式就不要把高度写死,这个type也不能是flex -->
    <el-row>
      <el-col :xs="24" :sm="8">
        <Copyrights />
      </el-col>
      <el-col :xs="24" :sm="8">
        <img src="../../../assets/images/avatar.png" alt class="avatar" />
      </el-col>
      <el-col :xs="24" :sm="8">
        <Social />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Social from "./footer/Social";
import Copyrights from "./footer/Copyrights";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  components: {
    Social,
    Copyrights
  }
};
</script>
<style lang="scss" scoped>
#foot {
  float: left;
  margin-left: 320px;
  width: calc(100% - 320px);
  position: relative;
  box-sizing: border-box;
  background-color: #eee;
  .avatar {
    width: 50px;
    margin: auto auto;
    border-radius: 50%;
    opacity: 0.8;
  }
}

//媒体查询
@media screen and (max-width: $--screen-sm-min) {
  //小屏幕
  #foot {
    margin-left: 0px;
    width: 100%;
    //去掉左边距
    padding: 10px 5px;
    .avatar{
        margin: 20px auto;
    }
  }
}

  //大屏幕
  @media screen and (min-width: $--screen-sm-min) {
    #foot {
      height: 100px;
      line-height: 100px;
      .avatar {
        margin-top: 25px;
      }
    }
  }
</style>