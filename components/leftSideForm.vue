<template>
  <div class="leftSideForm">
    <div class="leftSideForm-title">组成</div>
    <el-menu
    class="el-menu-vertical-demo"
    background-color='#f9f9f9'
    text-color='#777777'
    unique-opened
    active-text-color='#344449'
    >
    <template v-for="(item,index) in categoryArr">
        <el-submenu :key="index" :index="index.toString()" v-if="item.children">
            <template slot="title">
                <i class="iconfont" :class="item.icon"></i>
                <span>{{item.name}}</span>
            </template>
            <template v-for="(chilItem,chilndex) in item.children">
                <el-submenu v-if="chilItem.children" :key="chilndex" :index="`${index.toString()}-${chilndex.toString()}`">
                    <template slot="title">
                        <i class="iconfont" :class="chilItem.icon"></i>
                        <span>{{chilItem.name}}</span>
                    </template>
                    <template v-for="(thirdItem,thirdIndex) in chilItem.children">
                        <el-menu-item  :key="thirdIndex" :index="`${chilndex.toString()}-${thirdIndex.toString()}`" @click="jump(thirdItem)" >
                            <i class="iconfont" :class="thirdItem.icon"></i>
                            <span>{{thirdItem.name}}</span>
                        </el-menu-item>
                    </template>
                </el-submenu>
                <el-menu-item  v-if="!chilItem.children" :key="chilndex" :index="`${index.toString()}-${chilndex.toString()}`" @click="jump(chilItem)" >
                    <i class="iconfont" :class="chilItem.icon"></i>
                    <span>{{chilItem.name}}</span>
                </el-menu-item>
            </template>
        </el-submenu>
        <el-menu-item :key="index" :index="index.toString()" v-if="!item.children">
            <i class="iconfont" :class="item.icon"></i>
            <span>{{item.name}}</span>
        </el-menu-item>
    </template>
</el-menu>
  </div>
</template>

<script>

export default {
  // 定义属性
  data() {
    return {
      categoryArr:[
        {
            name:'分类',
            icon:'icon-fenlei',
            path:'',
            children:[
                {
                    name:'学习笔记',
                    icon:'',
                    path:'/article',
                    children:[
                        {
                            name:'开发项目',
                            icon:'',
                            path:'/article'
                        }
                    ]
                },
                {
                    name:'默认分类',
                    icon:'',
                    path:'/article'
                }
            ]
        },{
            name:'友链',
            icon:'icon-pengyou',
            path:''
        }
      ]
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
    jump(item){
        this.$router.push({
            path: `${item.path}/${2}`
        })
    },
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
}
</script>

<style lang='scss' scoped>
  .leftSideForm{
    border-bottom: 1px solid #fff;
    &-title{
        margin: 15px 0px 10px;
        padding: 0px 15px;
        color: #98a6ad;
        font-size: 14px;
    }
  }
</style>