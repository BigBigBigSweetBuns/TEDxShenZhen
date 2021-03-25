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
  @include background("arrow-repeat.png?Expires=1616670165&OSSAccessKeyId=TMP.3KfTEV8UvBdxvLn9s5bTbGxtGnn6uaoPqhV3v7hVBfGbtDBuBGp231p7PxobHAQnZccjnGD5Y6W8FLYzraY7dqEQav45Lm&Signature=ANcCwsE6JWAWsnh7NTwOMbxuIjQ%3D&versionId=CAEQHRiBgID72OKiwxciIGZjOGYzZmQ5MDY3OTRlZTdhMDU4MWRjYjIyYjgwNmY0&response-content-type=application%2Foctet-stream");
}
</style>