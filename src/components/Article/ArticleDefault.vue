<template>
  <div class="article">
    <div class="banner" v-if="banner">
      <img :src="banner.src" alt="" srcset="" />
    </div>
    <div class="container">
      <div class="header">
        <p class="path" v-if="path">{{ pathContent }}</p>
        <h2 class="title">{{ title }}</h2>
        <h3 class="introduction" v-if="introduction">{{ introduction }}</h3>
      </div>
      <div class="content" v-html="contentHTML"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleDefault",
  props: {
    banner: {
      type: Object,
    },
    title: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
    },
    path: {
      type: Boolean,
      default: false,
    },
    contentHTML: {
      type: String,
      required: true,
    },
  },
  computed: {
    pathContent: function () {
      if (this.path) {
        console.log(this.$route.name);
        return this.$route.name;
      }
      return "";
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";
.article {
  .banner {
    width: 100%;
    min-height: 5rem;
    background-color: $color-gray;
    img {
      width: 100vw;
    }
  }
  .header {
    margin-top: 1rem;
    .path {
      color: $color-gray;
      font-size: $font-size-secondary;
    }
    .title {
      line-height: 1.4;
    }
    .theme {
      font-size: $font-size-secondary;
      color: $color-gray;
      font-weight: normal;
    }
  }

  .content {
    color: $color-semi;
    font-size: $font-size-content;
    margin-top: $margin-bottom;
    margin-bottom: $margin-bottom;
    ::v-deep h1,
    ::v-deep h2,
    ::v-deep h3,
    ::v-deep h4,
    ::v-deep h5 {
      margin-top: 1.25rem;
      margin-bottom: 1.25rem;
      line-height: 1;
    }
    ::v-deep h4 {
      font-size: $font-size-head;
      color: $color-semi;
    }
    ::v-deep p {
      color: $color-semi;
      line-height: 1.5;
    }
  }
}
</style>