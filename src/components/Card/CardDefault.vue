<template>
  <div class="card">
    <router-link :to="path">
      <img v-lazy="thumbnail.src" :alt="thumbnail.alt" srcset="" />
    </router-link>
    <h4>
      <router-link :to="path">
        {{ title }}
      </router-link>
    </h4>
    <p>{{ introduction }}</p>
  </div>
</template>

<script>
export default {
  name: "CardDefault",
  props: {
    title: {
      type: String,
      reuqired: true,
      default: "title",
    },
    introduction: {
      type: String,
      reuqired: true,
    },
    thumbnail: {
      type: Object,
      reuqired: true,
      default: function () {
        return {
          alt: "image",
          src: "#",
        };
      },
    },
    path: {
      type: String,
      reuqired: true,
      default: "#",
    },
  },
  data: function () {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";
.card {
  border: none;
  border-radius: 0%;
  a {
    color: $color-semi;
    display: block;
    margin-bottom: 0.5rem;
    &:hover,
    &:active {
      color: $tedx-red;
    }
    h4 {
      margin-bottom: 0.5rem;
    }
    img {
      display: block;
      width: 100%;
      min-height: 5rem;
      background-color: $color-light;
    }
  }
  p {
    color: $color-gray;
    font-size: $font-size-content;
    line-height: 1.2;
    margin-bottom: 0;
  }
}
</style>