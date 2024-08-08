<script setup lang="ts">
import WaterFall from "@/components/WaterFall.vue";
import { ref } from "vue";
import { Star, View } from "@element-plus/icons-vue";

const align = ref("left");
</script>

<template>
  <WaterFall :width="204" :align="align">
    <template #ideasPart="{ $avatar, $name, $day, $views, $collections }">
      <footer class="waterfall-item">
        <ul class="left">
          <li>
            <img :src="$avatar" alt="" />
          </li>
          <li>
            <h4>{{ $name }}</h4>
            <p>{{ $day }}</p>
          </li>
        </ul>
        <ul class="right">
          <li>
            <el-icon><View /></el-icon>
            <span>{{ $views }}</span>
          </li>
          <li>
            <el-icon><Star /></el-icon>
            <span>{{ $collections }}</span>
          </li>
        </ul>
      </footer>
    </template>
  </WaterFall>
</template>

<style scoped lang="scss">
@import url("../../../styles/home/components/publicWaterfall.scss");
</style>
