<template>
  <el-container class="h-100" v-bind:class="[{'aside-hide':this.$store.state.Heade.unfold},{'aside-show':this.$store.state.Heade.fold_fixed}]">
    <el-aside class="sidebar-wrapper">
      <div class="sidebar-shadow" @click="sidebarHide()"></div>
      <v-aside />
    </el-aside>
    <el-container class="content-wrapper">
      <el-header class="navbar navbar-expand fixed-top">
        <v-header />
      </el-header>
      <el-main class="container-fluid">
        <router-view name="main" />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import aside from "../views/aside";
import header from "../views/header";
export default {
  components: {
    "v-aside": aside,
    "v-header": header
  },
  mounted() {
    window.onload = () => {
      return (() => {
        if (document.body.clientWidth < 1024) {
          this.$store.state.Heade.fold = false;
          this.$store.state.Heade.unfold = true;
        } else {
          this.$store.state.Heade.fold = true;
          this.$store.state.Heade.unfold = false;
        }
      })();
    };
    window.onresize = () => {
      return (() => {
        if (document.body.clientWidth < 1024) {
          this.$store.state.Heade.fold = false;
          this.$store.state.Heade.unfold = true;
        } else {
          this.$store.state.Heade.fold = true;
          this.$store.state.Heade.unfold = false;
        }
      })();
    };
  },
  methods: {
    sidebarHide: function() {
      this.$store.state.Heade.fold_fixed = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/views/layout";
</style>