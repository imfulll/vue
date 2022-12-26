<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="header">
      <b-navbar-brand href="/">전국 대학 & 전문대학 정보</b-navbar-brand>
      <!-- <b-navbar-brand href="/vue/">전국 대학 & 전문대학 정보</b-navbar-brand> -->

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <h2 class="hidden">네비게이션영역</h2>
        <!-- Right aligned nav items -->
        <b-navbar-nav>
          <router-link to="/about" class="nav-link"><h3>소개</h3></router-link>
          <router-link to="/information" class="nav-link"
            ><h3>대학정보</h3></router-link
          >
          <router-link to="/location" class="nav-link"
            ><h3>위치정보</h3></router-link
          >
          <!-- <router-link to="/vue/about" class="nav-link"
            ><h3>소개</h3></router-link
          >
          <router-link to="/vue/information" class="nav-link"
            ><h3>대학정보</h3></router-link
          >
          <router-link to="/vue/location" class="nav-link"
            ><h3>위치정보</h3></router-link
          > -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    refresh() {
      location.reload();
    },
  },
};
</script>

<style>
.header {
  margin-bottom: 50px;
}
.header > a {
  color: #0c4da2;
  font-size: 1.3em;
  font-weight: 700;
  margin-left: 20px;
  margin-right: 20px;
  padding: 20px 0;
}
.header > a:hover {
  color: #0c4da2;
}
</style>
