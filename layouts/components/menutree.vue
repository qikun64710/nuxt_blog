<template>
  <div>
    <template v-for="item in menuList">
      <el-submenu v-if="item.child && item.child.length>0" :key="item && item.id" :index="item && item.id">
        <template slot="title" style="padding-left:10px">
          <i class="icon iconfont" :class="item.icon"></i>
          <span slot="title" @click="jump(item)">{{ item.name}}</span>
        </template>
        <!--  如果有子级数据使用递归组件 -->
        <Menu :menuList="item.child"></Menu>
      </el-submenu>
      <el-menu-item v-else :index="item && item.id" :key=" item && item.id" @click="jump(item)">
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
    
  },
  methods: {
    jump(item){
      if(!item.path){
        return
      }
      this.$router.push({
        path: `${item.path}`,
      })
    }
  },
};
</script>