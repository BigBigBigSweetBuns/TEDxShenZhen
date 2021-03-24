<template>
  <div class="listing-section">
    <h2>{{ header }}</h2>
    <div class="row">
      <div class="col-md-4" v-for="(item, index) in block" :key="index">
        <router-link to="item.key">
          <img :src="item.imgSrc" alt="" srcset="" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.introduction }}</p>
        </router-link>
      </div>
    </div>
    <router-link to="key">
      see More <i class="icon icon-right"></i>
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
    key: {
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
        ];
      },
    },
  },
  data: function () {
    return {
      // header: "",
      // block: [
      //   { title: "", introduction: "", key: "/", imgSrc: "#" },
      //   { title: "", introduction: "", key: "/", imgSrc: "#" },
      // ],
    };
  },
};
</script>

<style scoped lang="scss">
</style>