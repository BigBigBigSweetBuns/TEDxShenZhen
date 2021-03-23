<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <article-min />
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleMin from "@/components/ArticleMin.vue";

export default {
  name: "Home",
  components: {
    ArticleMin,
  },
};
</script>
