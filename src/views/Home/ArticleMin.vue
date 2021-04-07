<template>
  <div class="article">
    <header v-if="article.header">
      <h1>{{ article.header }}</h1>
    </header>
    <div class="content" v-html="article.contents"></div>
  </div>
</template>

<script>
export default {
  name: "articleMin",
  props: {
    header: {
      type: String,
      default: "",
    },
    contentHTML: {
      type: String,
      default:
        "<h3 style='color:red'>Thanks to All Who Made it REAL</h3>" +
        "<p>The TEDxSydney team has made it through another year and TEDxSydney 2020 online was a huge success.</p>" +
        "<p>Friday 6 November was a remarkable day. We think it’s fair to say that we blew everyone away with our shiny new virtual platform AND a completely unique conference format that included a tiny studio audience and a much larger virtual studio audience whose presence was writ large thanks to a 20m wide Zoom Wall of Faces.</p>" +
        "<p>The TEDxSydney team has made it through another year and TEDxSydney 2020 online was a huge success.</p>" +
        "<p> <img src='#' alt=''></p>" +
        "<p>The TEDxSydney team has made it through another year and TEDxSydney 2020 online was a huge success.</p>",
    },
  },
  data: function () {
    return {
      article: {
        header: this.header,
        contents: this.contentHTML,
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";
.article {
  margin-top: 2rem;
  header {
    margin-bottom: 1.5rem;
  }
  .content {
    ::v-deep p {
      color: $color-gray;
      font-size: $font-size-title;
      line-height: 1.5;
      margin-bottom: 0.8rem;
    }
    ::v-deep img {
      display: block;
      max-width: 100%;
      height: auto;
      min-height: 3rem;
      background-color: $color-light;
    }
  }
}
</style>
