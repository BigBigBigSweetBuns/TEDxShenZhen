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
      <div class="line">
        <ul class="navbar mainmenu">
          <li v-for="(item, index) in navbar" :key="index">
            <router-link
              :to="item.path"
              :class="item.path == activeNavbar ? 'active' : ''"
              >{{ item.name }}
              <span v-if="item.dropDown" v-on:click="toggle(index)">
                <i class="iconfont icon-unfold"></i>
              </span>
            </router-link>
            <ul v-if="item.dropDown" class="submenu">
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
        <div class="media-widgets">
          <div class="li" v-for="(icon, index) in mediaIcons" :key="index">
            <a target="_blank" :href="icon.href"
              ><i class="iconfont" :class="icon.icon"></i
            ></a>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { navbarData } from "@/helpers/navbarData.js";
import { mediaIcons } from "@/assets/data/mediaicons.js";
export default {
  name: "PageHeader",
  components: {},
  data: function () {
    return {
      navbar: navbarData,
      logoSrc:
        "logo-white.jpg?versionId=CAEQHRiBgMDym7WjwxciIGQzYjYwZDhmNWMyYzQ2ZWU4OGQxNjMxNGNiNzZlODNl",
      mediaIcons: mediaIcons,
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
  background-color: $bg-color-white;
  > .container {
  }
  border-top: 2px solid $tedx-red;
  .site-branding {
    display: flex;
    border-bottom: 2px solid $color-border;
    position: relative;
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
  .line {
    display: flex;
    justify-content: space-between;
    .mainmenu {
      width: 70%;
      z-index: 999;
      margin-right: 3rem;
      > li {
        padding: 1rem 0;
        .submenu {
          display: flex;
          width: calc(100% + 2rem);
          max-height: 0;
          background-color: $color-white;
          box-sizing: border-box;
          padding: 0 1rem;
          overflow: hidden;
          position: absolute;
          top: 2.2rem;
          left: -1rem;
          z-index: 500;
          transition: max-height 1s;
          a {
            color: $color-semi;
            font-size: $font-size-content;
            margin: 1.5rem 1rem 1.5rem 0;
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
    .media-widgets {
      display: flex;
      align-items: center;

      .li {
        a {
          color: $color-gray;
          font-size: $font-size-content;
          i {
            position: relative;
            top: 3px;
            font-size: $font-size-head;
            margin-right: 1rem;
          }
          &:hover,
          &:active {
            color: $tedx-red;
          }
        }
      }
    }
  }
}
</style>
