<template>
  <div class="personality wrapper">
      <div class="personality-head_portrait">
          <img class="img-circle" src="https://www.ihewro.com/usr/uploads/2020/02/863730882.jpg" alt="">
      </div>
      <div class="motto">
          <span class="block motto-title">欢欢名言</span>
          <span class="motto-des block">至高至明日月，至亲至疏夫妻</span>
      </div>
  </div>
</template>

<script>

export default {
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
  .personality{
      position: relative;
      border-bottom: 1px solid #fff;
      &-head_portrait{
        img{
            width: 96px;
            display: block;
            margin: 0 auto;
        }
      }
      .motto{
          &-title{
            color: #777777;
            margin-top: 10px;
            text-align: center;
            font-weight: 700;
          }
          &-des{
              color: #98a6ad;
              font-size: 12px;
              text-align: center;
              margin-top: 10px;
          }
      }
  }
</style>