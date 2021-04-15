<template>
  <div class="frequently-asked-questions">
    <b-container>
      <banner-default :bannerSrc="bannerSrc"></banner-default>
      <article-iframe :iframeSrc="iframeSrc"></article-iframe>
    </b-container>
  </div>
</template>

<script>
import ArticleIframe from "@/components/Article/ArticleIframe.vue";
import BannerDefault from "@/components/Banner/BannerDefault.vue";
export default {
  components: { ArticleIframe, BannerDefault },
  name: "FrequentlyAskedQuestions",
  data() {
    return {
      bannerSrc:
        "https://tedxshenzhen.oss-cn-shenzhen.aliyuncs.com/aboutus/aboutus.jpg",
      iframeSrc: "",
    };
  },
  created: function () {
    setTimeout(() => {
      this.iframeSrc =
        "http://www.tedxshenzhen.cn/html/aboutus/frequently-asked-questions.html";
    }, 50);
  },
};
</script>

<style lang="scss" scoped>
</style>