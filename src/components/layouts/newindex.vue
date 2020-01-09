<template>
    <div class="box">
        <div class="left">
            <img src="@/assets/img/bottom-logo.png" alt="">
            <p class="p1">学编程，找小橙</p>
            <p class="p2">专业的7-15岁青少年编程教育</p>
        </div>
        <div class="right">
            <div class="vx">
                <img src="@/assets/img/erweima-2.png" alt="">
                <p>微信公众号</p>
            </div>
            <div class="vx">
                <img src="@/assets/img/erweima-2.png" alt="">
                <p>课程顾问微信号</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.box{
    height: 254px;
    background-color: #f6f6f6;
}
.left{
    padding-top: 20px;
    width: 300px;
    float: left;
    margin-left: 150px
}
.left img{
    width: 191px;
    height: 67px;
}
.right{
    float: right;
    width: 400px;
    height: 100%px;
    text-align: center;
    margin-right: 100px;
}
.p1{
    font-size: 26px;
    color: #333;
    line-height: 26px;
    padding: 20px 0 12px 0;
    font-weight: bold
}
.p2{
    font-size: 18px !important;
    line-height: 30px !important;
    color: #666;
}
.vx{
    height: 100%;
    float: left;
    font-weight: bold;
    margin:  0 20px;
}
.right img{
    width: 127px;
    height: 127px;
    margin-top: 40px
}
.aa{
    float: right;
}
.vx p{
    font-size: 18px;
    line-height: 47px;
    color: #666;
    text-align: center;
}
</style>