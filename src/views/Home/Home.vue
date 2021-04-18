<template>
  <div class="home">
    <div class="Card">
      <b-container>
        <home-carousel></home-carousel>
        <article-min header="" :contentHTML="articleContent" />
      </b-container>
    </div>
    <!-- <grid-divider></grid-divider> -->
    <div class="Card">
      <b-container>
        <listing-section
          header="最新新闻"
          :block="newsSection"
          topath="/news"
          class="news"
        ></listing-section>
      </b-container>
    </div>
    <!-- <grid-divider></grid-divider> -->
    <div class="Card">
      <b-container>
        <listing-section
          header="最新视频"
          :block="videosSection"
          topath="/videos"
          class="videos"
        ></listing-section>
        <!-- <grid-divider></grid-divider> -->
      </b-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleMin from "./ArticleMin.vue";
import ListingSection from "@/components/ListingSection/ListingSection.vue";
import HomeCarousel from "./HomeCarousel.vue";
export default {
  name: "Home",
  components: {
    ArticleMin,
    ListingSection,
    HomeCarousel,
  },
  data() {
    return {
      articleContent:
        "<p style='color:black'><b>TEDxShenzhen</b>于2019年1⽉19⽇正式获得TED官⽅授权，是深圳第⼀个城市级别的TEDx组织，致⼒于传递TED精神—ideas worth spreading。</p>" +
        "<p><span style='font-size:1.5em'>我们</span>希望在探讨科技、创新的同时，也为这座城市带来⼈⽂、科学、艺术等多元话题及思考，放⼤值得被更多⼈听到的声⾳，⽤思想激发更多有意义的对话，为深圳、中国甚⾄世界带来积极的改变，通过连接全球思想社区，成为深圳在世界舞台发声的桥梁。</p>",
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
@import "@/assets/variable.scss";
.home {
  margin-top: 2rem;
  margin-bottom: 2rem;
  // ::v-deep .article {
  //   padding-left: 1rem;
  //   padding-right: 1rem;
  // }
  // ::v-deep .listing-section {
  //   padding-left: 1rem;
  //   padding-right: 1rem;
  // }
}
.Card {
  background-color: $bg-color-white;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
}
</style>
