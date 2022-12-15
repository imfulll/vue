<template>
  <div>
    <p class="title">University and College INFORMATION</p>
    <div class="textArea">
      1. 이 웹사이트는 전국의 '대학 및 전문대학'에 관한 정보를 제공합니다.
    </div>
    <div class="textArea">
      2. 본 사이트에서 제공하는 자료는 공공데이터포털을 활용하였으며, 해당
      자료는 실제내용과 상이할 수 있습니다.
    </div>
    <div class="textArea">
      3. 또한, 평균입학금과 평균등록금 항목 중 제공하지 않는 자료일 경우 '0'으로
      기재하였습니다.
    </div>
    <div class="imgBox">
      <img src="../../public/img/uniImg1.jpg" alt="" />
      <img src="../../public/img/uniImg2.jpg" alt="" />
      <img src="../../public/img/uniImg3.jpg" alt="" />
    </div>
    <div class="explainText">
      본 사이트는 상업적 목적이 아닌 개인 포트폴리오 용도로 만들어졌습니다.
    </div>
    <div class="explainText">
      홈페이지의 일부 내용과 활용한 데이터 등은 그 출처가 따로 있음을 밝힙니다.
    </div>
    <div class="explainText">
      This website is made for
      <span class="portfolio">PERSONAL PORTFOLIO</span>, all the informations
      and the datas used in this website are <span class="not">NOT</span> used
      to make personal profit.
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleData: "",
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
p.title {
  font-size: 2em;
  font-weight: 700;
  color: #0c4da2;
  margin-bottom: 20px;
}
.textArea {
  width: 80%;
  text-align: left;
  margin: 5px auto;
  font-size: 1.2em;
  font-weight: 700;
}
div.explainText {
  color: #999;
  width: 80%;
  text-align: left;
  margin: 5px auto;
}
.imgBox {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  padding: 0 10px;
}
.imgBox img {
  width: 100%;
}
.portfolio {
  color: #0c4da2;
  font-weight: 700;
}
.not {
  color: red;
  font-weight: 700;
}
</style>
