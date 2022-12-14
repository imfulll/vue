<template>
  <header>
    <div class="headerInner">
      <h1 class="logo" @click="refresh">
        <router-link to="/">전국 대학 & 전문대학 정보</router-link>
      </h1>
      <nav>
        <ul>
          <li><router-link to="/about">소개</router-link></li>
          <li><router-link to="/information">대학정보</router-link></li>
          <li><router-link to="/location">위치정보</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
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
.headerInner {
  display: flex;
  justify-content: space-between;
}
.headerInner nav {
  overflow: hidden;
}
.headerInner nav li {
  float: left;
  margin-left: 20px;
}
</style>
