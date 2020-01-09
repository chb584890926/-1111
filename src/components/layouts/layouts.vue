<template>
    <div id="home">
       
        <homeswiper></homeswiper>
        <why></why>
        <course></course>
        <idea></idea>
        <teach></teach>
        <smallswiper></smallswiper>
        <honor></honor>
        <honors></honors>
        <newindex></newindex>
        <backtop></backtop>

    </div>
</template>
<script>

import homeswiper from './homeswiper'

import course from './course'
import why from './why'
import teach from './teach'
import idea from './idea'
import smallswiper from './smallswiper'
import honor from './honor'
import honors from './honors'
import newindex from './newindex'
import backtop from './backtop'

export default {
    components:{
   
    homeswiper,
    why,
    course,
    idea,
    teach,
    smallswiper,
    honor,
    honors,
    newindex,
    backtop
    },
    mounted(){
        //console.log(document.body)
        window.addEventListener('scroll', this.scroll)
    },
    methods:{
        scroll(){
        }
    }
}

</script>
<style scoped>

</style>