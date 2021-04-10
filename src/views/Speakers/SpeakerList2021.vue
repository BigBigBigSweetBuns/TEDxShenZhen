<template>
  <div class="card-list">
    <b-row>
      <b-col
        :cols="cols"
        :sm="sm"
        :md="md"
        v-for="(cardData, index) in cardsList"
        :key="index"
      >
        <div class="card" @mouseover="shadow(index)">
          <router-link :to="cardData.path">
            <div class="img-block">
              <img
                v-lazy="cardData.portrait.src"
                :alt="cardData.portrait.alt"
                srcset=""
              />
              <div ref="shadowTopright" class="shadow-topright"></div>
              <div ref="shadowBottomleft" class="shadow-bottomleft"></div>
            </div>
          </router-link>
          <h4 class="">
            <router-link :to="cardData.path">
              {{ cardData.name }}
            </router-link>
          </h4>
          <p>{{ cardData.introduction }}</p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "SpeakerList2021",
  components: {},
  props: {
    cardsList: {
      type: Array,
      reuqired: true,
    },
    cols: {
      type: [String, Number],
      default: 12,
    },
    sm: {
      type: [String, Number],
      default: 4,
    },
    md: {
      type: [String, Number],
      default: 3,
    },
  },
  data() {
    return {
      hover: false,
    };
  },
  computed: {},
  methods: {
    //当前操作的元素
    shadow(idx) {
      let shadow = "";
      for (let i = 0; i < 50; i++) {
        shadow +=
          (shadow ? "," : "") + 0 + "px " + -i + "px" + "  rgba(70,70,70,0.05)";
      }
      this.$refs.shadowTopright[idx].style.boxShadow = shadow;
      this.$refs.shadowTopright[idx].style.transform = "rotate(" + 70 + "deg)";
      this.$refs.shadowBottomleft[idx].style.boxShadow = shadow;
      this.$refs.shadowBottomleft[idx].style.transform =
        "rotate(" + 250 + "deg)";
    },
  },
  mounted: function () {},
};
</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";
.card-list {
  .card {
    border: none;
    border-radius: 0%;
    .img-block {
      position: relative;
      .shadow-topright,
      .shadow-bottomleft {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: absolute;
      }
      .shadow-topright {
        top: 0;
        right: 0;
      }
      .shadow-bottomleft {
        bottom: 0;
        left: 0;
      }
      img {
        position: relative;
        border-radius: 50%;
      }
    }
    & > :nth-child(n) {
      margin-bottom: 0.5rem;
    }
    a {
      color: $color-semi;
      display: block;
      &:hover,
      &:active {
        color: $tedx-red;
      }
      img {
        display: block;
        width: 100%;
        min-height: 5rem;
        background-color: $color-light;
      }
    }
    h4 {
      text-align: center;
    }
    p {
      color: $color-gray;
      font-size: $font-size-content;
      line-height: 1.2;
      margin-bottom: 0;
    }
  }
}
</style>