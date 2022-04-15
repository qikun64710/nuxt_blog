<template>
    <div class="leftSideForm">
        <div class="leftSideForm-title">组成</div>
        <el-menu router class="el-menu-vertical-demo" :collapse="false" background-color="rgb(73, 80, 96)" text-color="rgba(255,255,255,0.7)">
            <menu-sun :menuList="menuList" />
        </el-menu>
    </div>
</template>

<script>
import MenuSun from "./menutree.vue";
export default {
    components:{
        MenuSun
    },
  // 定义属性
  data() {
    return {
        menuList: [
            {
                name:'分类',
                icon:'icon-fenlei',
                path:'/1',
                children:[
                    {
                        name:'学习笔记',
                        icon:'/2',
                        path:'/article',
                        children:[
                            {
                                name:'开发项目',
                                icon:'icon-pengyou',
                                path:'/article'
                            }
                        ]
                    },
                    {
                        name:'默认分类',
                        icon:'icon-pengyou',
                        path:'/article'
                    }
                ]
            },{
                name:'友链',
                icon:'icon-pengyou',
                path:'/3'
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