<template>
  <div class="leftSideNav">
    <div class="leftSideNav-title">导航</div>
    <el-menu
      class="el-menu-vertical-demo"
      background-color='#f9f9f9'
      text-color='#777777'
      unique-opened
      active-text-color='#344449'
      >
      <el-menu-item index="1">
          <i class="iconfont icon-shouye"></i>
          <span>首页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="iconfont icon-github"></i>
        <span slot="title">仓库</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="iconfont icon-guidangshenjipingtai"></i>
        <span slot="title">归档</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="iconfont icon-kafei"></i>
          <span>关于</span>
        </template>
          <el-menu-item index="1-1" >
            <i class="iconfont icon-kafei"></i>
            <span>关于我</span>
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="iconfont icon-aite"></i>
            <span>留言本</span>
          </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

export default {
  // 定义属性
  data() {
    return {
      
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
}
</script>

<style lang='scss' scoped>
  .leftSideNav{
    border-bottom: 1px solid #fff;
    &-title{
        margin: 15px 0px 10px;
        padding: 0px 15px;
        color: #98a6ad;
        font-size: 14px;
    }
  }
</style>