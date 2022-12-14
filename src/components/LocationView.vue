<template>
  <div>
    <div>
      <input
        type="checkbox"
        name=""
        id="selectAll"
        checked
        @click="changeAll" />
      <label for="selectAll">전체선택</label>
      <div :key="i" v-for="(districtList, i) in districtLists">
        <input
          class="checkBox"
          type="checkbox"
          :id="districtList"
          :value="districtList"
          v-model="selectedDis"
          @change="selectDis" />
        <label :for="districtList">{{ districtList }}</label>
      </div>
    </div>
    {{ selectedDis }}
    <div id="map"></div>
    <div class="button-group"></div>
  </div>
</template>

<script>
import UniInformation from "../data/uniInformation.json";

export default {
  name: "KakaoMap",
  data() {
    return {
      UniList: UniInformation,
      infowindow: null,
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
      selectAll: true,
      selectedDis: [],
      selectedData: [],
    };
  },
  mounted() {
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
    this.selectedDis = this.districtLists;
    this.selectedData = this.UniList;
    this.displayMarker();
  },
  methods: {
    changeAll() {
      if (this.selectAll == true) {
        this.selectedDis = [];
        this.selectAll = false;
        document.getElementById("selectAll").checked = false;
        this.initMap();
      } else if (this.selectAll == false) {
        this.selectedDis = this.districtLists;
        this.selectAll = true;
        document.getElementById("selectAll").checked = true;
        this.selectedData = this.UniList;
        this.displayMarker();
      }
    },
    selectDis() {
      if (this.selectedDis.length != 17) {
        document.getElementById("selectAll").checked = false;
        this.selectAll = false;
      } else if (this.selectedDis.length == 17) {
        document.getElementById("selectAll").checked = true;
        this.selectAll = false;
      }

      this.initMap();
      this.selectedData = [];
      var arrAll = [];

      for (var i = 0; i < this.selectedDis.length; i++) {
        for (var j = 0; j < this.UniList.length; j++) {
          if (this.UniList[j].uniDistrict == this.selectedDis[i]) {
            var arr = this.UniList[j];
            arrAll.push(arr);
          }
        }
      }
      this.selectedData = arrAll;
      this.displayMarker();
    },
    initMap() {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 20,
      };
      this.map = new kakao.maps.Map(container, options);
    },

    changeSize(size) {
      const container = document.getElementById("map");
      container.style.width = `${size}px`;
      container.style.height = `${size}px`;
      this.map.relayout();
    },

    displayMarker() {
      for (var i = 0; i < this.selectedData.length; i++) {
        // 마커를 생성합니다
        var latitude = this.selectedData[i].Latitude;
        var longitude = this.selectedData[i].Longitude;
        var marker = new kakao.maps.Marker({
          map: this.map, // 마커를 표시할 지도
          position: new kakao.maps.LatLng(latitude, longitude), // 마커의 위치
        });

        // 마커에 표시할 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: this.selectedData[i].uniTitle, // 인포윈도우에 표시할 내용
        });

        // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
        // 이벤트 리스너로는 클로저를 만들어 등록합니다
        // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
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
      }

      // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
      function makeOverListener(map, marker, infowindow) {
        return function () {
          infowindow.open(map, marker);
        };
      }

      // 인포윈도우를 닫는 클로저를 만드는 함수입니다
      function makeOutListener(infowindow) {
        return function () {
          infowindow.close();
        };
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 400px;
  height: 400px;
}

.button-group {
  margin: 10px 0px;
}

button {
  margin: 0 3px;
}
</style>
