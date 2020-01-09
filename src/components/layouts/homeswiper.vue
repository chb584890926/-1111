<template>
<div class="homeswiper container">
  <swiper ref="swiper">
    <swiper-item>
      <a>
        <img src="@/assets/img/banner2.png"/>
      </a>
    </swiper-item>
        <swiper-item>
      <a>
        <img src="@/assets/img/banner2.png"/>
      </a>
    </swiper-item>
  </swiper>
</div>
</template>
<script>
import { Swiper, SwiperItem } from "../swiper/index";
export default {
  components: {
    Swiper,
    SwiperItem
  },
  data(){
      return{
          arr:[
              
          ]
      }
  }
};
</script>
<style scoped>
.container{
  height: 0px;
  padding-bottom: 500px
}
</style>