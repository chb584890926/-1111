<template>
  <div class="poation">
    <div class="chessboard">
      <ul id="transverse">
        <li v-for="(item,index) in arr" :key="index">{{item}}</li>
      </ul>
        <ul id="transversetwo">
        <li v-for="(item,index) in arrs" :key="index">{{item}}</li>
      </ul>
    </div>
    <div class="pan">
      <img src="@/assets/img/timg.jpg" alt="">
    </div>
    <div>
    <input type="text" name="" id="circleinput" value="">
    <button @click="confirm">确定</button>
    <li id="circle"></li>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "11",
      arr: [
        -500,
        -450,
        -400,
        -350,
        -300,
        -250,
        -200,
        -150,
        -100,
        -50,
        -0,
        50,
        100,
        150,
        200,
        250,
        300,
        350,
        400,
        450
      ],
      arrs:[],
    };
  },
  created(){
    let newarr = []
    for (let i = this.arr.length-1; i >0; i--) {
      newarr.push(this.arr[i])
    }
      this.arrs = newarr
  },
  mounted() {
    this.app("transverse","left")
    this.app("transversetwo","top")
    this.circle()
  },
  methods: {
    app(id,type) {
      var uls = document.getElementById(id);
      var lis = uls.getElementsByTagName("li");
      if(type == "left"){
      for (let index = 0; index < lis.length; index++) {
        lis[index].style[type] = 35 * index + "px";
        }
      }else{
        for (let index = 0; index < lis.length; index++) {
          let i = index + 1
        lis[index].style[type] = 35 * i + "px";
      }
      }
    },
    circle(){

    },
    confirm(){
     let circleinput = document.getElementById("circleinput"),
     circle = document.getElementById("circle")
     let r = circleinput.value
     circle.style.width= Math.pow(r,2) * 3.14 +"px"
     circle.style.height= Math.pow(r,2) * 3.14+"px"
     console.log(Math.pow(r,2)* 3.14);
     
    }
  }
};
</script>
<style scoped>
.poation {
  width: 700px;
  height: 700px;
  background-color: yellow;
  margin: 50px auto;
  position: relative;
}
.chessboard {
  -webkit-box-shadow: 0.1rem 0.1rem 0.05rem rgba(0, 0, 0, 0.5),
    -0.1rem -0.1rem 0.05rem rgba(0, 0, 0, 0.5);
  box-shadow: 0.1rem 0.1rem 0.05rem rgba(0, 0, 0, 0.5),
    -0.1rem -0.1rem 0.05rem rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0.04rem, black),
      color-stop(0, transparent)
    ),
    -webkit-gradient(linear, left top, right top, color-stop(0.04rem, white), color-stop(0, transparent));
  background-image: -webkit-linear-gradient(black 0.04rem, transparent 0),
    -webkit-linear-gradient(left, black 0.04rem, transparent 0);
  background-image: linear-gradient(red 0.04rem, transparent 0),
    linear-gradient(90deg, red 0.04rem, transparent 0);
  -webkit-background-size: 1rem 1rem;
  background-size: 35px 35px;
}
#transverse {
  position: relative;
}
#transverse li {
  float: left;
  font-size: 8px;
  position: absolute;
}
#transversetwo {
  position: relative;
}
#transversetwo li {
  font-size: 8px;
  position: absolute;
  margin-top: 5px;
}
.pan{
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  left: 50%;
  display: none
}
.pan img{
  width: 100%;
  height: 100%;
}
#circle{
  position: absolute;
 top:0px;
left:0px;
bottom:0px;
right:0px;
  list-style: none;
  border-radius: 50%;
  background-color: blue;
  margin: auto;
}
</style>
