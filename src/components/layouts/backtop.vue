<template>
    <div class="backtop" @click="actami(0)">
        <img src="@/assets/img/timg (1).jpg" alt="">
    </div>
</template>
<script>
export default {
    name:"cart",
    data(){
        return{
            scrollTop : 0
        }
    },
    methods:{
        scroll(){
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        },
        actami(target){
            let that = this
            let timer = setInterval(() => {
                //that.scrollTop --
                    that.scrollTop += -70
                    console.log(that.scrollTop);
                    if (target >= that.scrollTop) {
                        clearInterval(timer)
                    }
                window.scrollTo(0,that.scrollTop)
            }, 10);
        }
    },
    mounted(){
        window.addEventListener("scroll",this.scroll)
    },
}
</script>
<style scoped>
.backtop{
    position: fixed;
    bottom: 52px;
    right: 200px;
}
.backtop img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
}
</style>