<template>
  <div class="contributor-speaker">
    <b-container>
      <contributor-default
        :portrait="portrait"
        :name="name"
        :contentHTML="contentHTML"
      ></contributor-default>
      <!-- <grid-divider></grid-divider> -->
      <!-- <cards-list ></cards-list> -->
    </b-container>
  </div>
</template>

<script>
import ContributorDefault from "@/components/Contributor/ContributorDefault.vue";
// import GridDivider from "@/components/GridDivider/GridDivider.vue";
// import CardsList from "@/components/Card/CardsList.vue";
export default {
  components: { ContributorDefault },
  name: "ContributorSpeaker",
  data() {
    return {
      speakerPath: "",
      portrait: "",
      name: "",
      contentHTML: "",
    };
  },
  methods: {
    changeTitle(title) {
      document.title = title + " - TEDx深圳";
    },
    getSpeaker() {
      this.$axios
        .get("/speakers", {
          params: {
            path: this.speakerPath,
          },
        })
        .then((res) => {
          const result = res.data.result;
          if (res.data.code == 0) {
            this.name = result.name;
            this.portrait = result.portrait;
            this.contentHTML = result.contentHTML;
            this.changeTitle(result.name);
            // this.getList(this.speakerData.id);
          }
        });
    },
    getList(authorID) {
      this.$axios
        .get("/videos/list/authorid", {
          params: {
            authorid: authorID,
          },
        })
        .then((res) => {
          const result = res.data.result;
          if (res.data.code == 0) {
            console.log(result);
          }
        });
    },
  },
  created() {
    this.speakerPath = "/" + this.$route.params.path;
    this.getSpeaker();
  },
};
</script>

<style lang="scss" scoped>
.contributor-speaker {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>