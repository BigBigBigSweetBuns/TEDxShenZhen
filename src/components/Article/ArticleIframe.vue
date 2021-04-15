<template>
  <div class="article-iframe">
    <iframe
      :src="iframeSrc"
      ref="markdown"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      scrolling="no"
      noresize="noresize"
      :style="'height:' + mdHeight + 'px'"
      width="100%"
      height="100%"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "ArticleIframe",
  props: {
    bannerSrc: {
      type: String,
    },
    title: {
      type: String,
    },
    iframeSrc: {
      type: String,
      required: true,
      default: "",
    },
  },
  data: function () {
    return {
      mdHeight: 100,
    };
  },
  watch: {
    iframeSrc: function (newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
      this.setIframeHeight();
    },
  },
  methods: {
    setIframeHeight: function () {
      let that = this;
      this.$nextTick(() => {
        let iframe = that.$refs.markdown;
        iframe.onload = function () {
          let doc = iframe.contentDocument;
          that.mdHeight = doc.body.scrollHeight;
          let write = doc.getElementById("write");
          let typroaExport = doc.getElementsByClassName("typora-export")[0];
          typroaExport.style.paddingLeft = "0";
          typroaExport.style.paddingRight = "0";
          write.style.maxWidth = "100%";
          write.style.padding = "0";
          console.log(write);
        };
      });
    },
  },
  mounted: function () {},
};
</script>
<style lang="scss" scoped>
.article-iframe {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>