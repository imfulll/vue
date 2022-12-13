<template>
  <div>
    <div class="searchBox">
      <select name="" id="" v-model="selectedType">
        <option value="uniTitle">학교명</option>
        <option value="address">주소</option>
      </select>
      <input type="text" v-model="searchValue" @keyup.enter="enterKey" />
      <button @click="search()">검색</button>
      <button @click="init()">모두보기</button>
      <div v-show="message">{{ msgText }}</div>
    </div>
    <div class="searchResult">
      <div class="uniEach" :key="i" v-for="(uniList, i) in selectedData">
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
          <button @click="callFunction(i)" :data-id="i">위치보기</button>
          <div :id="'map' + i" class="map"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import uniInformation from "../data/uniInformation.json";

export default {
  // components: { KakaoMap },
  data() {
    return {
      uniInfos: uniInformation,
      selectedData: [],
      searchValue: "",
      msgText: "검색된 데이터가 없습니다",
      message: false,
      selectedType: "uniTitle",
    };
  },
  setup() {},
  created() {},
  mounted() {
    this.selectedData = this.uniInfos;

    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=915cffed372954b7b44804ed422b9cf0";
      document.head.appendChild(script);
    }

    var receiveUniTitle = this.$route.query.uniTitle;
    if (receiveUniTitle) {
      this.searchValue = receiveUniTitle;
      this.search();
    }
    console.log(this.$route.query.uniTitle);
  },
  unmounted() {},
  methods: {
    search() {
      let value = this.searchValue;
      let selectedType = this.selectedType;

      if (selectedType == "uniTitle") {
        if (value) {
          this.selectedData = this.uniInfos.filter((e) => {
            return e.uniTitle.includes(value);
          });
          if (this.selectedData.length == 0) {
            this.message = true;
            this.msgText = "검색 데이터가 없습니다";
          } else {
            this.message = true;
            this.msgText =
              "총" + this.selectedData.length + "개 검색되었습니다";
          }
        } else {
          this.message = true;
          this.msgText = "검색어를 입력해주세요";
        }
      } else {
        if (value) {
          this.selectedData = this.uniInfos.filter((e) => {
            return e.address.includes(value);
          });
          if (this.selectedData.length == 0) {
            this.message = true;
            this.msgText = "검색 데이터가 없습니다";
          } else {
            this.message = true;
            this.msgText =
              "총" + this.selectedData.length + "개 검색되었습니다";
          }
        } else {
          this.message = true;
          this.msgText = "검색어를 입력해주세요";
        }
      }
    },
    enterKey() {
      if (event.keyCode === 13) {
        this.search();
      }
    },
    init() {
      this.selectedData = this.uniInfos;
      this.message = false;
      this.searchValue = "";
      this.selectedType = "uniTitle";
      this.searchInit();
    },
    searchInit() {
      var allMap = document.querySelector(".map");
      allMap.style.height = "0";
    },
    initMap(index) {
      const container = document.getElementById("map" + index);
      let longitude = this.selectedData[index].Longitude;
      let latitude = this.selectedData[index].Latitude;
      const options = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 7,
      };
      this.map = new kakao.maps.Map(container, options);
      container.style.height = `400px`;
      this.map.relayout();
    },
    callFunction: function (i) {
      this.initMap(i);

      var latitude = this.selectedData[i].Latitude;
      var longitude = this.selectedData[i].Longitude;
      var marker = new kakao.maps.Marker({
        map: this.map, // 마커를 표시할 지도
        position: new kakao.maps.LatLng(latitude, longitude), // 마커의 위치
      });
      var infowindow = new kakao.maps.InfoWindow({
        content: this.selectedData[i].uniTitle, // 인포윈도우에 표시할 내용
      });
      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(this.map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
      function makeOverListener(map, marker, infowindow) {
        return function () {
          infowindow.open(map, marker);
        };
      }

      function makeOutListener(infowindow) {
        return function () {
          infowindow.close();
        };
      }

      console.log(latitude);
      console.log(longitude);
    },
  },
};
</script>
<style>
.uniEach {
  border: 1px solid #ccc;
}
</style>
