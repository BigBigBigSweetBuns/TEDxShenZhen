<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <article-min />
    <listing-section></listing-section>
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleMin from "@/components/ArticleMin.vue";
import ListingSection from "@/components/ListingSection/ListingSection.vue";
export default {
  name: "Home",
  components: {
    ArticleMin,
    ListingSection,
  },
};
</script>
