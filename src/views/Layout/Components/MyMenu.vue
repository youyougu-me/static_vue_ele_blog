<template>
  <div id="my_menu">
    <!-- 头像名字 -->
    <div class="info">
      <img src="@/assets/images/avatar.png" alt class="avatar" />
      <div class="name">我背井离乡了好多年</div>
    </div>
    <!-- 菜单 -->
    <el-menu
      :default-active="defaultActive"
      background-color="#fff"
      text-color="#2d2d2d"
      active-text-color="#f17c67"
      style="width:100%;position:absolute;"
    >
      <!-- key不能写在template这里 -->
      <template v-for="(item,index) in menus">
        <el-submenu :key="item.id" :index="index+''" v-if="item.children.length!==0">
          <!-- 一级菜单 -->
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <!-- 那边item里没有icon的,这边也不会报错 -->
            <!-- <svg-icon :iconClass="iconsObj[item.id]" :className="iconsObj[item.id]" /> -->
            <span slot="title" style="padding-left:10px;">{{item.authName}}</span>
          </template>
          <!-- 子集菜单 -->
          <!-- index就是路径,组件内定的 -->
          <template v-for="subItem in item.children">
            <el-menu-item :key="subItem.id" :index="'/'+subItem.path">
              <a :href="'#'+subItem.meta.id">{{subItem.authName}}</a>
            </el-menu-item>
          </template>
        </el-submenu>

        <el-menu-item :key="item.id" :index="'/'+item.path" v-else class="noChildItem">
          <a
            :href="'#'+item.meta.id"
            v-smooth-scroll
            style="width:100%;height:100%;display:block;"
            @click="controlDrawer"
          >
            <svg-icon :iconClass="item.path" :className="item.path" />
            {{item.authName}}
          </a>
        </el-menu-item>
      </template>
    </el-menu>
    <!-- 尾部 -->
    <div class="footer">
      <!-- 社交 -->
      <Social />
      <!-- 版权 -->
      <Copyrights />
    </div>
  </div>
</template>

<script>
import Social from "./footer/Social";
import Copyrights from "./footer/Copyrights";
export default {
  data() {
    return {
      menus: [
        {
          id: 1,
          authName: "首页",
          path: "home",
          children: [],
          meta: {
            id: "home"
          }
        },
        {
          id: 2,
          authName: "关于",
          path: "about",
          children: [
            // {
            //   id: 111,
            //   authName: "概况",
            //   path: "about",
            //   children: []
            // }
          ],
          meta: {
            id: "about"
          }
        },
        {
          id: 3,
          authName: "经历",
          path: "works",
          children: [],
          meta: {
            id: "works"
          }
        },
        {
          id: 4,
          authName: "作品",
          path: "blog",
          children: [],
          meta: {
            id: "blog"
          }
        }
      ]
    };
  },
  methods: {
    //点击菜单时关闭抽屉
    controlDrawer() {
      this.$emit("controlDrawer");
    }
  },
  created() {},
  mounted() {},
  computed: {
    defaultActive: function() {
      const route = this.$route;
      return route.path;
    }
  },
  components: {
    Social,
    Copyrights
  }
};
</script>
<style lang="scss" scoped>
#my_menu {
  position: absolute;
  height: 100%;
  width: 100%;
  //菜单
  .el-menu {
    // height: 100%;
    border-right: solid 0 #e6e6e6;
    .noChildItem {
      padding-left: 40px !important;
      border-bottom: 1px solid #ccc;
      width: 80%;
      margin: 0 auto;
    }
  }
  //信息
  .info {
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
    .avatar {
      width: 100px;
      border-radius: 50%;
      margin: 50px auto 10px;
    }
    .name {
      font-size: 16px;
    }
  }
  //尾部
  .footer {
    width: 100%;
    position: absolute;
    bottom: 20px;
    left: 0;
  }
}
</style>