<script setup lang="ts">
import brand1 from '../../assets/images/brand1.png'
import brand2 from '../../assets/images/brand2.png'
import brand3 from '../../assets/images/brand3.png'
import brand4 from '../../assets/images/brand4.png'
import brand5 from '../../assets/images/brand5.png'
import brand6 from '../../assets/images/brand6.png'
import brand7 from '../../assets/images/brand7.png'
import brand8 from '../../assets/images/brand8.png'
import brand9 from '../../assets/images/brand9.png'
import brand10 from '../../assets/images/brand10.png'
import brand11 from '../../assets/images/brand11.png'
import brand12 from '../../assets/images/brand12.png'
import { ArrowRight } from "@element-plus/icons-vue";

const brandList = [
  {id:0,url:brand1},
  {id:1,url:brand2},
  {id:2,url:brand3},
  {id:3,url:brand4},
  {id:4,url:brand5},
  {id:5,url:brand6},
  {id:6,url:brand7},
  {id:7,url:brand8},
  {id:8,url:brand9},
  {id:9,url:brand10},
  {id:10,url:brand11},
  {id:11 ,url:brand12}
]
</script>

<template>
<div class="container">
  <header>
    <p>TIFA深受广泛群体的喜爱与信赖</p>
    <h1>超过一百万的创作者、企业及学校爱好者的首选</h1>
  </header>
  <div class="brand-container">
   <ul>
     <li v-for="i in brandList" :key="i.id">
       <img :src="i.url" alt="">
     </li>
   </ul>
    <footer>
         <p>更多信息</p>
      <el-icon><ArrowRight /></el-icon>
    </footer>
  </div>
</div>
</template>

<style scoped lang="scss">
@import url("../../styles/layout/components/support.scss");
</style>