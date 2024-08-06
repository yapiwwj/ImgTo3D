<script setup lang="ts">
import { changeTheme } from "@/utils/changeTheme.ts";
import { Bell, CirclePlus, Operation, Sunny } from "@element-plus/icons-vue";
</script>

<template>
  <div class="container">
    <ul>
      <li class="left">
        <el-icon><Operation/></el-icon>
        <h1>TIFA</h1>
      </li>
      <li class="right">
        <div class="publish">
          <el-icon size="20"><CirclePlus/></el-icon>
          <p>Publish</p>
        </div>
          <button @click="changeTheme">
            <el-icon size="18"><Sunny /></el-icon>
            模式切换
          </button>
        <footer>
          <el-icon size="20"><Bell /></el-icon>
          <el-avatar :size="30" :src="circleUrl" />
        </footer>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import url('../styles/components/header.scss');
</style>