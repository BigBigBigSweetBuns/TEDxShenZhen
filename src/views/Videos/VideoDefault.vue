<template>
  <div class="video-default">
    <b-container>
      <iframe
        ref="videoview"
        :src="video.src"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
        :style="'height:' + iframeHeight"
      >
      </iframe>
      <!-- <iframe :src="video.src"></iframe> -->
      <h3>{{ video.title }}</h3>
      <p v-html="video.introduction"></p>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "VideoDefault",
  data: function () {
    return {
      video: {
        title: "通过行走感受土地与自我的力量 | 半落@TEDxShenzhen",
        introduction:
          "他用27 年时间，走过中国31个省市自治区，在大部分省待了超过一个月时间。自2011年至今，带领上万人以各种形式行走在中国大地上。他研究了美国国家步道对于美国特别是美国青年人的影响、朝圣之路对于欧洲的重要影响，以及西南联大的迁徙对于学生成长产生的深刻影响，希望陪伴青年人通过止语徒步中感受我们的国家。<br/>" +
          "半落，曾为海军航空兵军官，在北海舰队、东海舰队服役。现为究径止语徒步创始人，在国内开辟了24条9-10天的止语徒步线路，结合重要历史文化节点，陪伴中国年轻人在行走中了解自己，感受中华。",
        src:
          "//player.bilibili.com/player.html?aid=93272539&bvid=BV1hE411771M&cid=159227228&page=1",
      },
      iframeHeight: "1rem",
    };
  },
  created: function () {
    // this.$refs.vidoeview;
    console.log(this.$route.params.id);
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
  iframe {
    width: 100%;
    // width: 16rem * 4;
    min-height: 2rem;
  }
  h3 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: $font-size-secondary;
    color: $color-gray;
  }
}
</style>