<template>
  <div id="app">
    <page-header></page-header>

    <router-view />
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from "@/components/page/PageHeader";
import PageFooter from "@/components/page/PageFooter";
export default {
  name: "APP",
  components: { PageHeader, PageFooter },
  data: function () {
    return {};
  },
};
</script>
<style lang="scss" >
@import "./assets/main.scss";
</style>
