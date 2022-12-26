<!-- 메인 페이지 마크업 -->
<template lang="html">
  <div>
    <div class="carousel">
      <CarouselImg />
    </div>
    <div class="uniList">
      <UniList />
    </div>
  </div>
</template>

<script>
import UniList from "./UniList.vue";
import CarouselImg from "./CarouselImg.vue";

export default {
  components: {
    UniList,
    CarouselImg,
  },
  methods: {},
};
</script>

<style>
.carousel {
  margin-bottom: 50px;
}
</style>
