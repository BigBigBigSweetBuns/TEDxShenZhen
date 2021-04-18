<template>
  <div class="video-default">
    <b-container>
      <h3>{{ title }}</h3>
      <div class="videoview" ref="videoview">
        <iframe
          v-if="videoType == 'iframe'"
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
        <video
          v-else
          :src="videoSrc"
          width="100%"
          :style="'height:' + iframeHeight"
          controls
        ></video>
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
      videoType: "src",
      iframeHeight: "2rem",
      routePath: "",
    };
  },
  methods: {
    changeTitle(title) {
      document.title = title + " - TEDx深圳";
    },
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
            console.log(this.videoSrc);
            this.videoType = result.video.type;
            this.changeTitle(result.title);
          }
        });
    },
  },
  created: function () {
    this.routePath = "/" + this.$route.params.path;
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
  background-color: $bg-color-white;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  .videoview {
    width: 100%;
    margin-bottom: 1rem;
    iframe {
      width: 100%;
      min-height: 2rem;
    }
  }
  h3 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  p {
    text-indent: 2em;
    font-size: $font-size-content;
    color: $color-gray;
  }
}
</style>