<template>
  <div id="app">
    <HeaderArea />
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
