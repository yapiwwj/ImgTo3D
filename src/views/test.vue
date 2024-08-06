<script setup lang="ts">
import { changeTheme } from "@/utils/changeTheme.ts";

const changeMode = () => {
  changeTheme();
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-button @click="changeMode">切换</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <ul>
            <li v-for="i in 20" :key="i">{{ i }}</li>
          </ul>
        </el-aside>
        <el-main>
          <div>11</div>
        </el-main>
      </el-container>
    </el-container>
  </div>
  <!--  <my-test></my-test>-->
</template>

<style scoped lang="scss">
@import url("../styles/test.scss");
</style>
