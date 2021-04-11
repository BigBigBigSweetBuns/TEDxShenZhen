<template>
  <div class="news">
    <iframe
      :src="iframeSrc"
      ref="markdown"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      scrolling="no"
      noresize="noresize"
      :style="'height:' + mdHeight + 'px'"
      width="100%"
      height="100%"
    ></iframe>
    <!-- <article-default
      v-else
      :banner="article.banner"
      :title="article.title"
      :contentHTML="article.contentHTML"
    ></article-default> -->
  </div>
</template>

<script>
// import ArticleDefault from "@/components/Article/ArticleDefault.vue";
export default {
  name: "news",
  // components: { ArticleDefault },
  data: function () {
    return {
      mdHeight: 500,
      articleType: "HTML",
      article: {
        title: "TEDxSydney 2020 Presents Discovery Sessions",
        theme: "News",
        contentHTML:
          "<p>In a world beset by inordinate challenges that span cultural, social, political, economic, environmental and existential concerns, seeking the truth has never been more critical to our survival.</p><p>2020 marks TEDxSydney’s 11th year and, due to COVID-19, our first year with a primarily online audience. When we chose the theme of REAL, we could not have known just how apt it would be considering the global impact of the pandemic – an impact that has reshaped our reality. How do we know what is real and truthful amid the noise we live in every day? How can we separate reality from fiction? And what is genuine versus imagined?</p>",
      },
      iframeSrc: "",
      routePath: "",
    };
  },
  computed: {
    isType() {
      if (this.articleType == "HTML") {
        return true;
      }
      return false;
    },
  },
  methods: {
    changeTitle(title) {
      document.title = title + " - TEDx深圳";
    },
    setIframeHeight: function () {
      let that = this;
      this.$nextTick(() => {
        let iframe = that.$refs.markdown;
        iframe.onload = function () {
          that.mdHeight = iframe.contentDocument.body.scrollHeight;
        };
      });
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