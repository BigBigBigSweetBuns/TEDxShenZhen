<template>
  <div class="card-list">
    <b-row>
      <b-col
        cols="12"
        sm="6"
        md="4"
        v-for="(cardData, index) in cardsList"
        :key="index"
      >
        <card-default
          :title="cardData.title"
          :introduction="cardData.introduction"
          :thumbnail="cardData.thumbnail"
          :path="cardData.path"
        ></card-default>
      </b-col>
    </b-row>
    <b-button class="mx-auto">LOAD MORE</b-button>
  </div>
</template>

<script>
import CardDefault from "@/components/Card/CardDefault.vue";
export default {
  name: "CardsButton",
  components: { CardDefault },
  props: {
    cardsList: {
      type: Array,
      reuqired: true,
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";
.card-list {
  > .mx-auto {
    display: block;
  }
}
</style>