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

<style>
ul {
  list-style: none;
  padding: 0;
}
body {
  font-size: 16px;
  color: #333;
}
a {
  color: #333;
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.head {
  color: red;
}
</style>
