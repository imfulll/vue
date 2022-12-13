<template>
  <div>
    <div class="searchBox">
      <input type="text" />
      <button>검색</button>
    </div>
    <div class="searchResult">
      <div class="uniEach" :key="i" v-for="(uniList, i) in uniInfos">
        <span>{{ i + 1 }}</span>
        <div>
          <p>{{ uniList.uniTitle }}</p>
          <p>학제 : {{ uniList.sort1 }}</p>
          <p>설립기관 : {{ uniList.sort2 }}</p>
          <p>지역 : {{ uniList.uniDistrict }}</p>
          <p>주소 : {{ uniList.address }}</p>
          <p>홈페이지 : {{ uniList.homepage }}</p>
          <p>대표번호 : {{ uniList.telephone }}</p>
          <p>입학정원 : {{ uniList.capacity }}</p>
          <p>평균입학금 : {{ uniList.admissionFee }}</p>
          <p>평균등록금 : {{ uniList.registrationFee }}</p>
        </div>
        <div>
          <button>지도보기</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import uniInformation from "../data/uniInformation.json";

export default {
  components: {},
  data() {
    return {
      uniInfos: uniInformation,
      selectedData: [],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style>
.uniEach {
  border: 1px solid #ccc;
}
</style>
