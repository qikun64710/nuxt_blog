<template>
  <div class="article">
    <div class="articleContent">
      <arhead>
        <!-- 文章banner -->
        <div class="entry-thumbnail" v-if="articleInfo.banner">
          <div class="item-thumb" :style="`background: url(${articleInfo.banner});`"></div>
        </div>
        <div class="articleLis">
          <!-- 文章正文 -->
          <vue-markdown v-highlight class="wrapper-lg  md-preview vuepress-theme md-scrn" id="md-editor-v3-preview" :source="articleInfo.content"></vue-markdown>
          <!-- <vue-markdown  class="wrapper-lg" id="nice"  :source="articleInfo.content"></vue-markdown> -->
          <!-- <div class="wrapper-lg md-preview vuepress-theme md-scrn" id="nice" v-html="articleInfo.content"></div> -->
        </div>
      </arhead>
    </div>
    <right-side class="layout_rightSide"></right-side>
  </div>
</template>

<script>
import arhead from "./head.vue";
export default {
  async asyncData({params,$axios}) {
        let { data } = await $axios.post(`http://169.254.254.183:3001/api/article/findArticle?id=${params.id}`) 
        return {
            articleInfo:data.data
        }
    },
  components: {
    arhead,
  },
  // 定义属性
  data() {
    return {};
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  computed: {
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
};
</script>

<style lang="scss" scoped>
.article {
    background-color: #f1f3f4;
    display: flex;
    // min-height: 100%;
    // min-width: 100%;
    .articleContent {
        flex: 1;
        .entry-thumbnail {
          position: relative;
          .item-thumb {
            min-height: 250px;
            position: relative;
            display: block;
            background-position: 50% 50% !important;
            background-size: cover !important;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
          }
        }
        .articleLis{
            background-color: #ffffff;
            border-radius: 4px;
            .wrapper-lg{
              padding: 30px;
              font-size: 16px;
              position: relative;
              word-break: break-all;
              width: 670px;
            }
        }
    }
    .layout_rightSide{
      width: 240px;
    }
}
</style>
