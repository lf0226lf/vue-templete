<template>
  <el-row :gutter="25">
    <el-col :span="24">
      <Breadcrumb></Breadcrumb>
      <!-- {{$store.state.Heade.count}}
      <a href="javascript:;" @click="$store.commit('Count')">click</a>-->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>基础用法</span>
          <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
        </div>
        <el-row>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="text-center mt-4 mb-3">
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
          </div>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from "../components/breadcrumb";
export default {
  components: {
    Breadcrumb
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
