<template>
  <div class="cards-list-button">
    <div class="spinner" v-if="loading">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <b-container>
      <h3 class="header">{{ header }}</h3>
      <cards-list :cardsList="cardsList"></cards-list>
      <b-button
        class="mx-auto"
        v-if="!loading && !bottomout"
        v-on:click="loadmore"
        >LOAD MORE</b-button
      >
    </b-container>
  </div>
</template>

<script>
import CardsList from "../../components/Card/CardsList.vue";
export default {
  components: { CardsList },
  name: "CardsListButton",
  props: {
    header: {
      type: String,
    },
    axiosPath: {
      type: String,
      required: true,
    },
    cardsList: {
      type: Array,
      // require: true,
    },
  },
  data() {
    return {
      // cardsListData: this.cardsList,
      pageNum: 1,
      loading: false,
      oldLength: 0,
      bottomout: false,
      getPath: this.axiosPath,
    };
  },
  watch: {
    cardsList: function (newVal, oldVal) {
      this.loading = false;
      this.isbottomout(newVal.length - oldVal.length);
    },
  },
  methods: {
    loadmore() {
      console.log("loadmore");
      this.loading = true;
      this.pageNum++;
      this.$parent.getList(this.pageNum);
    },
    isbottomout(length) {
      // 触底检测
      if (this.oldLength > length) {
        this.bottomout = true;
      }
      this.oldLength = length;
    },
  },
  created() {
    // this.$parent.getList(this.pageNum);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";
.cards-list-button {
  margin-top: 2rem;
  margin-bottom: 2rem;
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
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .mx-auto {
    display: block;
  }
}
</style>