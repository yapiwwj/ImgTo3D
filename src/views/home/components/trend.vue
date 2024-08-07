<script setup lang="ts">
import WaterFall from "@/components/WaterFall.vue";
import { ref } from "vue";

const align=ref("left");
</script>

<template>
  <WaterFall :width="200" :align="align" />
</template>

<style scoped lang="scss">

</style>