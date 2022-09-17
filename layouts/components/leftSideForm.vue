<template>
    <div class="leftSideForm">
        <div class="leftSideForm-title">导航</div>
        <el-menu 
            class="el-menu-vertical-demo" 
            background-color='#f9f9f9'
            unique-opened
            active-text-color='#344449'
            text-color='#777777'>
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
                name: '首页',
                icon: 'icon-shouye',
                path: '/',
                id: '1'
            },
            // {
            //     name: '分类',
            //     icon: 'icon-fenlei',
            //     path: '',
            //     id: '2',
            //     child: [ 
            //             {  
            //                 name:'开发笔记',
            //                 icon:'',
            //                 path:'',
            //                 id:'3',
            //                 child: [
            //                     {
            //                         name: 'vue',
            //                         icon: '',
            //                         path: '/article/vue',
            //                         id: '4',
            //                         categoryId: 1
            //                     },
            //                     {
            //                         name: 'react',
            //                         icon: '',
            //                         path: '/article/react',
            //                         id: '5',
            //                         categoryId: 2
            //                     },
            //                     {
            //                         name:'node',
            //                         icon:'',
            //                         path:'/article/node',
            //                         id: '6',
            //                         categoryId: 3
            //                     }
            //                 ]
            //             },
            //         ]
            // }
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