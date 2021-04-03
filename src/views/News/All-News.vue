<template>
  <div class="all-news">
    <div class="spinner" v-if="loading">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <b-container>
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
  name: "AllNews",
  data() {
    return {
      cardsList: [],
      pageNum: 1,
      loading: false,
      bottomout: false,
    };
  },
  methods: {
    isbottomout(code) {
      // 触底检测
      if (code != 0) {
        this.bottomout = true;
      }
    },
    loadmore() {
      this.loading = true;
      this.pageNum++;
      this.$axios
        .get("/news/list", {
          params: {
            page: this.pageNum,
          },
        })
        .then((res) => {
          const result = res.data.result;
          this.loading = false;
          if (res.data.code == 0) {
            this.cardsList.push(
              ...result.map((e) => {
                e.path = "/news" + e.path;
                return e;
              })
            );
          } else {
            this.isbottomout(res.data.code);
          }
        });
    },
    getNewsList() {
      this.$axios
        .get("/news/list", {
          params: {
            page: this.pageNum,
          },
        })
        .then((res) => {
          const result = res.data.result;
          if (res.data.code == 0) {
            this.cardsList = result.map((e) => {
              e.path = "/news" + e.path;
              return e;
            });
          }
        });
    },
  },
  created() {
    this.getNewsList();
  },
};
</script>

<style lang="scss" scoped>
.all-news {
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
  .mx-auto {
    display: block;
  }
}
</style>