<template>
  <div class="container header">
    <div class="row">
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 logo">
        <img src="@/assets/img/heade-logo_02.png" alt />
      </div>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <ul class="uls">
          <li
            v-for="(item,index) in arr"
            :key="index"
            @mousemove="change(index)"
            :class="{active:index == actindex}"
            @click="scrollto(index)"
          >{{item}}</li>
        </ul>
      </div>
      <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 avatar">
        <img src="@/assets/img/avatar.png" alt />
      </div>
      <!-- Optional: clear the XS cols if their content doesn't match in height -->
      <div class="clearfix visible-xs-block"></div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 iphone">
        <img src="@/assets/img/header-iphone.png" alt />
        <span>13738708773</span>
      </div>
    </div>
  </div>
</template>
<script>
$(function() {});

export default {
  data() {
    return {
      arr: ["首页", "课程体系", "教育观念", "小橙师资", "小橙卡达", "联系我们"],
      actindex: null,
      scrollTop: 0
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scroll);
  },
  methods: {
    change(index) {
      this.actindex = index;
    },
    scroll() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    },
    scrollto(index) {
      let that = this;
      let timer = null
      switch (index) {
        case 0:
          window.scrollTo(0, 0);
                     that.$router.push('/')
          break;
        case 1:
            timer = setInterval(() => {
            that.scrollTop += 70;
            console.log(that.scrollTop);
            if (1456 <= that.scrollTop) {
              clearInterval(timer);
            }
            window.scrollTo(0, that.scrollTop);
          }, 10);
          break;
        case 2:
          timer = setInterval(() => {
            that.scrollTop += 70;
            console.log(that.scrollTop);
            if (2600<= that.scrollTop) {
              clearInterval(timer);
            }
            window.scrollTo(0, that.scrollTop);
          }, 10);
          break;
        case 3:
          timer = setInterval(() => {
            that.scrollTop += 70;
            console.log(that.scrollTop);
            if (3700 <= that.scrollTop) {
              clearInterval(timer);
            }
            window.scrollTo(0, that.scrollTop);
          }, 10);
          break;
          case 4:
            that.$router.push('/kada')
          break;
          case 5:
            that.$toast.show('成功','nornal')
      }
    }
  }
};
</script>
<style scoped>
.uls {
  margin-left: 20px;
}
.uls li {
  float: left;
  font-size: 16px;
  color: #333;
  line-height: 89px;
  width: 80px;
  font-weight: bold;
}
.logo {
  width: 168px;
  height: auto;
  float: left;
}
.avatar {
  text-align: center;
  line-height: 89px;
  padding-left: 30px;
}
.avatar img {
  width: 39px;
  height: 39px;
  border-radius: 50%;
}
.iphone {
  text-align: center;
  line-height: 89px;
}
.iphone span {
  float: right;
  color: #fca242;
  font-size: 24px;
}
.active {
  cursor: pointer;
  color: #fca242 !important;
  font-size: 88px;
}
</style>