<script setup lang="ts">
import { ref } from "vue";
import img1 from "../../assets/images/img4.svg";
import img2 from "../../assets/images/toStartBackground.svg";
import img3 from "../../assets/images/img5.svg";
import img4 from "../../assets/images/img6.svg";
import { Right } from "@element-plus/icons-vue";
const imagesTopList = ref([
  { id: 0, img: img1 },
  { id: 1, img: img2 },
]);
const imagesBottomList = ref([
  { id: 0, img: img3 },
  { id: 1, img: img4 },
]);
</script>

<template>
  <div class="container">
    <div class="background-container">
      <div class="background-box1"></div>
      <div class="background-box2"></div>
    </div>
    <ul class="img-container">
      <li>
        <img v-for="i in imagesTopList" :key="i.id" :src="i.img" alt="" />
      </li>
      <li>
        <img v-for="i in imagesBottomList" :key="i.id" :src="i.img" alt="" />
      </li>
    </ul>
    <ul class="body-container">
      <li class="left">
        <div class="top">
          <h1>开启您的3D打印之旅，</h1>
          <h1>将您的创意实现成形</h1>
          <p>
            在TIFA，我们提供尖端的3D打印技术，将您的幻想和设计忠实地转化为实体模型。我们的3D打印服务支持多种材料和高级细节处理，无论是复杂的角色模型还是精细的艺术品，都能精确制作。我们的专业团队会在整个过程中提供咨询和支持，确保每一件作品都能达到最高的品质标准。
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
      <li class="right">
        <img src="../../assets/images/toStartBackground2.png" alt="" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/layout/components/start.scss";
</style>
