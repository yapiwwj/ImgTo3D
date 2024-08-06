<script setup lang="ts">
import Header from "@/layout/components/header.vue";
import Layout from "@/layout/components/layout.vue"; //封面页
import Introduce from "@/layout/components/introduce.vue";
import ToThree from "@/layout/components/toThree.vue";
import Start from "@/layout/components/start.vue";
import Community from "@/layout/components/community.vue";
import Support from "@/layout/components/support.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <Layout />
        <Introduce />
        <ToThree />
        <Start />
        <Community />
        <Support />
      </el-main>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.el-header {
  z-index: 20;
  position: fixed;
  top: 10px;
  left: 0;
  width: 100%;
  background: transparent;
  padding: 0;
}

.el-main {
  padding: 0;
}
</style>
