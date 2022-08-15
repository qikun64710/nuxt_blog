<template>
    <div class="header clearfix">
        <nav class="nav_header">
            <div class="site-branding">🍅 番茄炒蛋</div>
            <!-- <div class="head-search">
                <el-input  size="small" placeholder="请输入内容">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div> -->
            <!-- <ul class="header-right">
                <li>用户登录</li>
            </ul> -->
        </nav>
    </div>
</template>
<script>
export default {
    name:'navBar',
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
    .header{
        width: 100%;
        max-width: 1170px;
        height: 60px;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        top:0;
        background: rgba(255,255,255,.95);
        box-shadow: 0 1px 40px -8px rgba(0, 0, 0,0.1);
        z-index: 999;
        display: flex;
        align-items: center;
        .nav_header{
            display: flex;
            align-content: center;
            width: 100%;
            position: relative;
            .site-branding{
                padding-left: 10px;
                width: 100px;
                line-height: 32px;
            }
            .head-search{
                width: 300px;
            }
            .header-right{
                display: flex;
                align-items: center;
                position: absolute;
                right: 10px;
            }
        }
    }
</style>