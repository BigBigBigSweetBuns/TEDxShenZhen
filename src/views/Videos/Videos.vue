<template>
  <div class="videos">
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
  name: "Videos",
  data: function () {
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
        .get("/videos/list", {
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
          } else {
            this.isbottomout(res.data.code);
          }
        });
    },
    getVideoList() {
      this.$axios
        .get("/videos/list", {
          params: {
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

.videos {
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
  .mx-auto {
    display: block;
  }
}
</style>