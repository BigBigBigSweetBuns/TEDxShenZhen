<template>
  <div class="article">
    <div class="banner">
      <img :src="banner.src" alt="" srcset="" />
    </div>
    <div class="container">
      <div class="header">
        <h3 class="theme">{{ theme }}</h3>
        <h1 class="title">{{ title }}</h1>
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
      default: function () {
        return {
          src: "#",
          // "https://tedxsydney.com/wp-content/uploads/2020/09/Copy-of-Website-banner2-5.png",
        };
      },
    },
    title: {
      type: String,
      default: "title",
    },
    theme: {
      type: String,
      default: "News",
    },
    contentHTML: {
      type: String,
      default:
        "<p>In a world beset by inordinate challenges that span cultural, social, political, economic, environmental and existential concerns, seeking the truth has never been more critical to our survival.</p><p>2020 marks TEDxSydney’s 11th year and, due to COVID-19, our first year with a primarily online audience. When we chose the theme of REAL, we could not have known just how apt it would be considering the global impact of the pandemic – an impact that has reshaped our reality. How do we know what is real and truthful amid the noise we live in every day? How can we separate reality from fiction? And what is genuine versus imagined?</p>",
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";
.article {
  .banner {
    img {
      width: 100vw;
    }
  }
  .header {
    border-bottom: 2px solid $color-gray;

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
  }
}
</style>