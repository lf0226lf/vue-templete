<template>
  <el-breadcrumb separator="/" style="margin-bottom:20px;">
    <el-breadcrumb-item v-for="item in breadList" :to="{path:item.path}" :key="item.name">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
    created () {
        this.getBreadcrumb()
    },
    data () {
        return {
            breadList: []
        }
    },
    watch: {
        $route () {
            this.getBreadcrumb()
        }
    },
    methods: {
        getBreadcrumb () {
            let matched = this.$route.matched.filter(item => item.name)
            this.breadList = matched
        }
    }
};
</script>

<style lang="scss" scoped>
</style>