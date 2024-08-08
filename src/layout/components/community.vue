<script lang="ts" setup>
import WaterFall from "@/components/WaterFall.vue";
import { ref, computed } from "vue";
import img from "../../assets/images/img4.svg";
import { RandomColor } from "@/utils/RandomColor.ts";

const originalItems = ref([
  {
    id: 1,
    username: "Kayna",
    content:
      "大家好！我最近使用了TIFA的AI设计工具来尝试制作一个基于我自己的小说角色的3D模型。只需要提供简单的文字描述，AI就能够生成非常精确和细致的模型草图，实在是令人震惊。我已经收到了最终的3D打印模型，细节处理得太棒了，超出了我的预期！\n",
    img: img,
  },
  {
    id: 2,
    username: "Kayna",
    content:
      "皆さん、こんにちは！TIFAのAIデザインツールを使って、シンプルな説明から3Dモデルを生成しました。出来栄えに感動しています。こちらが受け取った3Dプリントモデルの写真です。他の人も複雑なフィギュアを作成した経験はありますか？どんな感じでしたか？",
    img: img,
  },
  {
    id: 3,
    username: "Kayna",
    content:
      "Bonjour à tous, j'utilise l'outil IA de TIFA pour créer des modèles personnalisés, mais j'ai quelques questions. Quelqu'un pourrait-il me conseiller sur la manière d'ajuster les paramètres pour améliorer la finesse des détails sur les modèles plus petits? Merci pour votre aide!",
    img: img,
  },
  {
    id: 4,
    username: "Kayna",
    content:
      "Hello everyone! I just wanted to share my incredible experience using TIFA’s AI design tool. The precision and detail of the 3D model it generated from just a simple description were beyond my expectations. Has anyone else tried creating complex figures? ",
    img: img,
  },
  {
    id: 5,
    username: "Kayna",
    content:
      "大家好！我最近使用了TIFA的AI设计工具来尝试制作一个基于我自己的小说角色的3D模型。只需要提供简单的文字描述，AI就能够生成非常精确和细致的模型草图，实在是令人震惊。我已经收到了最终的3D打印模型，细节处理得太棒了，超出了我的预期！\n",
    img: img,
  },
]);

const list = ref(null);
const duplicatedItems = computed(() => {
  return [...originalItems.value, ...originalItems.value]; // 复制数组，确保连续性
});
</script>
<template>
  <div class="container">
    <header>
      <h1>加入TIFA社区，与全球创意人士一同探索、创造与分享</h1>
      <p>
        TIFA不仅仅是一家技术创新公司。我们还拥有一个充满活力和创造力的在线社区。在这里，用户可以分享自己的创意项目，获取反惯，与其他创作者交流灵感和技巧。我们的社区是一个支持和鼓励每位成员将其艺术和技术梦想变为现实的平台。
      </p>
    </header>
    <div class="waterfall-box">
      <water-fall style="background: #fff">
        <template #layoutPart="{ $avatar, $name, $day }">
          <footer class="waterfall-item">
            <div class="left">
              <img :src="$avatar" alt="" />
            </div>
            <div class="right">
              <h4 class="text">{{ $name }}</h4>
              <p>{{ $day }}</p>
            </div>
          </footer>
        </template>
      </water-fall>
    </div>

    <!--    card-->
    <div class="card-container">
      <ul ref="list">
        <li
          v-for="i in duplicatedItems"
          :key="i.id"
          :style="{ '--background-color': RandomColor(), '--width': '400px' }"
        >
          <header>
            <img src="../../assets/images/avatar.svg" alt="" />
            <span>{{ i.username }}</span>
          </header>
          <p>
            {{ i.content }}
          </p>
          <footer>
            <img :src="i.img" alt="" />
          </footer>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("../../styles/layout/components/community.scss");
</style>
