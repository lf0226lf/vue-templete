<template>
  <div class="header">
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col class="el-col-auto">
        <span @click="toggle()">
          <i
            :class="{'el-icon-s-fold':this.$store.state.Heade.fold,'el-icon-s-unfold':this.$store.state.Heade.unfold}"
          ></i>
        </span>
      </el-col>
      <el-col class="el-col-auto">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px;cursor:pointer;"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    toggle: function() {
      if (document.body.clientWidth >= 1024) {
        this.$store.state.Heade.fold_fixed = false;
        this.$store.state.Heade.fold = !this.$store.state.Heade.fold;
        this.$store.state.Heade.unfold = !this.$store.state.Heade.unfold;
      } else {
        this.$store.state.Heade.fold_fixed = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/components/header";
</style>
