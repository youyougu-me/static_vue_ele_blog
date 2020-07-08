
<template>
  <div id="consoleContainer">
    <MaodianAbout />
    <div style="height:80px;"></div>
    <MaodianWorks />
    <div style="height:80px;"></div>
    <MaodianBlog />
  </div>
</template>

<script>
import MaodianAbout from "./maodian/About";
import MaodianWorks from "./maodian/Works";
import MaodianBlog from "./maodian/Blog";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  components: {
    MaodianAbout,
    MaodianWorks,
    MaodianBlog
  }
};
</script>
<style lang="scss" scoped>
#consoleContainer {
}
</style>