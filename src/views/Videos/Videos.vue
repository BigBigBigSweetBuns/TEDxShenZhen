<template>
  <div class="videos">
    <b-container>
      <cards-list-button
        :header="header"
        :cardsList="cardsList"
        @getList="getList"
      ></cards-list-button>
    </b-container>
  </div>
</template>

<script>
import CardsListButton from "@/components/Card/CardsListButton.vue";
export default {
  components: { CardsListButton },
  name: "Videos",
  data: function () {
    return {
      header: "短片，活动视频",
      cardsList: [],
      pageNum: 1,
      division: ["video"],
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

.videos {
  background-color: $bg-color-white;
  margin-top: 2rem;
  margin-bottom: 2rem;
  position: relative;
  .header {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .mx-auto {
    display: block;
  }
}
</style>