<!-- 社交 -->

<template>
  <div id="social">
    <a href="https://github.com/youyougu-me" target="_blank">
      <svg-icon iconClass="github" class="github" />
    </a>
    <!-- <a href>
      <svg-icon iconClass="weixin" class="weixin" />
    </a>-->
    <el-popover placement="top-start" title="微信" width="100" trigger="hover">
      <img src="@/assets/images/weixin.jpg" alt style="width:100%;" />
      <a href slot="reference">
        <svg-icon iconClass="weixin" class="weixin" />
      </a>
    </el-popover>
    <a href="https://www.jianshu.com/u/24f7fd7b8b2d" target="_blank">
      <svg-icon iconClass="jian" class="jian" />
    </a>
  </div>
</template>


<script>
export default {};
</script>

<style scoped lang="scss">
#social {
  text-align: center;
  .img {
    width: 20px !important;
  }
  a {
    margin-left: 10px;
  }
}
</style>

