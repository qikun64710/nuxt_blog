<template>
  <div>
    <template v-for="item in menuList">
      <el-submenu v-if="item.child && item.child.length>0" :key="item && item.path" :index="item && item.path">
        <template slot="title" style="padding-left:10px">
          <i class="icon iconfont el-icon-menu"></i>
          <span slot="title">{{ item.name}}</span>
        </template>
        <!--  如果有子级数据使用递归组件 -->
        <Menu :menuList="item.child"></Menu>
      </el-submenu>
      <el-menu-item v-else :index="item && item.path" :key=" item && item.path">
        <i :class="item.icon" class="icon iconfont"></i>
        <span>{{item.name}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  props: ['menuList'],
  name: 'Menu',//模板名称
  created () {
    console.log('menuList', this.menuList)
  },
};
</script>