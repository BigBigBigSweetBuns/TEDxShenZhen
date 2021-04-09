<template>
  <div class="all-speakers">
    <b-container>
      <div class="section">
        <h2 class="header">{{ header }}</h2>
        <cards-list :cardsList="cardsListData"></cards-list>
      </div>
    </b-container>
  </div>
</template>

<script>
import CardsList from "@/components/Card/CardsList.vue";
export default {
  components: { CardsList },
  name: "All-speakers",
  data() {
    return {
      header: "2021年大会讲者",
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
.all-speakers {
  .header {
    font-weight: bold;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  ::v-deep .card {
    img {
      background-color: transparent !important;
    }
    h4 {
      text-align: center;
    }
  }
}
</style>