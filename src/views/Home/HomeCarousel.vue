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
      style="text-shadow: 1px 1px 2px #333"
    >
      <!-- Slides with image only -->
      <b-carousel-slide
        v-for="(img, index) in banner"
        :key="index"
        :img-src="img.src"
      >
        <template v-slot:img>
          <router-link :to="img.href">
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="480"
              :src="img.src"
              :alt="img.alt"
            />
          </router-link>
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "carousel",
  props: {
    banner: {
      type: Array,
      default: function () {
        return [
          {
            src:
              "https://tedxshenzhen.oss-cn-shenzhen.aliyuncs.com/images/banner/changedby.jpg",
            alt: "banner",
            href: "/news/2021AnnualConference-preview",
          },
          {
            src:
              "https://tedxshenzhen.oss-cn-shenzhen.aliyuncs.com/images/banner/aboutus.jpg",
            alt: "banner",
            href: "/about",
          },
          {
            src:
              "https://tedxshenzhen.oss-cn-shenzhen.aliyuncs.com/images/banner/previous.jpg",
            alt: "banner",
            href: "/",
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