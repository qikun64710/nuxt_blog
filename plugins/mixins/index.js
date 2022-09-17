import Vue from 'vue'
import test from './modules/test.js'

const mixinsData = { test }

Object.keys(mixinsData).forEach(key => {
    if (!Vue[`__my_${key}__`]) {
        Vue[`__my_${key}__`] = true
        Vue.mixin(mixinsData[key])
    }
});