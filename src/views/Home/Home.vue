<template>
  <div class="home">
    <b-container>
      <home-carousel></home-carousel>
      <article-min />
      <grid-divider></grid-divider>
      <listing-section
        header="最新新闻"
        :block="newsSection"
        topath="/news"
        class="news"
      ></listing-section>
      <grid-divider></grid-divider>
      <listing-section
        header="最新视频"
        :block="videosSection"
        topath="/videos"
        class="videos"
      ></listing-section>
      <grid-divider></grid-divider>
      <listing-section></listing-section>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleMin from "@/components/Article/ArticleMin.vue";
import ListingSection from "@/components/ListingSection/ListingSection.vue";
import GridDivider from "../../components/GridDivider/GridDivider.vue";
import HomeCarousel from "./HomeCarousel.vue";
export default {
  name: "Home",
  components: {
    ArticleMin,
    ListingSection,
    GridDivider,
    HomeCarousel,
  },
  data() {
    return {
      videosSection: [],
      newsSection: [],
    };
  },
  methods: {
    getNewsData() {
      this.$axios
        .get("/news/list", {
          params: {
            page: 1,
          },
        })
        .then((res) => {
          const result = res.data.result;
          if (res.data.code == 0) {
            this.newsSection = result.slice(0, 3);
          }
        });
    },
    getVideoData() {
      this.$axios
        .get("/videos/list", {
          params: {
            page: 1,
          },
        })
        .then((res) => {
          console.log(res);
          const result = res.data.result;
          if (res.data.code == 0) {
            this.videosSection = result.slice(0, 3);
          }
        });
    },
  },
  created() {
    this.getNewsData();
    this.getVideoData();
  },
};
</script>
<style lang="scss" scoped>
.home {
  margin-top: 1rem;
  margin-bottom: 2rem;
}
</style>
