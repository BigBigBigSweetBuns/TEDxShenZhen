<template>
  <div class="page-header">
    <b-container>
      <div class="site-branding">
        <div class="site-title">
          <router-link to="/">
            <img :src="logoSrc | imageBaseURL" alt="" srcset=""
          /></router-link>
        </div>
        <!-- <div class="header-actions">
          <i class="iconfont icon-search"></i>
        </div> -->
      </div>
      <ul class="navbar mainmenu">
        <li v-for="(item, index) in navbar" :key="index">
          <router-link
            :to="item.path"
            :class="item.path == activeNavbar ? 'active' : ''"
            >{{ item.name }}</router-link
          >
          <ul class="submenu">
            <li
              :style="
                item.dropDown.length > 4
                  ? 'width:' + 100 / item.dropDown.length + '%'
                  : 'width:30%'
              "
              v-for="(dorp, i) in item.dropDown"
              :key="i"
            >
              <router-link :to="dorp.path"
                >{{ dorp.name }}
                <br />
                <span>{{ dorp.sub }}</span>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
import { navbarData } from "@/helpers/navbarData.js";
export default {
  name: "PageHeader",
  components: {},
  data: function () {
    return {
      navbar: navbarData,
      logoSrc:
        "logo-white.jpg?versionId=CAEQHRiBgMDym7WjwxciIGQzYjYwZDhmNWMyYzQ2ZWU4OGQxNjMxNGNiNzZlODNl",
    };
  },
  computed: {
    activeNavbar: function () {
      const path = this.$route.path.split("/", 2);
      return "/" + path[path.length - 1].toLowerCase();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";
ul,
li {
  margin: 0;
  padding: 0;
}
a {
  display: block;
  font-size: $font-size-content;
  color: $color-semi;
  line-height: 1;
}
.active {
  color: $tedx-red;
}
.page-header {
  border-top: 2px solid $tedx-red;
  .site-branding {
    display: flex;
    position: relative;
    border-bottom: 2px solid $color-border;
    .site-title {
      margin: 0.5rem 0;
      img {
        height: 3rem;
      }
    }
    .header-actions {
      height: 3rem;
      position: absolute;
      right: 0.5rem;
    }
    i {
      width: 3rem;
      font-size: 1.5rem;
      line-height: 4rem;
    }
  }
  .mainmenu {
    padding: 0rem 1rem;
    z-index: 999;
    > li {
      padding: 0.5rem 0;
      .submenu {
        display: flex;
        width: 100%;
        max-height: 0;
        background-color: $color-white;
        box-sizing: border-box;
        overflow: hidden;
        position: absolute;
        top: 2rem;
        left: 0;
        z-index: 500;
        transition: max-height 1s;
        a {
          color: $color-semi;
          font-size: $font-size-content;
          margin: 1.5rem 1rem;
          span {
            color: $color-gray;
            font-size: $font-size-secondary;
          }
          &:hover,
          &:active {
            color: $tedx-red;
          }
        }
      }
      &:hover {
        > a {
          color: $tedx-red;
        }
        .submenu {
          z-index: 600;
          max-height: 10rem;
          border-bottom: 1px solid $tedx-red;
        }
      }
    }
  }
}
</style>
