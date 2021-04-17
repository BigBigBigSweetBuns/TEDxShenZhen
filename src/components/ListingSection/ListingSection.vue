<template>
  <div class="listing-section">
    <h2>{{ header }}</h2>
    <b-row>
      <b-col
        cols="12"
        sm="6"
        md="4"
        v-for="(item, index) in block"
        :key="index"
        class="item"
      >
        <router-link :to="item.path" class="thumbnail">
          <img :src="item.thumbnail.src" alt="" srcset="" />
        </router-link>
        <router-link :to="item.path">
          <h4>{{ item.title }}</h4>
        </router-link>
        <p>{{ item.introduction }}</p>
      </b-col>
    </b-row>
    <router-link :to="topath" class="see-more">
      更多 <i class="iconfont icon-right-bold"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "listingSection",
  props: {
    header: {
      type: String,
      // required: true,
      default: "listing-section",
    },
    topath: {
      type: String,
      default: "/",
    },
    block: {
      type: Array,
      // require: true,
      default: function () {
        return [
          {
            title: "title",
            introduction: "introduction",
            path: "/",
            thumbnail: { src: "#", alt: "thumbnail" },
          },
        ];
      },
    },
  },
  data: function () {
    return {
      // header: "",
      // block: block,
    };
  },
  computed: {},
};
</script>

<style scoped lang="scss">
@import "@/assets/variable";
.listing-section {
  position: relative;
  > h2 {
    color: $color-gray;
    line-height: 1;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .row {
    margin-bottom: 2rem;
    > div {
      margin-bottom: 2rem;
    }
  }
  .item {
    a {
      display: block;
      color: $color-semi;
      text-decoration: none;
      margin-bottom: 1rem;
      transition: all 0.6s;
    }
    .thumbnail {
      overflow: hidden;
      position: relative;
      border-radius: 0.25rem;
      transition: all 0.6s;
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background-color: transparent;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transition: all 0.6s;
      }
    }
    img {
      display: block;
      max-width: 100%;
      min-height: 5rem;
      background-color: $color-light;
      height: auto;
      transition: all 0.6s;
    }
    p {
      color: $color-gray;
      margin-bottom: 0;
    }
    &:hover {
      .thumbnail {
        &::after {
          background-color: $color-black;
          opacity: 0.5;
        }
      }
      img {
        transform: scale(1.1, 1.1);
      }
      a {
        color: $tedx-red;
      }
    }
  }

  .see-more {
    color: $tedx-red;
    font-size: $font-size-content;
    line-height: 1;
    font-weight: bold;
    position: absolute;
    right: 15px;
    top: (2rem - $font-size-content) / 2;
  }
}
</style>