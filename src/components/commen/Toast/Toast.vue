<template>
  <transition-group name="list" tag="p">
    <div class="toast" v-show="isshow" key="toast" id="toast">
      <p>{{message}}</p>
    </div>
  </transition-group>
</template>
<script>
export default {
  data() {
    return {
      message: "显示消息",
      duration: "",
      isshow: false
    };
  },
  methods: {
    show(message = "message", color, duration = 1000) {
      let toast = document.getElementById("toast");
      if (color) {
        switch (color) {
          case "error":
            toast.style.backgroundColor = "red";
            break;
          case "nornal":
            toast.style.backgroundColor = "blue";
            break;
          case "waring":
            toast.style.backgroundColor = "yellow";
            break;
        }
      } else {
        toast.style.backgroundColor = "blue";
      }
      this.isshow = true;
      this.message = message;
      setTimeout(() => {
        this.isshow = false;
      }, duration);
    }
  }
};
</script>
<style scoped>
.toast {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  height: 70px;
  line-height: 70px;
  color: white;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-30px);
}
</style>