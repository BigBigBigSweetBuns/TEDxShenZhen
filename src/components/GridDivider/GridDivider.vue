<template>
  <b-container class="grid-divider"></b-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/variable";
@mixin background($path){
  background: url($imagesBaseURL+$path) repeat-x;
}
.grid-divider {
  height: 12px;
  margin: 35px auto;
  @include background("arrow-repeat.png?versionId=CAEQHRiBgID72OKiwxciIGZjOGYzZmQ5MDY3OTRlZTdhMDU4MWRjYjIyYjgwNmY0");
}
</style>