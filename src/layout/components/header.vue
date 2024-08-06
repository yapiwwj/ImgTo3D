<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const navigateList = ref([
  { id: 0, name: "首页", path: "/" },
  { id: 1, name: "关于我们", path: "/about" },
  { id: 2, name: "订阅方案", path: "/Pricing" },
  { id: 3, name: "常见问题", path: "/FAQs" },
]);
</script>

<template>
  <div class="header">
    <header>
      <ul>
        <li v-for="item in navigateList" :key="item.id">
          <span @click="router.push(item.path)">{{ item.name }}</span>
        </li>
      </ul>
      <ul>
        <li>
          <el-button type="primary" @click="router.push('/home')">免费开始</el-button>
        </li>
        <li>中文</li>
      </ul>
    </header>
  </div>
</template>

<style scoped lang="scss">
@import url("../../styles/layout/components/header.scss");
</style>
