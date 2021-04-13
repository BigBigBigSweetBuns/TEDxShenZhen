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
        width="100%"
        height="100%"
      ></iframe>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "data_damend",
  data() {
    return {
      iframeSrc: "",
      mdHeight: "500",
    };
  },
  computed: {},
  methods: {
    changeTitle() {
      document.title = "dat_demand" + " - TEDx深圳";
    },
    setIframeHeight: function () {
      let that = this;
      this.$nextTick(() => {
        let iframe = that.$refs.markdown;
        iframe.onload = function () {
          that.mdHeight = iframe.contentDocument.body.scrollHeight;
        };
      });
    },
  },
  created: function () {
    // 请求数据
    this.iframeSrc = "http://www.tedxshenzhen.cn/html/data_demand.html";
  },
  mounted: function () {
    this.setIframeHeight();
  },
};
</script>

<style lang="scss" scoped>
.data-demand {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>