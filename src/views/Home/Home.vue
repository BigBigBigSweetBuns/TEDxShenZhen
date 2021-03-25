<template>
  <div class="home">
    <article-min />
    <listing-section></listing-section>
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleMin from "@/components/Article/ArticleMin.vue";
import ListingSection from "@/components/ListingSection/ListingSection.vue";
export default {
  name: "Home",
  components: {
    ArticleMin,
    ListingSection,
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
