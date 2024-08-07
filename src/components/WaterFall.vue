<template>
  <Waterfall class="waterfall-container" :list="list" :width="250" :gutter="20" :align="props.align">
    <template #item="{ item,url }">
      <div class="card">
        <LazyImg :url="url" />
        <footer>
          <div class="left">
            <img :src='item.avatar' alt="" />
          </div>
          <div class="right">
            <h4 class="text">{{ item.name }}</h4>
            <p>{{ item.day }}</p>
          </div>
        </footer>
      </div>
    </template>
  </Waterfall>
</template>

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
  { id: "0", src: img1, avatar: avatar, name: "Kayna", day: "2024/8/1" },
  { id: "1", src: img2, avatar: avatar, name: "Kayna", day: "2024/8/1" },
  { id: "2", src: img3, avatar: avatar, name: "Kayna", day: "2024/8/1" },
  { id: "3", src: img4, avatar: avatar, name: "Kayna", day: "2024/8/1" },
  { id: "4", src: img2, avatar: avatar, name: "Kayna", day: "2024/8/1" },
  { id: "5", src: img3, avatar: avatar, name: "Kayna", day: "2024/8/1" },
  { id: "6", src: img3, avatar: avatar, name: "Kayna", day: "2024/8/1" },
  { id: "7", src: img1, avatar: avatar, name: "Kayna", day: "2024/8/1" },
  { id: "8", src: img4, avatar: avatar, name: "Kayna", day: "2024/8/1" },
  { id: "9", src: img1, avatar: avatar, name: "Kayna", day: "2024/8/1" },
  { id: "10", src: img3, avatar: avatar, name: "Kayna", day: "2024/8/1" },
  { id: "11", src: img2, avatar: avatar, name: "Kayna", day: "2024/8/1" },
]);
const props=defineProps(["align"]);
</script>

<style lang="scss" scoped>
.waterfall-container {
  background: var(--background);

  .card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    footer {
      display: flex;
      align-items: center;
      margin-top: 10px;

      .left {
        img {
          width: 60px;
          margin-right: 10px;
        }
      }

      .right {
        h4 {
          color: var(--font-color2);
          padding: 5px 0;
        }

        p {
          color: var(--font-color2);
          font-size: $text-font-small-size;
        }
      }
    }
  }
}
</style>
