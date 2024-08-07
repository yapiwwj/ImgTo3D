<script setup lang="ts">
import Header from '@/components/header.vue'
import Aside from "@/components/aside.vue";
import { onMounted } from "vue";
onMounted(() => {
  const storedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('theme', storedTheme);
});
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside >
         <Aside />
        </el-aside>
        <el-main>
        <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
@import url('../../styles/home/index.scss');
</style>