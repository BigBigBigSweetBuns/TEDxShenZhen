<template>
  <div class="data-demand">
    <b-container>
      <iframe
        :src="iframeSrc"
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
  name: "Data_Demand",
  data() {
    return {
      mdHeight: 100,
    };
  },
  computed: {
    iframeSrc: function () {
      return "/html/data_demend.html";
    },
  },
  mounted() {
    let that = this;
    this.$nextTick(() => {
      let iframe = that.$refs.markdown;
      console.log(iframe.contentWindow.document.body.scrollHeight);
      iframe.onload = function () {
        that.mdHeight = iframe.contentDocument.body.scrollHeight;
      };
    });
  },
};
</script>

<style lang="scss" scoped>
.data-demand {
  iframe {
    height: auto;
    max-height: 1000vh;
  }
}
</style>
