<template>
  <div>
    <b-carousel
      id="carousel-no-animation"
      style="text-shadow: 0px 0px 2px #000"
      no-animation
      indicators
      img-width="1024"
      img-height="480">
      <b-carousel-slide
        img-src="https://imfulll.cafe24.com/vue/img/slideImg01.jpg"></b-carousel-slide>
      <b-carousel-slide
        img-src="https://imfulll.cafe24.com/vue/img/slideImg02.jpg"></b-carousel-slide>
      <b-carousel-slide
        img-src="https://imfulll.cafe24.com/vue/img/slideImg03.jpg"></b-carousel-slide>
      <b-carousel-slide
        img-src="https://imfulll.cafe24.com/vue/img/slideImg04.jpg"></b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      slide: 3,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
<style></style>
