<template>
  <div class="all-videos">
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
  name: "All-Videos",
  data: function () {
    return {
      header: "全部视频",
      cardsList: [],
      pageNum: 1,
    };
  },
  methods: {
    getList(pageNum) {
      this.$axios
        .get("/videos/list", {
          params: {
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

.all-videos {
  margin-bottom: 2rem;
  position: relative;
  background-color: $bg-color-white;
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