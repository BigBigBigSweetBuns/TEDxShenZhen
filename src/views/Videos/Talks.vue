<template>
  <div class="videos-talks">
    <b-container>
    <cards-list-button
      :header="header"
      :cardsList="cardsList"
    ></cards-list-button>
    </b-container>
  </div>
</template>

<script>
import CardsListButton from "@/components/Card/CardsListButton.vue";
export default {
  components: { CardsListButton },
  name: "VideosTalks",
  data: function () {
    return {
      header: "演讲与表演",
      cardsList: [],
      pageNum: 1,
      division: ["talk", "performances"],
    };
  },
  methods: {
    getList(pageNum) {
      this.$axios
        .get("/videos/list/division", {
          params: {
            division: this.division.toString(),
            page: pageNum,
          },
        })
        .then((res) => {
          const result = res.data.result;
          if (res.data.code == 0) {
            this.cardsList = [
              ...this.cardsList,
              ...result.map((e) => {
                e.path = "/videos" + e.path;
                return e;
              }),
            ];
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
@import "@/assets/variable.scss";

.videos-talks {
  background-color: $bg-color-white;
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