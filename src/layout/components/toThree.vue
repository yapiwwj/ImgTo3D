<script setup lang="ts">
import { Right } from "@element-plus/icons-vue";
</script>

<template>
  <div class="container">
    <div class="background-container">
      <div class="background-box"></div>
    </div>
    <ul class="body-container">
      <li class="left">
        <img src="../../assets/images/toThreeBackground.png" alt="" />
      </li>
      <li class="right">
        <div class="top">
          <h1>从文字和图片到高质量</h1>
          <h1>3D模型</h1>
          <p>
            在TIFA，我们采用最先进的AI技术将您的文字描述转化为精确的3D模型。这一过程开始于理解和解析您的文本输入，AI算法根据描述生成初步的3D设计草图。经过层层细化，这些草图逐步转变为详细的、可以3D打印的模型。我们的技术不仅忠实于原始的艺术愿景，还能在制造过程中优化模型的结构和美观性。
          </p>
        </div>
        <div class="bottom">
          <ul class="button-box">
            <li>Try Now</li>
            <li>
              <el-icon color="#ffffff" size="24"> <Right /></el-icon>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/layout/components/toThree.scss";
</style>
