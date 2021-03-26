<template>
  <b-container class="listing-section">
    <h2>{{ header }}</h2>
    <b-row>
      <b-col
        cols="12"
        sm="6"
        md="6"
        v-for="(item, index) in block"
        :key="index"
      >
        <router-link :to="item.key">
          <img :src="item.imgSrc" alt="" srcset="" />
        </router-link>
        <router-link :to="item.key">
          <h4>{{ item.title }}</h4>
        </router-link>
        <p>{{ item.introduction }}</p>
      </b-col>
    </b-row>
    <router-link :to="toKey" class="see-more">
      see More <i class="iconfont icon-right-bold"></i>
    </router-link>
  </b-container>
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
    toKey: {
      type: String,
      default: "/",
    },
    block: {
      type: Array,
      // require: true,
      default: function () {
        return [
          {
            title:
              "TEDxSydney Conversations: Evolving the sustainability movement in Australia",
            introduction:
              "Tuesday 13 October 2020 3:30 pm—4:15 pm AEDT Facebook live event Across the world today we are simultaneously facing a health crisis, an economic crisis, an inequality crisis and a climate crisis....",
            key: "/",
            imgSrc: "#",
          },
          {
            title: "TEDxSydney 2020",
            introduction:
              "What is TEDxSydney? TEDxSydney is Australia's leading ideas forum and a gold standard event on the global TEDx stage. 2019 event highlights HERE",
            key: "/",
            imgSrc: "#",
          },
          {
            title: "TEDxSydney 2020",
            introduction:
              "What is TEDxSydney? TEDxSydney is Australia's leading ideas forum and a gold standard event on the global TEDx stage. 2019 event highlights HERE",
            key: "/",
            imgSrc: "#",
          },
          {
            title:
              "TEDxSydney Conversations: Evolving the sustainability movement in Australia",
            introduction:
              "Tuesday 13 October 2020 3:30 pm—4:15 pm AEDT Facebook live event Across the world today we are simultaneously facing a health crisis, an economic crisis, an inequality crisis and a climate crisis....",
            key: "/",
            imgSrc: "#",
          },
          {
            title: "TEDxSydney 2020",
            introduction:
              "What is TEDxSydney? TEDxSydney is Australia's leading ideas forum and a gold standard event on the global TEDx stage. 2019 event highlights HERE",
            key: "/",
            imgSrc: "#",
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
    > div {
      margin-bottom: 2rem;
    }
  }
  a {
    display: block;
    color: $color-semi;
    text-decoration: none;
    margin-bottom: 1rem;
    &:hover {
      color: $tedx-red;
    }
  }
  img {
    display: block;
    max-width: 100%;
    min-height: 5rem;
    background-color: $color-light;
    height: auto;
  }
  p {
    line-height: 1.2;
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