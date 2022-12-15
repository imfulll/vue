<template>
  <div id="app">
    <h1 class="hidden">전국 대학 & 전문대학 정보</h1>
    <HeaderArea />
    <h2 class="hidden">본문컨텐츠 영역</h2>
    <!-- 라우터 컴포넌트에 연결된 컴포넌트가 렌더링 됨-->
    <router-view></router-view>
    <FooterArea />
  </div>
</template>

<script>
import HeaderArea from "./components/HeaderArea.vue";
import FooterArea from "./components/FooterArea.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    HeaderArea,
    FooterArea,
  },
  methods: {},
};
</script>

<style></style>
