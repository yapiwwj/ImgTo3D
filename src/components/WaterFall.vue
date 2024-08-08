<script lang="ts" setup>
import { LazyImg, Waterfall } from "vue-waterfall-plugin-next";
import "vue-waterfall-plugin-next/dist/style.css";
import { ref } from "vue";
import img1 from "../assets/images/img4.svg";
import img2 from "../assets/images/toStartBackground.svg";
import img3 from "../assets/images/img5.svg";
import img4 from "../assets/images/img6.svg";
import avatar from "../assets/images/avatar.svg";

const list = ref([
  {
    id: "0",
    src: img1,
    avatar: avatar,
    name: "Kayna",
    day: "2024/8/1",
    views: 39,
    collections: 20,
  },
  {
    id: "1",
    src: img2,
    avatar: avatar,
    name: "Kayna",
    day: "2024/8/1",
    views: 39,
    collections: 20,
  },
  {
    id: "2",
    src: img3,
    avatar: avatar,
    name: "Kayna",
    day: "2024/8/1",
    views: 39,
    collections: 20,
  },
  {
    id: "3",
    src: img4,
    avatar: avatar,
    name: "Kayna",
    day: "2024/8/1",
    views: 39,
    collections: 20,
  },
  {
    id: "4",
    src: img2,
    avatar: avatar,
    name: "Kayna",
    day: "2024/8/1",
    views: 39,
    collections: 20,
  },
  {
    id: "5",
    src: img3,
    avatar: avatar,
    name: "Kayna",
    day: "2024/8/1",
    views: 39,
    collections: 20,
  },
  {
    id: "6",
    src: img3,
    avatar: avatar,
    name: "Kayna",
    day: "2024/8/1",
    views: 39,
    collections: 20,
  },
  {
    id: "7",
    src: img1,
    avatar: avatar,
    name: "Kayna",
    day: "2024/8/1",
    views: 39,
    collections: 20,
  },
  {
    id: "8",
    src: img4,
    avatar: avatar,
    name: "Kayna",
    day: "2024/8/1",
    views: 39,
    collections: 20,
  },
  {
    id: "9",
    src: img1,
    avatar: avatar,
    name: "Kayna",
    day: "2024/8/1",
    views: 39,
    collections: 20,
  },
  {
    id: "10",
    src: img3,
    avatar: avatar,
    name: "Kayna",
    day: "2024/8/1",
    views: 39,
    collections: 20,
  },
  {
    id: "11",
    src: img2,
    avatar: avatar,
    name: "Kayna",
    day: "2024/8/1",
    views: 39,
    collections: 20,
  },
]);
const props = defineProps(["align"]);
</script>
<template>
  <Waterfall
    class="waterfall-container"
    :list="list"
    :width="250"
    :gutter="20"
    :align="props.align"
  >
    <template #item="{ item, url }">
      <div class="card">
        <LazyImg :url="url" />
        <slot
          name="layoutPart"
          :$avatar="item.avatar"
          :$name="item.name"
          :$day="item.day"
        ></slot>
        <slot
          name="ideasPart"
          :$avatar="item.avatar"
          :$name="item.name"
          :$day="item.day"
          :$views="item.views"
          :$collections="item.collections"
        ></slot>
      </div>
    </template>
  </Waterfall>
</template>

<style lang="scss" scoped>
.waterfall-container {
  background: var(--background);

  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
