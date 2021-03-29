<template>
  <div class="data-demend">
    <b-container>
      <!-- <div id="markdown" v-html="compiledMarkdown"></div> -->
      <iframe
        src="/html/data_demend.html"
        ref="markdown"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        scrolling="no"
        noresize="noresize"
        :style="'height:' + mdHeight + 'px'"
        height="100%"
        width="100%"
      ></iframe>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Data_Demend",
  data() {
    return {
      mdHeight: 100,
    };
  },
  computed: {
    // compiledMarkdown: function () {
    //   return marked(this.input, { sanitize: true });
    // },
  },
  mounted() {
    let that = this;
    this.$nextTick(() => {
      let iframe = that.$refs.markdown;
      console.log(iframe.contentWindow.document.body.scrollHeight);
      iframe.onload = function () {
        that.mdHeight = iframe.contentDocument.body.scrollHeight;
      };
      //   console.log(that.$refs.markdown.contentWindow.document.body.scrollHeight);
      // this.mdHeight = that.$refs.markdown.contentWindow.screen.height;
      //   console.log(this.mdHeight);
    });
  },
};
</script>

<style lang="scss" scoped>
.data-demend {
  iframe {
    height: auto;
    max-height: 1000vh;
  }
}
</style>
