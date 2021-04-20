<template>
  <div class="all-news">
    <b-container>
      <cards-list-button
        :header="header"
        :cardsList="cardsList"
        :bottomout="bottomout"
        @getList="getList"
      ></cards-list-button>
    </b-container>
  </div>
</template>

<script>
import CardsListButton from "@/components/Card/CardsListButton.vue";
export default {
  components: { CardsListButton },
  name: "AllNews",
  data() {
    return {
      header: "新闻",
      cardsList: [],
      pageNum: 1,
      bottomout: false,
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
          } else {
            this.bottomout = true;
          }
        })
        .catch(() => {
          this.cardsList = this.cardsList.splice(1, 0);
        });
    },
  },
  created() {
    this.getList(this.pageNum);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";
.all-news {
  background-color: $bg-color-white;
  margin-top: 2rem;
  margin-bottom: 2rem;
  position: relative;
  .mx-auto {
    display: block;
  }
}
</style>