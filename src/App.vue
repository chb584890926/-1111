<template>
  <div id="app">
     <headers></headers>
     
     <keep-alive>
      <transition name="list" mode="out-in">
        
        <router-view></router-view>
        
      </transition>
      
     </keep-alive>
      <footers></footers>
  </div>
</template>

<script>
import headers from './components/layouts/header'
import footers from './components/layouts/footer'
export default {
  name: 'App',
  components:{
     headers,
    footers,
  },
  created(){
    try {
      document.body.removeChild(document.getElementById('app-loader'))
    } catch (e) {
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
ul li{
  list-style: none;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
