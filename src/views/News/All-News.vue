<template>
  <div class="all-news">
    <b-container>
      <cards-button :cardsList="cardsList"></cards-button>
    </b-container>
  </div>
</template>

<script>
import CardsButton from "../../components/Card/CardsButton.vue";
export default {
  components: { CardsButton },
  name: "All-News",
  data() {
    return {
      cardsList: [],
    };
  },
  created() {
    this.$axios
      .get("/news/list", {
        params: {
          page: 1,
        },
      })
      .then((res) => {
        const result = res.data.result;
        console.log(result);
        if (res.data.code == 0) {
          this.cardsList = result.map((e) => {
            e.path = "/news" + e.path;
            return e;
          });
        }
      });
  },
};
</script>

<style lang="scss" scoped>
.all-news {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>