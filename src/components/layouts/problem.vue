<template>
  <div class="root">
    <div class="container">
      <div class="top">
        <p class="header">A + B Problem</p>
        <div class="body">
          <p class="heiline">Description</p>
          <p
            class="title"
          >某天GZS漫步在学校新建的小公园，他发现那里建成了一些水池和小河道。我们暂且把它们统一看成水池。假设公园旁有一张小公园的地图，上面仅标识了此处是否是水池，你能帮GZS计算出该地图中一共有几个水池吗。</p>
        </div>
        <div class="body">
          <p class="heiline">Input</p>
          <p class="title">第一行输入一个T(T&lt;= 50), 表示一共有T组测试数据. 接下来T行, 每行为一组由小写字母组成, 长度不超过10^5的字符串.</p>
        </div>
        <div class="body">
          <p class="heiline">Output</p>
          <p class="title">每行一个整数X, 表示该组字符串中所包含的最长回文长度.</p>
        </div>
        <div class="body">
          <div class="samplebody">
            <div class="sample-input">
              <p class="heiline">Sample Input 1</p>
              <pre>
            5
            5
            5
            5
            5
        </pre>
            </div>

            <div class="sample-output">
              <p class="heiline">Sample Output 1</p>
              <pre>
            5
        </pre>
            </div>
          </div>
        </div>
        <div class="body Hint">
          <p class="heiline">Hint</p>
          <div class="Hintcode">
            <p>C 语言实现:</p>
            <pre>
            #include &lt;stdio.h&gt;    
            int main(){
                int a, b;
                scanf("%d%d", &a, &b);
                printf("%d\n", a+b);
                return 0;
            }
          </pre>
          </div>
        </div>
        <div class="body">
          <p class="heiline">Source</p>
          <p class="title">2014级实验室纳新考试</p>
        </div>
      </div>
      <div class="codes">
        <div class="type">
          <span>Language:</span>
            <div class="btn-group">
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                {{dropdown}}
                <span class="caret circil"></span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li>c</li>
                <li>c++</li>
              </ul>
            </div>
        </div>
        <codemirror
          ref="myCm"
          :value="item.content"
          :options="cmOptions"
          @changes="changes"
          class="code"
        ></codemirror>
        <div class="submit">
          <button type="button" class="btn btn-warning submitbtn" @click="submit">submit</button>
        </div>
      </div>
    </div>
    <kada style="display:none" ref="kada" :index="index"></kada>
  </div>
</template>
<script>
import kada from './kada'
import { codemirror } from "vue-codemirror";
require("codemirror/addon/fold/foldcode.js");
require("codemirror/mode/javascript/javascript.js");
require("codemirror/theme/material.css");
require("codemirror/addon/fold/foldgutter.js");
require("codemirror/addon/fold/brace-fold.js");
require("codemirror/addon/fold/xml-fold.js");
require("codemirror/addon/fold/indent-fold.js");
require("codemirror/addon/fold/markdown-fold.js");
require("codemirror/addon/fold/comment-fold.js");
export default {
  components: {
    codemirror,
    kada
  },
  data() {
    return {
      index:'',
      dropdown:'c',
      item: {
        content: ""
      },
      cmOptions: {
        tabSize: 4,
        mode: "text/javascript",
        lineNumbers: true, //显示行号
        theme: "material", //设置主题
        lineWrapping: true, //代码折叠
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        matchBrackets: true //括号匹配
      }
    };
  },
  methods: {
    changes() {},
    submit(){
      //this.$refs.kada.$refs.tbody.children[this.$route.params.id-1].index=1
      //console.log( this.$refs.kada.$refs.tbody.children);
      //this.$refs.kada.$refs.tbody.children[this.$route.params.id].classList.remove("display")
      
      
      this.index = this.$route.params.id-1
      //console.log(this.index);
      this.$router.push({
          path: '/kada',
          query: {
            id: this.$route.params.id-1
          }
      })
    }
  },
  mounted(){
  }
};
</script>
<style scoped>
.root {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
}
.container {
  padding: 20px 0 0 0;
}
.header {
  font-size: 22px;
  padding: 10px;
}
.top {
  height: 1150px;
  background-color: white;
}
.container {
  height: 2000px;
  background-color: #f5f5f5;
}
.body {
  padding: 15px;
}
.heiline {
  height: 24px;
  width: 100%;
  color: #3091f2;
  font-size: 20px;
}
.title {
  color: #495060;
  font-size: 16px;
  padding: 15px;
}
.samplebody {
  display: flex;
}
.sample-input {
  width: 40%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-right: 5%;
}
.sample-output {
  width: 40%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-right: 5%;
}
pre {
  flex: 1;
  align-self: stretch;
  border-style: solid;
  background-color: white;
  padding-left: -20px;
}
.Hintcode {
  width: 100%;
  margin-top: 40px;
  border: 1px solid #f5f5f5;
  padding: 15px;
  border-radius: 2px;
}
.codes {
  height: 438px;
  width: 100%;
  margin-top: 20px;
  background-color: white;
}
.code {
  padding: 30px 20px 20px 20px;
  width: 100%;
  height: 330px;
}
.type {
  padding: 20px 20px 0px 20px;
}
.btn {
  height: 30px;
  margin-left: 5px;
  width: 148px;
  text-align: left;
  line-height: 15px
}
.circil{
  margin-left: 100px; 
}
.submit{
  margin: 10px 0px 20px 1060px;
}
.submitbtn{
   width: 87px!important;
   height: 31px!important;
   text-align: center;
}
</style>