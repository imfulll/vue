<template>
  <div>
    <div class="selectBox">
      <p class="startText">대학 & 전문대학 검색</p>
      <div>
        <div>
          <label for="sort1" class="label">학제선택</label>
          <b-form-select
            class="selectBtn"
            id="sort1"
            @change="select()"
            v-model="sort1">
            <template #first>
              <b-form-select-option :value="null" disabled
                >-- 학제 선택 --</b-form-select-option
              >
            </template>
            <b-form-select-option value="all">전체</b-form-select-option>
            <b-form-select-option value="대학">대학</b-form-select-option>
            <b-form-select-option value="전문대학"
              >전문대학</b-form-select-option
            >
          </b-form-select>
        </div>
        <div>
          <label for="sort2" class="label">설립기관선택</label>
          <b-form-select
            class="selectBtn"
            id="sort2"
            @change="select()"
            v-model="sort2">
            <template #first>
              <b-form-select-option :value="null" disabled
                >-- 설립기관 선택 --</b-form-select-option
              >
            </template>
            <b-form-select-option value="all">전체</b-form-select-option>
            <b-form-select-option value="사립">사립</b-form-select-option>
            <b-form-select-option value="국공립">국공립</b-form-select-option>
          </b-form-select>
        </div>
        <div>
          <label for="uniDistrict" class="label">지역선택</label>
          <b-form-select
            class="selectBtn"
            id="uniDistrict"
            @change="select()"
            v-model="uniDistrict">
            <template #first>
              <b-form-select-option :value="null" disabled
                >-- 지역 선택 --</b-form-select-option
              >
            </template>
            <b-form-select-option value="all">전체</b-form-select-option>
            <b-form-select-option
              :value="districtList"
              :key="i"
              v-for="(districtList, i) in districtLists">
              {{ districtList }}
            </b-form-select-option>
          </b-form-select>
        </div>
      </div>
      <p class="resultText" v-html="message"></p>
    </div>
    <div class="listBox">
      <ul class="titleContainer">
        <li :key="i" v-for="(uniInfo, i) in selectedData" class="uniTitle">
          <router-link
            :to="{
              name: 'Information',
              query: { uniTitle: uniInfo.uniTitle },
            }">
            <span>{{ i + 1 }}.</span>
            {{ uniInfo.uniTitle }}
          </router-link>
        </li>
      </ul>
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
      sort1: "all",
      sort2: "all",
      uniDistrict: "all",
      districtLists: [
        "서울",
        "부산",
        "대구",
        "인천",
        "광주",
        "대전",
        "울산",
        "세종",
        "경기",
        "강원",
        "충북",
        "충남",
        "전북",
        "전남",
        "경북",
        "경남",
        "제주",
      ],
      selectedData: [],
      message: "",
    };
  },
  setup() {},
  created() {},
  mounted() {
    this.selectedData = this.uniInfos;
    this.message =
      "<span class='resultNum'>" +
      this.selectedData.length +
      "</span>개 검색되었습니다.";
  },
  unmounted() {},
  methods: {
    select() {
      if (
        this.sort1 == "all" &&
        this.sort2 == "all" &&
        this.uniDistrict == "all"
      ) {
        this.selectedData = this.uniInfos;
      } else if (
        this.sort1 == "all" &&
        this.sort2 == "all" &&
        this.uniDistrict != "all"
      ) {
        this.selectedData = this.uniInfos.filter(
          (i) => i.uniDistrict === this.uniDistrict
        );
      } else if (
        this.sort1 == "all" &&
        this.sort2 != "all" &&
        this.uniDistrict == "all"
      ) {
        this.selectedData = this.uniInfos.filter((i) => i.sort2 === this.sort2);
      } else if (
        this.sort1 != "all" &&
        this.sort2 == "all" &&
        this.uniDistrict == "all"
      ) {
        this.selectedData = this.uniInfos.filter((i) => i.sort1 === this.sort1);
      } else if (
        this.sort1 == "all" &&
        this.sort2 != "all" &&
        this.uniDistrict != "all"
      ) {
        this.selectedData = this.uniInfos.filter(
          (i) => i.sort2 === this.sort2 && i.uniDistrict === this.uniDistrict
        );
      } else if (
        this.sort1 != "all" &&
        this.sort2 == "all" &&
        this.uniDistrict != "all"
      ) {
        this.selectedData = this.uniInfos.filter(
          (i) => i.sort1 === this.sort1 && i.uniDistrict === this.uniDistrict
        );
      } else if (
        this.sort1 != "all" &&
        this.sort2 != "all" &&
        this.uniDistrict == "all"
      ) {
        this.selectedData = this.uniInfos.filter(
          (i) => i.sort1 === this.sort1 && i.sort2 === this.sort2
        );
      } else if (
        this.sort1 != "all" &&
        this.sort2 != "all" &&
        this.uniDistrict != "all"
      ) {
        this.selectedData = this.uniInfos.filter(
          (i) =>
            i.sort1 === this.sort1 &&
            i.sort2 === this.sort2 &&
            i.uniDistrict === this.uniDistrict
        );
      }
      this.message =
        "<span class='resultNum'>" +
        this.selectedData.length +
        "</span>개 검색되었습니다.";
    },
  },
};
</script>
<style>
.selectBox {
  border: 1px solid #ccc;
  width: 500px;
  margin: 0 auto;
  padding: 30px 0;
  margin-bottom: 50px;
}
.startText {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 20px;
}
.selectBox > div {
  overflow: hidden;
  padding-top: 30px;
}
.selectBox > div > div {
  float: left;
  position: relative;
  margin: 0 20px;
}
.selectBox > div .label {
  position: absolute;
  left: 50%;
  top: -25px;
  color: #999;
}
.selectBox > div div:nth-of-type(1) .label {
  margin-left: -32px;
}
.selectBox > div div:nth-of-type(2) .label {
  margin-left: -48px;
}
.selectBox > div div:nth-of-type(3) .label {
  margin-left: -32px;
}
.selectBox > .resultText {
  margin-top: 30px;
  text-align: center;
}
.selectBox > .resultText .resultNum {
  font-size: 1.2rem;
  font-weight: 600;
  color: #0c4da2;
}

.listBox {
  margin-bottom: 50px;
}
.titleContainer {
  display: grid;
  grid-template-columns: repeat(5, 20%);
}
.uniTitle {
  border: 1px solid #ccc;
  text-align: center;
}
.uniTitle a {
  display: block;
  position: relative;
  padding: 35px 10px 20px;
  transition: all 0.5s;
  box-sizing: border-box;
}
.uniTitle a:hover {
  font-weight: 700;
}
.uniTitle a::after {
  content: "자세히보기";
  display: block;
  color: #fff;
  transition: all 0.5s;
  font-weight: 400;
  box-sizing: border-box;
  transition: all 0.5s;
  font-size: 0.8em;
}
.uniTitle a:hover::after {
  font-weight: 400;
  color: #0c4da2;
}
.uniTitle a span {
  color: #0c4da2;
}
</style>
