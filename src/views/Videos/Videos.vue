<template>
  <div class="videos">
    <b-container>
      <cards-button :cardsList="videos"></cards-button>
    </b-container>
  </div>
</template>

<script>
import { videosData } from "@/assets/data/videos.js";
import CardsButton from "../../components/Card/CardsButton.vue";
export default {
  components: { CardsButton },
  name: "Videos",
  data: function () {
    return {
      videos: videosData,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";

.videos {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>