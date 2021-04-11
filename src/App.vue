<template>
  <div id="app">
    <navbar-mobile v-if="is_mobilewidth"></navbar-mobile>
    <page-header v-else></page-header>

    <router-view />
    <page-footer></page-footer>
  </div>
</template>

<script>
import NavbarMobile from "@/components/page/NavbarMobile.vue";
import PageHeader from "@/components/page/PageHeader";
import PageFooter from "@/components/page/PageFooter";
export default {
  name: "APP",
  components: { NavbarMobile, PageHeader, PageFooter },
  data: function () {
    return {};
  },
  computed: {
    is_mobilewidth() {
      return window.innerWidth <= 767;
    },
  },
  created: function () {},
};
</script>
<style lang="scss" >
@import "./assets/main.scss";
html {
  overflow-x: hidden;
}
#app {
  width: 100vw;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC",
    "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
}
</style>
