<template>
  <div style="padding: 60px 0">
    <div v-if="this.ifAdd">
      <el-card class="card">
        <div>添加商品</div>
        <el-form ref="form" :model="form" label-width="70px" style="margin-top:20px;">
           <el-form-item label="商品名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="商品图片">
            <el-input v-model="form.imagUrl"></el-input>
          </el-form-item>
          <el-form-item label="商品类别">
            <el-select v-model="form.categoryid" style="width:390px" placeholder="请选择">
              <el-option label="家具器具" value="1" />
              <el-option label="电子产品" value="2" />            
              <el-option label="户外必备" value="3" />
              <el-option label="当下最热" value="4" />
              <el-option label="海外放心" value="5" />
              <el-option label="出行穿搭" value="6" />
              <el-option label="点心零食" value="7" />
              <el-option label="图书文娱" value="8" />
              <el-option label="国际名牌" value="9" />
            </el-select>
          </el-form-item>
          <el-form-item label="商品总量">
            <el-input v-model="form.num"></el-input>
          </el-form-item>
          <el-form-item label="商品价格">
            <el-input v-model="form.price"></el-input>
          </el-form-item>
          <el-form-item label="商品描述">
            <el-input v-model="form.desc"></el-input>
          </el-form-item>
          <el-button type="primary" @click="onSubmit">确定</el-button>
          <el-button @click="notAddProduct">取消</el-button>
        </el-form>
      </el-card>
    </div>
    <div class="block">
      <div style="margin-bottom:20px;">
        <el-button @click="addProduct">添加商品</el-button>
        <el-button @click="back">返回首页</el-button>
      </div>
      <div style="width:1300px; margin-left:100px;">
      <el-table :data="tableData"  class="tb-edit" highlight-current-row style="width: 1200px;" align="center" tooltip-effect="dark">
        <el-table-column prop="id" sortable label="商品编号" width="120"  align="center">
        </el-table-column>
        <el-table-column
              prop="imagUrl"
              width="60"
              align="center">
                <template slot-scope="scope">
                  <img :src="scope.row.imagUrl" style="width: 50px;height: 50px">
                </template>
          </el-table-column>
            </el-table-column>
          <el-table-column
              prop="name"
              label="商品名称"
              width="220"
              align="center">
            <template scope="scope">
                <el-input size="small" v-model="scope.row.name" @change="handleEdit(scope.$index, scope.row)"></el-input> <span>{{scope.row.name}}</span>
            </template>
          </el-table-column>
          <el-table-column
              prop="price"
              label="价格"
              align="center"
              width="100">
            <template slot-scope="scope">
              <el-input size="small" v-model="scope.row.price" @change="handleEdit(scope.$index, scope.row)"></el-input><span>${{(scope.row.price).toFixed(2)}}</span>
            </template>
          </el-table-column>
        <el-table-column prop="num" label="商品总量" width="100" align="center">
          <template slot-scope="scope">
              <el-input size="small" v-model="scope.row.num" @change="handleEdit(scope.$index, scope.row)"></el-input><span>{{scope.row.num}}</span>
            </template>
        </el-table-column>
        <el-table-column prop="categoryName" label="商品类别" align="center" width="200">
          <template slot-scope="scope">
            <el-select v-model="scope.row.categoryName" @change="handleEdit(scope.$index, scope.row)" placeholder="请选择">
              <el-option label="家具器具" value="1" />
              <el-option label="电子产品" value="2" />            
              <el-option label="户外必备" value="3" />
              <el-option label="当下最热" value="4" />
              <el-option label="海外放心" value="5" />
              <el-option label="出行穿搭" value="6" />
              <el-option label="点心零食" value="7" />
              <el-option label="图书文娱" value="8" />
              <el-option label="国际名牌" value="9" />
            </el-select>
          </template>
        </el-table-column> 
        <el-table-column prop= "desc" width="200" label="商品描述" align="center">
          <template slot-scope="scope">
              <el-input size="small" v-model="scope.row.desc" @change="handleEdit(scope.$index, scope.row)"></el-input><span>{{scope.row.desc}}</span>
            </template>
        </el-table-column>
        <el-table-column  width="100" align="center">
            <template slot-scope="scope">
                <el-button @click="deleteRow(scope.row)">删除</el-button>
            </template>
        </el-table-column>
      </el-table>
      </div>
    </div>
  </div>
</template>

<script>
  
  export default {
    name: 'admin',
    data() {
      return {
        tableData: [],
        category:['','家具器具','电子产品','户外必备','当下最热','海外放心','出行穿搭','点心零食','图书文娱','国际名牌'],
        ifAdd: false,
        form: {
          name: '',
          categoryid: null,
          num: null,
          price: null,
          desc: '',
          imagUrl: ''
        }
      }
    },
    mounted() {
      this.showAllProduct()
    },
    methods: {
      showAllProduct(){
        fetch(`/api/ProductServlet?action=showAll`, {
          method: 'GET',
          headers: {
            "Content-Type":"application/json",
          },
        }).then(res => {
          if (res.ok){
            return res.json();
          }
        }).then(res => {
            this.tableData = res
        })
      },
      addProduct(){
        this.ifAdd = true;
      },
      notAddProduct(){
        this.ifAdd = false;
      },
      onSubmit(){
        const data = {
          "id" : 0,
          "name" : this.form.name,
          "categoryid" : this.form.categoryid,
          "num" : this.form.num,
          "price" : this.form.price,
          "desc" : this.form.desc,
          "imagUrl" : this.form.imagUrl
        }
         fetch(`/api/ProductServlet?action=insert`, {
            method: 'POST',
            headers: {
              "Content-Type":"application/json",
            },
            body: JSON.stringify(data)
          }).then(res => {
            if (res.ok){
              this.ifAdd = false;
              this.showAllProduct()
            }
        })
      },
      back(){
          this.$router.push('/')
      },
        deleteRow(row) {
            fetch(`/api/ProductServlet?action=delete&ID=${row.id}`, {
                method: 'GET',
                headers: {
                    "Content-Type":"application/json",
                },
            }).then(res => {
                if (res.ok){
                    this.showAllProduct()
                }
            })
        },
      handleEdit(index, row) {
        const data = {
          "id": row.id,
          "name": row.name,
          "categoryid": row.categoryName,
          "num": row.num,
          "price": row.price,
          "desc": row.desc,
          "imagUrl": row.imagUrl
        }
        fetch(`/api/ProductServlet?action=update`, {
          method: 'POST',
          headers: {
            "Content-Type":"application/json",
          },
          body: JSON.stringify(data)
        }).then(res => {
          if (res.ok){
            this.showAllProduct()
          }
        })
      },
    }
  };
</script>

<style scoped>
  .ChoiceAll {
    margin-top: 30px;
  }
  .block{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  p {
    font-size: 30px;
  }
  .card{
    position: absolute;
    width: 500px;
    margin: 100px 500px;
    z-index: 999;
  }
</style>