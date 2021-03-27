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
  created: function () {
    console.log(1);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";
.about {
  margin-bottom: 2rem;
  ::v-deep .content {
    h4 {
      position: relative;
      &:before {
        content: "";
        display: block;
        height: $font-size-head;
        width: 3px;
        background-color: $tedx-red;
        position: absolute;
        top: 0;
        left: -1rem;
      }
    }
  }
}
</style>
