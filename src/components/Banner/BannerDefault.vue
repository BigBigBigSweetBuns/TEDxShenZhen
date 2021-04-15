<template>
  <div class="banner-default" v-if="bannerSrc">
    <img :src="bannerSrc" alt="" srcset="" />
  </div>
</template>

<script>
export default {
  name: "BannerDefault",
  props: ['bannerSrc'],
};
</script>
<style lang="scss" scoped>
.banner-default {
  max-width: 1140px;
  min-height: 5rem;
  background-color: gray;
  margin: 0 auto 2rem;
  img {
    width: 100%;
  }
}
</style>