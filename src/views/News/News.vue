<template>
  <div class="news">
    <article-default></article-default>
  </div>
</template>

<script>
import ArticleDefault from "@/components/Article/ArticleDefault.vue";
export default {
  name: "news",
  components: { ArticleDefault },
  data: function () {
    return {
      article: {
        title: "TEDxSydney 2020 Presents Discovery Sessions",
        theme: "News",
        contentHMTL: "content",
      },
    };
  },
  created: function () {
    // 请求数据
  },
};
</script>
<style lang="sass" scoped>
</style>