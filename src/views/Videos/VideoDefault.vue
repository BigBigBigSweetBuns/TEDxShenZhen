<template>
  <div class="video-default">
    <b-container>
      <h3>{{ title }}</h3>
      <div class="videoview" ref="videoview">
        <iframe
          :src="videoSrc"
          scrolling="no"
          border="0"
          frameborder="no"
          framespacing="0"
          allowfullscreen="true"
          width="100%"
          :style="'height:' + iframeHeight"
        >
        </iframe>
      </div>
      <p v-html="contentHTML"></p>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "VideoDefault",
  data: function () {
    return {
      title: "",
      contentHTML: "",
      videoSrc: "",
      iframeHeight: "2rem",
      routePath: "",
    };
  },
  methods: {
    getVideoDefault() {
      this.$axios
        .get("/videos", {
          params: {
            path: this.routePath,
          },
        })
        .then((res) => {
          if (res.data.code == 0) {
            const result = res.data.result;
            this.contentHTML = result.contentHTML;
            this.title = result.title;
            this.videoSrc = result.video.src;
          }
        });
    },
  },
  created: function () {
    this.routePath = this.$route.params.path;
    this.getVideoDefault();
  },
  mounted: function () {
    this.iframeHeight = (this.$refs.videoview.clientWidth / 16) * 9 + "px";
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";
.video-default {
  margin-top: 2rem;
  margin-bottom: 2rem;
  .videoview {
    width: 100%;
    margin-bottom: 1rem;
    iframe {
      width: 100%;
      min-height: 2rem;
    }
  }
  h3 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  p {
    text-indent: 2em;
    font-size: $font-size-content;
    color: $color-gray;
  }
}
</style>