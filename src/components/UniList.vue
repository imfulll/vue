<template>
  <div>
    <div>
      <select name="" id="" @change="select()" v-model="sort1">
        <option value="all">전체</option>
        <option value="대학">대학</option>
        <option value="전문대학">전문대학</option>
      </select>
      <select name="" id="" @change="select()" v-model="sort2">
        <option value="all">전체</option>
        <option value="사립">사립</option>
        <option value="국공립">국공립</option>
      </select>
      <select name="" id="" @change="select()" v-model="uniDistrict">
        <option value="all">전체</option>
        <option
          :value="districtList"
          :key="i"
          v-for="(districtList, i) in districtLists">
          {{ districtList }}
        </option>
      </select>
      <div>{{ message }}</div>
      <ul class="titleContainer">
        <li :key="i" v-for="(uniInfo, i) in selectedData" class="uniTitle">
          <a href="#">
            <span>{{ i + 1 }}</span>
            {{ uniInfo.uniTitle }}
          </a>
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
    this.message = this.selectedData.length + "개 검색되었습니다.";
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
      this.message = this.selectedData.length + "개 검색되었습니다.";

      console.log(this.sort1);
      console.log(this.sort2);
      console.log(this.uniDistrict);
      console.log(this.selectedData);
    },
  },
};
</script>
<style>
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
