<template>
  <div class="articleHead">
      <header class="articleHead-head">
        <h1>分类 设计作品 下的文章</h1>
        <div class="articleHead-desc">你说过，人最大的敌人是自己</div>
      </header>
        <div class="articleHead-content">
            <div class="breadCrumbs">
                <i class="iconfont icon-shouye shouye"></i>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{breadcrumb}}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <div class="article_info">
              <slot></slot>
            </div>
        </div>
  </div>
</template>

<script>

export default {
  props:['breadcrumb'],
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
  .articleHead{
     &-head{
        background-color: #f9f9f9;
        padding: 20px;
        h1{
            color: #000;
            font-size: 30px;
            font-weight: 300;
        }
     } 
     &-desc{
         font-size: 13px;
         color: #a0a0a0;
         letter-spacing: 2px;
     }
     &-content{
        padding: 20px;
        .breadCrumbs{
            padding: 8px 15px;
            margin-bottom: 20px;
            list-style: none;
            background-color: #fff;
            border-radius: 4px;
            display: flex;
            align-items: center;
            .shouye{
                margin-right: 5px;
            }
            /deep/.el-breadcrumb__inner{
                color: #777;
                font-weight: 400;
            }
        }
     }
  }
</style>