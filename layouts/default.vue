<template>
    <div class="layout_css">
        <navBar></navBar>
        <div class="layout_content">
            <left-side class="layout_leftSide"></left-side>
            <div class="layout_content-right">
                <nuxt class="layout_main"></nuxt>
                <!-- <right-side class="layout_rightSide"></right-side> -->
            </div>
        </div>
    </div>
</template>
<script>
import navBar from '../components/appHeader';
import leftSide from '../components/leftSide.vue'
import rightSide from '../components/rightSide.vue'
export default {
    components:{
        navBar,
        leftSide,
        rightSide
    }
}
</script>
<style lang="scss" scoped>
    .layout_css{
        display: flex;
        flex-direction: column;
        height: 100%;
        min-height: 100%;
        padding-top: 60px;
        width: 100%;
        width: 1170px;
        margin: 0px auto;
        background-color: #efefef;
        .layout_content{
            height: 100%;
            display: flex;
            box-shadow: 0 0 4px 3px rgba(0,0,0,0.04);
            .layout_leftSide{
                width: 220px;
            }
            .layout_content-right{
                width: calc(100% - 220px);
                .layout_main{
                    min-height: 100%;
                }
            }
            &-right{
                overflow: auto;
            }
        }
    }
</style>