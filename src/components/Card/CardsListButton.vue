<template>
  <div class="cards-list-button">
    <div class="spinner" v-if="loading && !isbottomout">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <h3 class="header">{{ header }}</h3>
    <cards-list :cardsList="cardsList"></cards-list>
    <b-button
      class="mx-auto"
      v-if="!loading && !isbottomout"
      v-on:click="loadmore"
      >加载更多</b-button
    >
  </div>
</template>

<script>
import CardsList from "@/components/Card/CardsList.vue";
export default {
  components: { CardsList },
  name: "CardsListButton",
  props: {
    header: {
      type: String,
    },
    cardsList: {
      type: Array,
      require: true,
    },
    bottomout: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      pageNum: 1,
      loading: false,
      oldLength: 12,
      isbottomout: this.bottomout,
    };
  },
  watch: {
    bottomout: function (newVal) {
      this.isbottomout = newVal;
    },
    cardsList: function (newVal, oldVal) {
      this.loading = false;
      this.ifbottomout(newVal.length - oldVal.length);
    },
  },
  methods: {
    loadmore() {
      this.loading = true;
      this.pageNum++;
      this.$emit("getList", this.pageNum);
    },
    ifbottomout(length) {
      // 触底检测
      if (this.oldLength > length) {
        this.isbottomout = true;
        this.loading = false;
      }
      this.oldLength = length;
    },
  },
  created() {
    this.loading = true;
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";
.cards-list-button {
  background-color: $bg-color-white;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  position: relative;
  .spinner {
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 499;
  }
  .header {
    font-size: 2rem;
    font-weight: bold;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .mx-auto {
    display: block;
  }
}
</style>