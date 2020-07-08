<template>
  <div id="blog">
    <bigTitle :configText="configText"></bigTitle>
    <div class="myworks">
      <div class="workitem" v-for="(item,index) in content" :key="index">
        <h1 class="title">{{item.p0}}</h1>
        <div class="content">
          <div>{{item.p1}}</div>
          <div>{{item.p2}}</div>
          <div>
            作品链接:
            <a :href="item.p3">{{item.p3}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bigTitle from "@/components/ModuleHeader";
import {content} from "./conten";
export default {
  data() {
    return {
      configText: {
        sm: "PROJECTS",
        bg: "MY works"
      },
      content: content
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
#blog {
  // height: 1000px;
  margin-bottom:100px;
  .myworks {
    .workitem {
      margin-top: 30px;
      .title {
        background-color: rgba(241, 124, 103, 0.3);
        padding: 10px 0;
        padding-left: 20px;
        font-weight: bold;
      }
      .content {
        margin-top: 10px;
        div {
          color: $textColor;
          margin-top: 5px;
          letter-spacing: 1px;
          font-size: 14px;
          box-sizing: border-box;
          border-bottom: 1px solid #ccc;
          line-height: 1.3;
          a {
            color: rosybrown;
          }
        }
      }
    }
  }

  //媒体查询
  @media screen and (max-width: $--screen-sm-min) {
    //小屏幕
  }
}
</style>