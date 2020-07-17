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
          <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import Breadcrumb from "../components/breadcrumb"
export default {
  components:{
    Breadcrumb
  },
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: "",
      value3: ""
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
