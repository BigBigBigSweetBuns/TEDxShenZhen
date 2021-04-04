<template>
  <div class="home">
    <b-container>
      <home-carousel></home-carousel>
      <article-min />
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
import HomeCarousel from './HomeCarousel.vue';
export default {
  name: "Home",
  components: {
    ArticleMin,
    ListingSection,
    GridDivider,
    HomeCarousel,
  },
  methods: {
    // onSlideStart(slide) {
    //   this.sliding = true;
    // },
    // onSlideEnd(slide) {
    //   this.sliding = false;
    // },
  },
};
</script>
<style lang="scss" scoped>
.home{
  margin-top: 1rem;
  margin-bottom: 2rem;
}
</style>
