<!-- 每个内容模块的title -->

<template>
  <div id="heading">
    <el-row class="color-title">
      <el-col :span="24">
        <span>{{configText.sm}}</span>
      </el-col>
    </el-row>
    <el-row class="color-content">
      <el-col :span="24">
        <h2>{{configText.bg}}</h2>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    configText: {
      default: () => {
        return {};
      }
    }
  }
};
</script>

<style scoped lang="scss">
#heading {
  border-left: 6px solid #e3872d;
  padding: 0.5em 0 0 1.5em;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 30px;
  width: 100%;
  box-sizing: border-box;

  span {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 5px;
  }

  h2 {
    font-weight: 500;
    font-size: 30px;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 0;
  }
}
</style>
