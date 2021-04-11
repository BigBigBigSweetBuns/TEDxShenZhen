<template>
  <div class="contributor-default">
    <div class="information">
      <div class="img-block">
        <img v-lazy="portrait.src" :alt="portrait.alt" />
      </div>
      <div>
        <h2>{{ name }}</h2>
      </div>
    </div>
    <div class="contentHTML" v-html="contentHTML"></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "ContributorDefault",
  props: {
    contributor: {
      type: Object,
      // required: true,
    },
    portrait: {
      type: Object,
      default: function () {
        return {
          src: "#",
          alt: "portrait",
        };
      },
    },
    name: {
      type: String,
      require: true,
    },
    contentHTML: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      // name: this.contributor.name,
      // portrait: this.contributor.portrait,
      // contentHTML: this.contributor.contentHTML,
    };
  },
  mounted() {
    console.log(this.contributor);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";
.contributor-default {
  .information {
    margin-top: 2rem;
    margin-bottom: 2rem;
    .img-block {
      max-width: 100%;
      max-height: 100%;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 1rem;
      margin: 0 auto 1rem;
      img {
        width: 100%;
        border-radius: 50%;
        overflow: hidden;
      }
    }
    h2 {
      text-align: center;
      &::before,
      &::after {
        display: inline-block;
        color: $tedx-red;
        content: "/";
        position: relative;
      }
      &::before {
        margin-right: 0.3em;
      }
      &::after {
        margin-left: 0.3em;
      }
    }
  }
  .contentHTML {
    ::v-deep p {
      color: $color-gray;
      text-indent: 2em;
      line-height: 1.5;
    }
  }
}
</style>
