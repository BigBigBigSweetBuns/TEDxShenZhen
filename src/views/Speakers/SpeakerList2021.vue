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
        <div
          class="card"
          @mouseover="showShadow(index)"
          @mouseleave="hiddenShadow(index)"
        >
          <router-link :to="cardData.path">
            <div ref="imgBlock" class="img-block">
              <img
                v-lazy="cardData.portrait.src"
                :alt="cardData.portrait.alt"
                srcset=""
              />
              <div ref="shadowTopright" class="shadow-topright"></div>
              <div ref="shadowBottomleft" class="shadow-bottomleft"></div>
            </div>
          </router-link>
          <h4>
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
      default: 6,
    },
    md: {
      type: [String, Number],
      default: 4,
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
    showShadow(idx) {
      const maxPX = this.$refs.imgBlock[idx].clientWidth / 4; //最长的长度
      const aPX = Math.floor(maxPX / 20);
      let shadow = "";
      for (let i = -2; i < 20; i++) {
        shadow +=
          (shadow ? "," : "") +
          0 +
          "px " +
          -aPX * i +
          "px" +
          "  rgba(70,70,70,0.05)";
      }
      this.$refs.shadowTopright[idx].style.boxShadow = shadow;
      this.$refs.shadowBottomleft[idx].style.boxShadow = shadow;
    },
    hiddenShadow(idx) {
      const shadow = "";
      this.$refs.shadowTopright[idx].style.boxShadow = shadow;
      this.$refs.shadowBottomleft[idx].style.boxShadow = shadow;
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
      height: 0;
      padding-bottom: 100%;
      position: relative;
      .shadow-topright,
      .shadow-bottomleft {
        display: block;
        width: 70%;
        height: 70%;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transition: box-shadow 0.5s;
      }
      .shadow-topright {
        transform: translate(-50%, -50%) rotate(70deg);
      }
      .shadow-bottomleft {
        transform: translate(-50%, -50%) rotate(250deg);
      }
      img {
        display: block;
        width: 70%;
        border-radius: 50%;
        background-color: $color-light;
        min-height: 5rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    a {
      display: block;
      color: $color-semi;
      transition: color 0.5s;
    }
    h4 {
      text-align: center;
    }
    &:hover,
    &:active {
      a {
        color: $tedx-red;
      }
    }
    & > :nth-child(n) {
      margin-bottom: 0.5rem;
    }
  }
}
</style>