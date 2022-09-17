import Vue from 'vue'
Vue.prototype.customScrollTop = () => {
    const layout = document.getElementById("layout_content-right");
    layout.scrollTo({
      top: 0,
      behavior: "smooth",
    });
}