<template>
  <div id="works">
    <bigTitle :configText="configText"></bigTitle>
    <!-- 经历时间线 -->
    <el-timeline>
      <el-timeline-item placement="top" color="#f17c67">
        <el-card>
          <template slot="header">
            <h1 class="title">重庆吉垚物业有限公司</h1>
            <span v-if="true" class="sub-title">2019.07——2020.06</span>
          </template>
          <p
            class="content"
          >吉垚是一家创业型公司,它也是将我引向互联网的灯塔.我是以实习生的身份步入公司.在那里有一群志同道合的伙伴,我们一起学习,相互扶持,合作开发了公司官网和物业后台管理系统.不仅技术得到了提升,也磨炼了自己的克服困难的意志,更收获了友谊.</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item placement="top" color="#f17c67">
        <el-card>
          <template slot="header">
            <h1 class="title">重庆长安汽车股份有限公司</h1>
            <span v-if="true" class="sub-title">2018.07——2019.06</span>
          </template>
          <p
            class="content"
          >毕业季,国企是我'理想'的企业.凭着自己可观的考试成绩和一些荣誉证书,我面试通过顺利进入了长安,在那里我负责的岗位是冲压车间设备管理.初入社会,只求一份工作,而未对自己的职业进行认真的思考.很感谢长安给我一年时间,让我明确自己的职业方向,决定投身于猿类大军.</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item placement="top" color="#f17c67">
        <el-card>
          <template slot="header">
            <h1 class="title">重庆理工大学</h1>
            <span v-if="true" class="sub-title">2014.09——2018.06</span>
          </template>
          <p
            class="content"
          >
          大学,回忆满满的一段时光,可能也是我人生中最悠闲最放松一段时光.在这里自己的眼界得到了提升,校园里丰富多彩的活动也使得自己的生活不再单调.
          </p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import bigTitle from "@/components/ModuleHeader";
export default {
  data() {
    return {
      configText: {
        sm: "EXPERIENCE",
        bg: "MY EXPERIENCE"
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
#works {
  .el-card {
    .title {
      font-size: 16px;
    }

    .sub-title {
      font-size: 8px;
      margin-top: 5px;
      display: block;
    }
    .content {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.65);
    }
  }

  //媒体查询
  //小屏幕
  @media screen and (max-width: $--screen-sm-min) {
  }
}
</style>