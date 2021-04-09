<template>
  <div class="All-speakers">
    <b-container>
      <cards-list :cardsList="cardsListData"></cards-list>
    </b-container>
  </div>
</template>

<script>
import CardsList from "../../components/Card/CardsList.vue";
export default {
  components: { CardsList },
  name: "All-speakers",
  data() {
    return {
      division: [2021, 2020],
      cardsList: [],
    };
  },
  computed: {
    cardsListData() {
      const List = this.cardsList.map((e) => {
        return {
          id: e.id,
          title: e.name,
          thumbnail: e.portrait,
          path: e.path,
        };
      });
      return List;
    },
  },
  methods: {
    getList() {
      this.$axios
        .get("/speakers/list/division", {
          params: {
            division: this.division.toString(),
          },
        })
        .then((res) => {
          const result = res.data.result;
          if (res.data.code == 0) {
            this.cardsList = [
              ...this.cardsList,
              ...result.map((e) => {
                e.path = "/speakers" + e.path;
                return e;
              }),
            ];
          }
          console.log(this.cardsList);
        });
    },
  },
  created: function () {
    this.getList();
  },
};
</script>

<style lang="scss" scoped>
</style>