<template>
  <div class="rightSide">
    <el-tabs class="rightSide-tabs" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane name="hotArticles" class="test" >
            <span slot="label"><i class="iconfont icon-dianzan"></i> </span>
        </el-tab-pane>
        <el-tab-pane  name="newComments">
            <span slot="label"><i class="iconfont icon-pinglun"></i></span>
        </el-tab-pane>
        <el-tab-pane  name="randomArticle">
            <span slot="label"><i class="iconfont icon-liwu"></i> </span>
        </el-tab-pane>
    </el-tabs>
    <div class="tabs_content">
        <h5>{{dataInfo && dataInfo.title}}</h5>
        <ul>
            <li class="list-group-item" v-for="(item,index) in dataInfo.list" :key="index">
                <div class="pull-left thumb-sm m-r">
                    <img :src="item.img" alt="">
                </div>
                <div class="clear list-li-right">
                    <div class="li_title">{{item.title}}</div>
                    <div v-if="item.readNum" class="li_readNum li-txt">
                        <i class="iconfont icon-yanjing1"></i>
                        <span>{{item.readNum}}</span>
                    </div>
                    <div v-if="item.content" class="li_content li-txt">{{item.content}}</div>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>

export default {
  // 定义属性
  data() {
    return {
        activeName:'hotArticles',
        dataInfo:'',
        articleArr:{
            hotArticles:{
                title:'热门文章',
                list:[
                    {
                        img:'https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/4.jpg',
                        title:'handsome —— 一款typecho主题',
                        readNum:100
                    },
                    {
                        img:'https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/4.jpg',
                        title:'Focus——不只是RSS订阅器',
                        readNum:100
                    },
                    {
                        img:'https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/4.jpg',
                        title:'2019北邮考研我的个人经历',
                        readNum:100
                    },
                    {
                        img:'https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/4.jpg',
                        title:'再见，2016',
                        readNum:100
                    },
                    {
                        img:'https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/4.jpg',
                        title:'Leaf — A Typecho Theme',
                        readNum:100
                    },
                ]
            },
            newComments:{
                title:'最新评论',
                list:[
                    {
                        img:'https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/4.jpg',
                        title:'瞭月',
                        content:'v8.4.0，我来啦 ，冲鸭'
                    },
                    {
                        img:'https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/4.jpg',
                        title:'加油鸭',
                        content:'三该评论仅登录用户及评论双方可见',
                    },
                    {
                        img:'https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/4.jpg',
                        title:'闻君心',
                        content:'该评论仅登录用户及评论双方可见'
                    },
                    {
                        img:'https://www.ihewro.com/usr/themes/handsome/assets/img/sj2/4.jpg',
                        title:'三石',
                        content:'该评论仅登录用户及评论双方可见'
                    },
                ]
            },
            randomArticle:{
                title:'随机文章',
                list:[
                    {
                        
                    }
                ]
            }
        }
    }
  },
  asyncData(context) {
    this.dataInfo = this.articleArr[this.activeName]
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.dataInfo = this.articleArr[this.activeName]
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    handleClick(){
        this.dataInfo = this.articleArr[this.activeName]
    }
  },
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
}
</script>

<style lang='scss' scoped>
  .rightSide{
    background-color: #f9f9f9;
    height: 100%;
    overflow: auto;
    .rightSide-tabs{
        margin-top: 10px;
        /deep/ .el-tabs__nav-scroll{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
    .rightSide-tabs {
        /deep/.el-tabs__header{
            margin: 0px;
        }
        /deep/.el-tabs__item:hover{
            color: #555555;
        }
        /deep/.el-tabs__item{
            color: #777777;
        }
        /deep/.el-tabs__item /deep/.is-active{
            color: #555555;
        }
        /deep/ .el-tabs__active-bar{
            background-color: #333333;
        }
    }
    .tabs_content{
        padding: 20px;
        h5{
            font-size: 16px;
            color: #777777;
            margin: 0px 0px 10px;
        }
        ul{
            .list-group-item{
                position: relative;
                display: block;
                padding: 10px 0px;
                margin-bottom: -1px;
                padding-right: 15px;
                background-color: transparent;
                &:first-child{
                    border-top-left-radius: 4px;
                    border-top-right-radius: 4px;
                }
                .thumb-sm{
                    display: inline-block;
                    width: 40px;
                    height: auto;
                    img{
                        border: 2px solid #fff;
                        height: auto;
                        vertical-align: middle;
                        box-shadow: 2px 2px 3px #e1e1e1;
                        width: 40px;
                        max-width: 100%!important;
                        border-radius: 20%;
                    }
                }
                .m-r{
                    margin-right: 15px;
                }
                .pull-left{
                    float: left!important;
                }
                .list-li-right{
                    .li_title{
                        color: #777777;
                        font-size: 14px;
                        opacity:.8;
                    }
                    .li_readNum{
                        i{
                            margin-right: 5px;
                        }
                    }
                    .li-txt{
                        font-size: 13px;
                        color: #a0a0a0;
                    }
                }
            }
        }
    }
  }
</style>