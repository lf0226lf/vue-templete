<template>
  <div class="h-100">
    <div class="logo" @click="sidebarHide()">
      <router-link to="dashboard">
        <img src="../assets/images/logo-icon.png" class="logo-icon" alt="logo icon" />
        <h5 class="logo-text">vuetemplete</h5>
      </router-link>
    </div>
    <div class="sidebar-menu">
      <!-- <el-collapse v-model="activeNames" @change="handleChange"> -->
      <el-collapse @change="handleChange">
        <el-collapse-item name="1">
          <template slot="title">
            基本
            <!-- <i class="header-icon el-icon-info"></i> -->
          </template>
          <div>
            <ul class="menu-list" @click="sidebarHide()">
              <!-- <li>
                <router-link active-class="active" class="nav-link" to="main">按钮</router-link>
              </li> -->
              <li>
                <router-link active-class="active" class="nav-link" to="button">按钮</router-link>
              </li>
              <li>
                <router-link active-class="active" class="nav-link" to="link">文字链接</router-link>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template slot="title">
            表单
            <!-- <i class="header-icon el-icon-info"></i> -->
          </template>
          <div>
            <ul class="menu-list" @click="sidebarHide()">
              <li>
                <router-link active-class="active" class="nav-link" to="input">输入框</router-link>
              </li>
              <li>
                <router-link active-class="active" class="nav-link" to="datetimepicker">日期时间选择器</router-link>
              </li>
            </ul>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title">
            数据
            <!-- <i class="header-icon el-icon-info"></i> -->
          </template>
          <div>
            <ul class="menu-list" @click="sidebarHide()">
              <li>
                <router-link active-class="active" class="nav-link" to="table">表格</router-link>
              </li>
            </ul>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // activeNames: ["1"]
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    sidebarHide: function(){
      this.$store.state.Heade.fold_fixed = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/components/aside";
</style>
