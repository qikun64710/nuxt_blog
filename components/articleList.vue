<template>
  <div class="articleLi">
    <div class="articleContent">
     <arhead>
        <div class="articleLis">
          <nuxt-link v-for="(item, index) in articleLi"  :key="index" :to="`/article/${item.id}`">
            <list :article='item'></list>
          </nuxt-link>
        </div>
     </arhead>
    </div>
    <!-- <right-side class="layout_rightSide"></right-side> -->
  </div>
</template>

<script>
import arhead from './head.vue'
import list from "./list.vue";
export default {
    props:['articleLi'],
    components: {
        list,
        arhead
    },
    // 定义属性
    data() {
        return {};
    },
    // 生命周期 - 创建完成（可以访问当前this实例）
    created() {
      
    },
    // 生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    // 监控data中的数据变化
    watch: {},
    // 方法集合
    methods: {
      showDetail(id){
        this.$router.push({
            path: `/article/${id}`
        })
      }
    },
    beforeCreate() {}, // 生命周期 - 创建之前
    beforeMount() {}, // 生命周期 - 挂载之前
    beforeUpdate() {}, // 生命周期 - 更新之前
    updated() {}, // 生命周期 - 更新之后
    beforeDestroy() {}, // 生命周期 - 销毁之前
};
</script>

<style lang="scss" scoped>
.articleLi {
  background-color: #f1f3f4;
  display: flex;
  min-height: 100%;
  .articleContent {
    flex: 1;
  }
  .layout_rightSide{
      width: 240px;
  }
}
</style>
