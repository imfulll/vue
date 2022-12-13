<!-- 메인 페이지 마크업 -->
<template lang="html">
  <div>
    <h2>메인 페이지 입니다.</h2>
    <div>
      <UniList />
    </div>
  </div>
</template>

<script>
import UniList from "./UniList.vue";
export default {
  components: {
    UniList,
  },
  methods: {
    // 라우터 함수로 이동할 때는 $router 글로벌 객체에 이동할 주소 넣어줌
    fnSubPage() {
      this.$router.push("/sub");
    },
  },
};
</script>

<style></style>
