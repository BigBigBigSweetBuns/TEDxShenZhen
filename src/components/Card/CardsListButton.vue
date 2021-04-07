<template>
  <div class="cards-list-button">
    <div class="spinner" v-if="loading">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <b-container>
      <h3 class="header">{{ header }}</h3>
      <cards-list :cardsList="cardsList"></cards-list>
      <b-button
        class="mx-auto"
        v-if="!loading && !bottomout"
        v-on:click="loadmore"
        >LOAD MORE</b-button
      >
    </b-container>
  </div>
</template>

<script>
import CardsList from "../../components/Card/CardsList.vue";
export default {
  components: { CardsList },
  name: "CardsListButton",
  props: {
    header: {
      type: String,
    },
    axiosPath: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      cardsList: [],
      pageNum: 1,
      loading: false,
      bottomout: false,
      getPath: this.axiosPath,
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
        .get(this.getPath + "/list", {
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
                e.path = this.getPath + e.path;
                return e;
              })
            );
          } else {
            this.isbottomout(res.data.code);
          }
        });
    },
    getList() {
      this.$axios
        .get(this.getPath + "/list", {
          params: {
            page: this.pageNum,
          },
        })
        .then((res) => {
          const result = res.data.result;
          if (res.data.code == 0) {
            this.cardsList = result.map((e) => {
              e.path = this.getPath + e.path;
              return e;
            });
          }
        });
    },
  },
  created() {
    this.getList();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";
.cards-list-button {
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
  .header {
    font-size: 2rem;
    font-weight: bold;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .mx-auto {
    display: block;
  }
}
</style>