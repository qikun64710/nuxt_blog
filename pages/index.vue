<template>
  <div class="home" id="home">
    <articleList :articleLi="articleLi"></articleList>
  </div>
</template>

<script>
import articleList from '@/components/articleList.vue'
export default {
  name: 'IndexPage',
  provide() {
    return {
      breadcrumb: ''
    }
  },
  components: {
    articleList
  },
  data() {
    return {
      articleLi: [],
      page: {
        pageSize: 10,
        current: 1
      },
      total: 0
    }
  },
  created() {
    this.getArticleList()
  },
  mounted() {
    window.addEventListener('scroll',this.handleScroll,true)
  },
  methods: {
    handleScroll(e) {
      let dom = document.querySelector('.home')
      if (dom) {
        //文档内容实际高度（包括超出视窗的溢出部分）
        let scrollHeight = dom.scrollHeight
        //滚动条滚动距离
        let scrollTop = e.target.scrollTop;
        //窗口可视范围高度
        let clientHeight = dom.clientHeight || dom.clientHeight
        if(clientHeight + scrollTop >= scrollHeight - 10){
          if(this.page.pageSize > this.page.total ) return;
          this.page.pageSize += 10
          this.getArticleList()
        }
      }
    },
    getArticleList() {
      const { pageSize, current } = this.page
      this.$axios.post("/article/findAllArticle", {
      pageSize,
      current
    }).then(r=>{
      if (r.code === 200) {
        this.articleLi = r.result.list
        this.page.total = r.result.page.total || 0
      }
    })
    }
  }
}
</script>
<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 100%;
    // background: url('../static/image/header-bg.jpg');
    // background-repeat: no-repeat;
    // background-position: center center;
    // background-size: cover;
    // background-attachment: fixed;
  }
</style>
