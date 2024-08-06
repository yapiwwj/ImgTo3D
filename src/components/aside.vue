<script setup lang="ts">
import { ref } from "vue";

const activeIndex = ref(0);
const asideList = ref([
  [
    {
      id: 0,
      name: "发现灵感",
      icon: "Compass",
      path: "/home/ideas",
    },
    {
      id: 1,
      name: "我的资产",
      icon: "Coin",
      path: "/home",
    },
  ],
  [
    {
      id: 2,
      name: "Text to 3D",
      icon: "Box",
      path: "/home",
    },
    {
      id: 3,
      name: "Text to Img",
      icon: "Picture",
      path: "/home",
    },
    {
      id: 4,
      name: "3D Printing",
      icon: "Printer",
      path: "/home",
    },
    {
      id: 5,
      name: "使用文档",
      icon: "Document",
      path: "/home",
    },
    {
      id: 6,
      name: "系统设置",
      icon: "Setting",
      path: "/home",
    },
  ],
]);

const handleActive = (id: number) => {
  activeIndex.value = id;
};
</script>

<template>
  <div class="container">
    <header>
      <ul>
        <li
          class="top"
          v-for="item1 in asideList[0]"
          :key="item1.id"
          :class="{ active: activeIndex === item1.id }"
          @click="handleActive(item1.id)"
        >
          <component
            class="icon"
            :is="item1.icon"
            width="20px"
            style="color: var(--aside-text-color)"
          />
          <span>{{ item1.name }}</span>
        </li>
      </ul>
    </header>
    <footer>
      <ul>
        <li class="bottom"
            v-for="item2 in asideList[1]"
            :key="item2.id"
            :class="{ active: activeIndex === item2.id }"
            @click="handleActive(item2.id)"
        >
          <component
            class="icon"
            :is="item2.icon"
            width="20px"
            style="color: var(--aside-text-color)"
          />
          <span>{{ item2.name }}</span>
        </li>
      </ul>
      <div>
        <span>用户协议</span>
        <p>|</p>
        <span>隐私政策</span>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
@import url("../styles/components/aside.scss");
</style>
