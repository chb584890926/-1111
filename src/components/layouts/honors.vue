<template>
    <div class="honors container">
        <ul class="uls" ref="uls">
            <li class="first">
                <img src="@/assets/img/honor_21.png" alt="">
            </li>
                        <li>
                <img src="@/assets/img/honor_21.png" alt="">
            </li>
                                    <li>
                <img src="@/assets/img/honor_21.png" alt="">
            </li>
                                    <li>
                <img src="@/assets/img/honor_21.png" alt="">
            </li>
                                    <li>
                <img src="@/assets/img/honor_21.png" alt="">
            </li>
                                    <li>
                <img src="@/assets/img/honor_21.png" alt="">
            </li>
                                    <li>
                <img src="@/assets/img/honor_21.png" alt="">
            </li>
                                    <li>
                <img src="@/assets/img/honor_21.png" alt="">
            </li>
                                    <li>
                <img src="@/assets/img/honor_21.png" alt="">
            </li>
                                    <li>
                <img src="@/assets/img/honor_21.png" alt="">
            </li>
                                    <li>
                <img src="@/assets/img/honor_21.png" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            index : 0,
            lis : null
        }
    },
    mounted(){
       //this.lis = this.$refs.uls.children
       //console.log(this.$refs.uls.firstElementChild);
       this.$refs.uls.style.width = this.$refs.uls.firstElementChild.offsetWidth * this.$refs.uls.childElementCount + "px"
       let that = this
       setInterval(() => {
        that.index --
        that.$refs.uls.style.marginLeft = that.index +"px"
        //console.log(that.$refs.uls.firstElementChild);
        if (Math.abs(that.index) >= 286) {
        that.$refs.uls.appendChild(that.$refs.uls.firstElementChild)
        that.$refs.uls.style.marginLeft = 0
        that.index = 0
        }
       }, 30);
    }
}
</script>
<style scoped>
.honors{
    height: 204px;
    background-color: #f6f6f6;
    margin-bottom: 50px;
    overflow: hidden;
}
.uls{
    line-height: 204px;
    height: 204px;
}
.uls li{
    width: 226px;
    float: left;
    margin: 0 30px;
}
.uls li :first-child{
    background-color: blue;
}
</style>