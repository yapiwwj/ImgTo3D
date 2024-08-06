<script setup lang="ts">
import { ref } from "vue";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";

const introduceImgList = ref([
  { id: 0, img: img1, title: "Text to 2D" },
  { id: 1, img: img2, title: "Text to 3D" },
  { id: 2, img: img3, title: "Image to 3D" },
]);
</script>

<template>
  <div>
    <div class="ellipse-box">
      <img src="../../assets/images/Ellipse1.svg" alt="" />
      <img src="../../assets/images/Ellipse2.svg" alt="" />
      <img src="../../assets/images/Star1.svg" alt="" />
      <img src="../../assets/images/introduceTitle.svg" alt="" />
    </div>
    <ul>
      <li v-for="i in introduceImgList" :key="i.id">
        <img :src="i.img" alt="" />
        <span>{{ i.title }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "../../styles/layout/components/introduce.scss";
</style>
