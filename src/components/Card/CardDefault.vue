<template>
  <div class="card">
    <router-link :to="path" class="thumbnail">
      <img v-lazy="thumbnail.src" :alt="thumbnail.alt" srcset="" />
    </router-link>
    <router-link :to="path">
      <h4>
        {{ title }}
      </h4>
    </router-link>
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
    transition: all 0.6s;
  }
  .thumbnail {
    position: relative;
    border-radius: $border-radius;
    overflow: hidden;
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: transparent;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      transition: all 0.6s;
    }
    img {
      display: block;
      width: 100%;
      min-height: 5rem;
      background-color: $color-light;
      transition: all 0.6s;
    }
  }
  p {
    color: $color-gray;
    font-size: $font-size-content;
    line-height: 1.2;
    margin-bottom: 0;
  }
  &:hover,
  &:active {
    .thumbnail {
      &::after {
        background-color: $color-black;
        opacity: 0.5;
      }
    }
    img {
      transform: scale(1.1, 1.1);
    }
    a {
      color: $tedx-red;
    }
  }
}
</style>