<template>
  <div class="all-news">
    <cards-list-button
      :header="header"
      :cardsList="cardsList"
    ></cards-list-button>
  </div>
</template>

<script>
import CardsListButton from "@/components/Card/CardsListButton.vue";
export default {
  components: { CardsListButton },
  name: "AllNews",
  data() {
    return {
      header: "TEDx 新闻",
      cardsList: [],
      pageNum: 1,
    };
  },
  methods: {
    getList(pageNum) {
      this.$axios
        .get("/news/list", {
          params: {
            page: pageNum,
          },
        })
        .then((res) => {
          const result = res.data.result;
          if (res.data.code == 0) {
            let temp = [
              ...this.cardsList,
              ...result.map((e) => {
                e.path = "/news" + e.path;
                return e;
              }),
            ];
            this.cardsList = temp;
          }
        });
    },
  },
  created() {
    this.getList(this.pageNum);
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