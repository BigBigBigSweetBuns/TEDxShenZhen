<template>
  <div class="news">
    <article-default
      :banner="article.banner"
      :title="article.title"
      :contentHTML="article.contentHTML"
    ></article-default>
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
        contentHTML:
          "<p>In a world beset by inordinate challenges that span cultural, social, political, economic, environmental and existential concerns, seeking the truth has never been more critical to our survival.</p><p>2020 marks TEDxSydney’s 11th year and, due to COVID-19, our first year with a primarily online audience. When we chose the theme of REAL, we could not have known just how apt it would be considering the global impact of the pandemic – an impact that has reshaped our reality. How do we know what is real and truthful amid the noise we live in every day? How can we separate reality from fiction? And what is genuine versus imagined?</p>",
      },
    };
  },
  created: function () {
    // 请求数据
  },
};
</script>
<style lang="scss" scoped>
.news {
  margin-bottom: 2rem;
}
</style>