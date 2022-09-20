<template>
    <div class="leftSideForm">
        <ul>
            <div class="leftSideForm-title">导航</div>
            <li
                v-for="(item, index) in menuList"
                :key="index"
                :class="{active: item.path === activePath}"
                @click="activePath = item.path"
            >
                <nuxt-link :to="item.path" class="menu-child">
                    <i :class="item.icon" class="icon iconfont"></i>
                    <div class="title">
                        {{ item.name }}
                    </div>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    components:{},
  // 定义属性
  data() {
    return {
        activePath: '',
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
    ul{
        .leftSideForm-title{
            margin: 15px 0px 10px;
            padding: 0px 15px;
            color: #98a6ad;
            font-size: 12px;
        }
        .active{
            background: rgba(0,0,0,.05);
            color: #333333;
            i{
                color: #333333;
            }
        }
        li{
            a{
                padding: 10px 20px;
                display: flex;
                align-items: center;
                i{
                    opacity: .9;
                    margin-right: 5px;
                }
            }
            &:hover{
                background: rgba(0,0,0,.05);
                color: #333333;
                i{
                    color: #333333;
                }
            }
        }
    }
  }
</style>