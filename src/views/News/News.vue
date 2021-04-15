<template>
  <div class="news">
    <b-container>
      <article-iframe :iframeSrc="iframeSrc"></article-iframe>
    </b-container>
  </div>
</template>

<script>
import ArticleIframe from "@/components/Article/ArticleIframe.vue";
export default {
  components: { ArticleIframe },
  name: "news",
  data: function () {
    return {
      mdHeight: 500,
      iframeSrc: "",
      routePath: "",
    };
  },
  computed: {},
  methods: {
    changeTitle(title) {
      document.title = title + " - TEDx深圳";
    },
    getArticleData: function () {
      this.$axios
        .get("/news", {
          params: {
            path: this.routePath,
          },
        })
        .then((res) => {
          const result = res.data.result;
          if (res.data.code == 0) {
            this.articleType = result.article.type;
            this.iframeSrc = result.article.src;
            this.changeTitle(result.title);
          }
        })
        .then(() => {
          this.setIframeHeight();
        });
    },
  },
  created: function () {
    // 请求数据
    this.routePath = "/" + this.$route.params.path;
    this.getArticleData();
  },
  mounted: function () {},
};
</script>
<style lang="scss" scoped>
.news {
  margin-bottom: 2rem;
}
</style>