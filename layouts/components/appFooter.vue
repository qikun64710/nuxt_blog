<template>
  <footer>
    <p class="footerTop">
      Crafted with by 番茄炒蛋
    </p>
    <hr class="fiqqEu">
    <div class="gBIvsm">
      <nav></nav>
      <p> Copyright © 2022 番茄炒蛋 Inc.  </p>
    </div>
  </footer>
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
  .footerTop{
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
  }
  .fiqqEu{
    box-sizing: content-box;
    margin: 0.47rem 0px 0.94rem;
    padding: 0px;
    width: 100%;
    height: 1px;
    background: linear-gradient(to right, rgb(102, 102, 102) 50%, rgba(255, 255, 255, 0) 40%) center top / 3px 1px repeat-x;
    border: 0px;
  }
  .gBIvsm{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
  }
</style>