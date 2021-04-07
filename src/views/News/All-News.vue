<template>
  <div class="all-news">
    <cards-list-button :header="header" :axiosPath="axiosPath"></cards-list-button>
  </div>
</template>

<script>
import CardsListButton from "../../components/Card/CardsListButton.vue";
export default {
  components: { CardsListButton },
  name: "AllNews",
  data() {
    return {
      header:"TEDx 新闻",
      axiosPath: "/news",
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