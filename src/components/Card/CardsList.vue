<template>
  <div class="card-list">
    <b-row>
      <b-col
        :cols="cols"
        :sm="sm"
        :md="md"
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
  </div>
</template>

<script>
import CardDefault from "@/components/Card/CardDefault.vue";
export default {
  name: "CardsList",
  components: { CardDefault },
  props: {
    cardsList: {
      type: Array,
      reuqired: true,
    },
    cols: {
      type: [String, Number],
      default: 12,
    },
    sm: {
      type: [String, Number],
      default: 6,
    },
    md: {
      type: [String, Number],
      default: 4,
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";
.card-list {
  > .row > div {
    margin-bottom: 2rem;
  }
}
</style>