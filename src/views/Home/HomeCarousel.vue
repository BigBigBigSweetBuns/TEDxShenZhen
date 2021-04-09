<template>
  <div>
    <b-carousel
      id="carousel-1"
      ref="carousel"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333"
    >
      <!-- Slides with image only -->
      <b-carousel-slide
        v-for="(img, index) in banner"
        :key="index"
        :img-src="img.src"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "carousel",
  props: {
    banner: {
      type: Object,
      default: function () {
        return [
          {
            src: "https://picsum.photos/1024/480/?image=54",
            alt: "banner",
          },
          {
            src: "https://picsum.photos/1024/480/?image=58",
            alt: "banner",
          },
          {
            src: "https://picsum.photos/1024/480/?image=55",
            alt: "banner",
          },
        ];
      },
    },
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      screenWidth: document.body.clientWidth, // 屏幕宽度
    };
  },
  computed: {},
  mounted() {
    // window.document.getElementsByClassName("carousel-inner")[0].style.height =
    //   this.screenWidth * 0.3 + "px";
    // 监听窗口大小
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
        // window.document.getElementsByClassName(
        //   "carousel-inner"
        // )[0].style.height = this.screenWidth * 0.3 + "px";
      })();
    };
  },
  methods: {},
};
</script>