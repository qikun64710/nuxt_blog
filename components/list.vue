<template>
  <div class="articleList">
      <div v-if="article && article.banner" class="articleList-left">
            <el-image
                style="border-radius: 10px;"
                :src="article && article.banner"
                fit="cover">
            </el-image>
      </div>
      <div class="articleList-right">
          <h2 class="oneOmit">{{article && article.title}}</h2>
          <p class="summary">{{article && article.description}}</p>
          <div class="line"></div>
          <div class="articleList-right-bottom">
              <li>
                  <i class="iconfont icon-gerentouxiang_o"></i>
                  admin
              </li>
              <li>
                  <i class="iconfont icon-shijian_o"></i>
                  2021 年 05 月 15 日
              </li>
              <li>
                  <i class="iconfont icon-pinglun"></i>
                  暂无评论
              </li>
          </div>
      </div>
  </div>
</template>

<script>

export default {
    name:'articleList',
    props:{
        article:{
            type:Object,
            default(){
                return {}
            }
        }
    },
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
    methods: {},
    beforeCreate() {}, // 生命周期 - 创建之前
    beforeMount() {}, // 生命周期 - 挂载之前
    beforeUpdate() {}, // 生命周期 - 更新之前
    updated() {}, // 生命周期 - 更新之后
    beforeDestroy() {}, // 生命周期 - 销毁之前
}
</script>

<style lang='scss' scoped>
    .articleList{
        margin-bottom: 20px;
        border-radius: 6px;
        transition: all .2s ease;
        overflow: hidden;
        background: #fff;
        &:hover{
            box-shadow: 0 5px 10px 5px rgba(163, 97, 97, 0.1);
        }
        &-left{
            position: relative;
            width: 30%;
            float: left;
            padding: 15px 0 15px 15px;
            a{
                color: inherit;
                text-decoration: none;
                cursor: pointer;
                word-break: break-all;
                img{
                    width: 100%;
                    height: 160px;
                    position: relative;
                    display: block;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                }
            }
        }
        &-right{
            float: left;
            width: 70%;
            padding: 30px 50px 15px 50px;
            h2{
                font-size: 22px;
                padding-bottom: 1px;
            }
            p{
                height: 60px;
                overflow: hidden;
                line-height: 2em;
                color: #a0a0a0;
                word-break: break-all;
                margin: 0 0 10px;
            }
            .line{
                border-color: rgba(237,241,242,.6);
                border-bottom: 1px solid rgba(222,229,231,.45);
                margin-top: 15px;
                margin-bottom: 15px;
                width: 100%;
                height: 2px;
                margin: 10px 0;
                overflow: hidden;
                font-size: 0;
            }
            &-bottom{
                font-size: 13px;
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: #a0a0a0;
                padding-left: 0;
                margin-left: -5px;
                list-style: none;
                li{
                    display: inline-block;
                    padding-right: 5px;
                    padding-left: 5px;
                    i{
                        margin-right: 10px;
                    }
                }
            }
        }
    }
</style>