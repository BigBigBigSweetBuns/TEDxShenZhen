<template>
  <div class="about">
    <article-default
      :banner="aboutData.banner"
      :title="aboutData.title"
      :contentHTML="aboutData.contentHTML"
    ></article-default>
  </div>
</template>

<script>
import ArticleDefault from "../../components/Article/ArticleDefault.vue";
import { aboutData } from "@/assets/data/about.js";
export default {
  name: "about",
  components: { ArticleDefault },
  data: function () {
    return {
      header: "About TEDxSydney",
      aboutData: aboutData,
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  margin-bottom: 2rem;
}
</style>
