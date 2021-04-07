<template>
  <div class="videos-talks">
    <div class="spinner" v-if="loading">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <b-container>
      <h2 class="header">{{ header }}</h2>
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
  name: "VideosTalks",
  data: function () {
    return {
      header: "演讲与表演",
      cardsList: [],
      pageNum: 1,
      loading: false,
      bottomout: false,
      division: ["talk", "preformances"],
      oldLength: 0,
    };
  },
  methods: {
    isbottomout(code, length) {
      // 触底检测
      if (code != 0 || this.oldLength > length) {
        this.bottomout = true;
      }
      this.oldLength = length;
    },
    loadmore() {
      this.loading = true;
      this.pageNum++;
      this.$axios
        .get("/videos/list/talk&preformances", {
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
                e.path = "/videos" + e.path;
                return e;
              })
            );
          }
          this.isbottomout(res.data.code, result.length);
        });
    },
    getVideoList() {
      this.$axios
        .get("/videos/list/division", {
          params: {
            division:this.division.toString(), 
            page: this.pageNum,
          },
        })
        .then((res) => {
          const result = res.data.result;
          if (res.data.code == 0) {
            this.cardsList = result.map((e) => {
              e.path = "/videos" + e.path;
              return e;
            });
          }
          this.isbottomout(res.data.code, result.length);
        });
    },
  },
  created() {
    this.getVideoList();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";

.videos-talks {
  margin-top: 1rem;
  margin-bottom: 1rem;
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
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .mx-auto {
    display: block;
  }
}
</style>