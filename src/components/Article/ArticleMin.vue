<template>
  <div class="article">
    <header>
      <h1>henader</h1>
    </header>
    <div class="content" v-html="article.contents"></div>
  </div>
</template>

<script>
export default {
  name: "articleMin",
  data: function () {
    return {
      article: {
        header: "header",
        contents:
          "<p>The TEDxSydney team has made it through another year and TEDxSydney 2020 online was a huge success.</p>",
      },
    };
  },
};
</script>

<style scoped lang="scss">
.article {
  header {
    margin-top: 10px;
  }
}
</style>
