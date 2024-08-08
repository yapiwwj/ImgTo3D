<script setup lang="ts">
import { ref } from "vue";
import {useRouter} from "vue-router";

const router = useRouter();
const inputValue = ref("");

const iconActive = ref(0);
const iconfontList = ref([
  [
    {
      id: 0,
      name: "流行趋势",
      icon: "iconfont icon-rise",
      path: "/home/ideas/trend",
    },
    {
      id: 1,
      name: "人气热门",
      icon: "iconfont icon-hot",
      path: "/home/ideas/hot",
    },
    {
      id: 2,
      name: "最新发布",
      icon: "iconfont icon-flashlight",
      path: "/home/ideas/news",
    },
    {
      id: 3,
      name: "最多点赞",
      icon: "iconfont icon-aixin",
      path: "/home/ideas/likes",
    },
    {
      id: 4,
      name: "明星创作者",
      icon: "iconfont icon-mtiIcon-renyuan-bianji",
      path: "/home/ideas/star-creator",
    },
  ],
  [
    {
      id: 5,
      name: "分类导航",
      icon: "iconfont icon-shaixuanfenlei",
    },
    {
      id: 6,
      name: "筛选工具",
      icon: "iconfont icon-shaixuan",
    },
  ],
]);
const handleActive = (id: number) => {
  iconActive.value = id;
  router.push(iconfontList.value[0][id].path);
};
</script>

<template>
  <div class="container">
    <header>
      <el-icon><Search /></el-icon>
      <input type="text" v-model="inputValue" placeholder="搜索更多">
    </header>
    <div class="operation">
      <ul class="left">
        <li :class="{ active: iconActive === item1.id}" v-for="item1 in iconfontList[0]" :key="item1.id"
            @click="handleActive(item1.id)">
          <i :class="item1.icon"></i>
          <span>{{ item1.name }}</span>
        </li>
      </ul>
      <ul class="right">
        <li v-for="item2 in iconfontList[1]" :key="item2.id">
          <i :class="item2.icon"></i>
          <span>{{ item2.name }}</span>
        </li>
      </ul>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url('http://at.alicdn.com/t/c/font_4646310_pcjq190k2e.css');
@import url('../../styles/home/ideas.scss');
</style>