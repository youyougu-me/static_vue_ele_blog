<template>
  <div id="blog">
    <bigTitle :configText="configText"></bigTitle>
    <div class="myworks">
      <div class="workitem">
        <h1 class="title">一、信息管理系统</h1>
        <div class="content">
          <div>
            一个管理各类新闻信息的后台系统,含有用户的登录注册,信息的分类、编辑与搜索.类别可设置子级,可对信息的类别进行添加、删除、编辑等
            操作.管理员可添加子管理员,并对其设置权限(页面权限、按钮权限).
          </div>
          <div>
            采用vue+axios+vuex+elementui的前端技术栈进行搭建,侧边
            栏菜单由路由表动态生成.分离出了vuex和api两个单独
            的模块,在element的组件基础上进行二次封装,开发出可复用的自定义组件.
            并采用了动态路由来实现权限管理的功能.
          </div>
          <div>
            作品链接:
            <a href="http://infoadmin.guyou.online:82/">http://infoadmin.guyou.online:82/</a>
          </div>
        </div>
      </div>
      <div class="workitem">
        <h1 class="title">一、信息管理系统</h1>
        <div class="content">
          <div>
            一个管理各类新闻信息的后台系统,含有用户的登录注册,信息的分类、编辑与搜索.类别可设置子级,可对信息的类别进行添加、删除、编辑等
            操作.管理员可添加子管理员,并对其设置权限(页面权限、按钮权限).
          </div>
          <div>
            采用vue+axios+vuex+elementui的前端技术栈进行搭建,侧边
            栏菜单由路由表动态生成.分离出了vuex和api两个单独
            的模块,在element的组件基础上进行二次封装,开发出可复用的自定义组件.
            并采用了动态路由来实现权限管理的功能.
          </div>
          <div>
            作品链接:
            <a href="http://infoadmin.guyou.online:82/">http://infoadmin.guyou.online:82/</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bigTitle from "@/components/ModuleHeader";
export default {
  data() {
    return {
      configText: {
        sm: "PROJECTS",
        bg: "MY works"
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
#blog {
  height: 1000px;
  .myworks {
    .workitem {
      margin-top:30px;
      .title {
        background-color: rgba(241, 124, 103,0.3);
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