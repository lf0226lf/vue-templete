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
          <div>
            <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
            <el-link type="primary">主要链接</el-link>
            <el-link type="success">成功链接</el-link>
            <el-link type="warning">警告链接</el-link>
            <el-link type="danger">危险链接</el-link>
            <el-link type="info">信息链接</el-link>
          </div>
        </el-row>
      </el-card>
    </el-col>
    <el-col :span="24">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>禁用状态</span>
        </div>
        <el-row>
          <el-link disabled>默认链接</el-link>
          <el-link type="primary" disabled>主要链接</el-link>
          <el-link type="success" disabled>成功链接</el-link>
          <el-link type="warning" disabled>警告链接</el-link>
          <el-link type="danger" disabled>危险链接</el-link>
          <el-link type="info" disabled>信息链接</el-link>
        </el-row>
      </el-card>
    </el-col>
    <el-col :span="24">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>下划线</span>
        </div>
        <el-row>
          <el-link :underline="false">无下划线</el-link>
          <el-link>有下划线</el-link>
        </el-row>
      </el-card>
    </el-col>
    <el-col :span="24">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>图标</span>
        </div>
        <el-row>
          <el-link icon="el-icon-edit">编辑</el-link>
          <el-link>
            查看
            <i class="el-icon-view el-icon--right"></i>
          </el-link>
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
  }
};
</script>

<style lang="scss" scoped>
</style>
