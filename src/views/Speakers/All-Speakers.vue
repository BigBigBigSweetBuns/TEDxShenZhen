<template>
  <div class="all-speakers">
    <b-container>
      <div class="section">
        <h2 class="header">{{ header }}</h2>
        <speaker-list-2021 :cardsList="cardsList"></speaker-list-2021>
      </div>
    </b-container>
  </div>
</template>

<script>
import SpeakerList2021 from "./SpeakerList2021.vue";
export default {
  components: { SpeakerList2021 },
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
  margin-top: 2rem;
  margin-bottom: 2rem;
  .header {
    font-weight: bold;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
}
</style>