import Vue from 'vue'
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

//querySelectorAll 获取文档中所有的 指定 元素

Vue.directive('highlight',function(el){
    let blocks = el.querySelectorAll("pre code");
    blocks.forEach(block => {
        hljs.highlightElement(block)
    })
})