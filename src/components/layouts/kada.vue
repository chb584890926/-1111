<template>
  <div class="container problem">
    <div class="header">
      <p>Problem List</p>
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>level</th>
            <th>Total</th>
            <th>AC Rate</th>
          </tr>
        </thead>
        <tbody ref="tbody">
          <tr>
            <td>
              <router-link to="/problem/1">1</router-link>
            </td>

            <td>
              <router-link to="/problem/1">A+B Problem</router-link>
            </td>

            <td>
              <button type="button" class="btn btn-info">Mid</button>
            </td>
            <td>3450</td>
            <td>53.45%</td>
          </tr>
          <tr  class="display">
            <td>
              <router-link to="/problem/2">1</router-link>
            </td>

            <td>
              <router-link to="/problem/2">A+B Problem</router-link>
            </td>
            <td>
              <button type="button" class="btn btn-info">Mid</button>
            </td>
            <td>3450</td>
            <td>53.45%</td>
          </tr>
          <tr  class="display">
            <td>
              <a href>1</a>
            </td>

            <td>
              <a href>A+B Problem</a>
            </td>
            <td>
              <button type="button" class="btn btn-info">Mid</button>
            </td>
            <td>3450</td>
            <td>53.45%</td>
          </tr>
          <tr  class="display">
            <td>
              <a href>1</a>
            </td>

            <td>
              <a href>A+B Problem</a>
            </td>
            <td>
              <button type="button" class="btn btn-info">Mid</button>
            </td>
            <td>3450</td>
            <td>53.45%</td>
          </tr>
          <tr  class="display">
            <td>
              <a href>1</a>
            </td>

            <td>
              <a href>A+B Problem</a>
            </td>
            <td>
              <button type="button" class="btn btn-info">Mid</button>
            </td>
            <td>3450</td>
            <td>53.45%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props:['index'],
  data() {
    return {
        trs:[],
    };
  },
  methods:{
      
  },
  mounted(){
     this.trs = this.$refs.tbody.children
    console.log(this.$route.query.id);
    
    if (this.$route.query.id == undefined) {
      
    }else{
      this.trs[this.$route.query.id].classList.remove("display")
    
        this.trs[this.$route.query.id+1].classList.remove("display")
    }
     
      //console.log(this.index);
      
  },
  computed:{
    indexs(){
      return this.index
    }
  }
};
</script>
<style scoped>
.container {
  padding: 0;
}
.problem {
  height: 2000px;
  background-color: #f5f5f5;
}
.header {
  height: 67.6px;
  background-color: white;
}
.header p {
  line-height: 67.6px;
  font-size: 22px;
  margin-left: 20px;
}
table {
  width: 100%;
}
table thead th {
  background: #f5f5f5;
  padding: 0 10px;
  text-align: left;
  height: 35px;
  padding-left: 50px;
}
table tbody td {
  padding: 10px;
  padding-left: 50px;
  text-align: left;
  border-bottom: 1px solid #d3d2d2;
  height: 47px;
}
table tbody tr{
    background-color: #fff;
}
.btn-info {
  padding: 0;
  width: 36px;
  height: 22px;
}
a {
  text-decoration: none;
  color: black;
}
a:hover {
  color: #99ccff;
}
.display{
    text-decoration:line-through;
    background-color: #f5f5f5 !important;
    pointer-events:none;
}
</style>