<template>
  <div class="navbar-mobile">
    <b-container fluid class="site-branding">
      <div class="site-title">
        <router-link to="/">
          <img :src="logoSrc | imageBaseURL" alt="" srcset=""
        /></router-link>
      </div>
      <div class="header-actions">
        <div class="navbar-toggle" v-on:click="expandedToggle()">
          <i class="iconfont icon-menu-hamburger"></i>
        </div>
      </div>
    </b-container>
    <div class="navbar-collapse" :style="expanded ? { left: 0 + 'vw' } : ''">
      <ul class="main-menu">
        <li class="menu-item">
          <router-link class="logo" to="/">
            <img :src="logoSrc | imageBaseURL"
          /></router-link>
        </li>
        <li
          class="menu-item"
          :class="{ active: index == activeItem, unfold: unfold[index] }"
          v-for="(item, index) in menu"
          :key="index"
        >
          <div>
            <router-link
              :to="item.path"
              v-on:click.native="toggle(index), expandedToggle()"
              >{{ item.name }}</router-link
            >
            <span v-if="item.dropDown" v-on:click="toggle(index)">
              <i class="iconfont icon-right"></i>
            </span>
          </div>
          <ul
            class="sub-menu"
            v-if="item.dropDown"
            :style="
              index == activeItem || unfold[index]
                ? {
                    height:
                      'calc(' +
                      item.dropDown.length * 3 +
                      'rem + ' +
                      item.dropDown.length +
                      'px )',
                  }
                : ''
            "
          >
            <li
              class="sub-menu-item menu-item"
              v-for="(subItem, i) in item.dropDown"
              :key="i"
            >
              <div>
                <router-link
                  :to="subItem.path"
                  v-on:click.native="expandedToggle()"
                  >{{ subItem.name }}</router-link
                >
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="barrier" v-show="expanded" v-on:click="expandedToggle()"></div>
  </div>
</template>

<script>
import { navbarData } from "@/helpers/navbarData.js";
import Vue from "vue";
export default {
  name: "NavbarMobile",
  data: function () {
    return {
      expanded: false, //默认隐藏
      menu: navbarData,
      unfold: new Array(navbarData.length).fill(false),
      activeItem: -1,
      logoSrc:
        "logo-white.jpg?versionId=CAEQHRiBgMDym7WjwxciIGQzYjYwZDhmNWMyYzQ2ZWU4OGQxNjMxNGNiNzZlODNl",
    };
  },
  watch: {
    $route: "init_ActiveItem",
  },
  methods: {
    init_ActiveItem() {
      const pathName = this.$route.path.split("/", 2);
      const path = "/" + pathName[pathName.length - 1].toLowerCase();
      this.activeItem = this.menu.findIndex((e) => {
        return e.path == path;
      });
      this.unfold = this.unfold.fill(false);
    },
    expandedToggle() {
      //控制 左侧导航栏
      this.expanded = !this.expanded;
    },
    toggle(i) {
      // 判断是否已经展开 fold
      if (!this.unfold[i]) {
        this.activeItem = i == this.activeItem ? -1 : i;
      } else {
        this.activeItem = -1;
      }
      Vue.set(this.unfold, i, !this.unfold[i]);
    },
  },
  created: function () {},
  mounted: function () {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";
$border: 1px solid $color-light;
img {
  width: auto;
}
.barrier {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 500;
}
ul,
li {
  margin: 0;
  padding: 0;
}
a {
  display: block;
  font-size: $font-size-content;
  color: $color-black;
  line-height: 1;
  &:hover {
    color: $tedx-red;
  }
}
.active {
  a {
    color: $tedx-red;
  }
  i {
    transform: rotate(90deg);
  }
}
.unfold {
  i {
    transform: rotate(90deg);
  }
}
.navbar-mobile {
  position: relative;
  background-color: $bg-color-white;
  .site-branding {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid $color-border;
    position: relative;
    .site-title {
      margin: 0.5rem 0;
      img {
        height: 2.5rem;
      }
    }
    .header-actions {
      display: flex;
      position: relative;
      .navbar-toggle {
        z-index: 600;
        border: 1px solid $color-border;
        &:active {
          background-color: $color-border;
          color: $color-white;
        }
        i {
          display: block;
          font-size: 1.5rem;
          line-height: 2.5rem;
          text-align: center;
          width: 2.5rem;
        }
      }
    }
  }

  .navbar-collapse {
    width: 75vw;
    height: 100%;
    background-color: $bg-color-light;
    border-right: $border;
    overflow-y: auto;
    position: fixed;
    left: -75vw;
    top: 0;
    z-index: 999;
    transition: left 1s;
    .main-menu {
      > .menu-item {
        margin-bottom: 1rem;
      }
      > .menu-item:first-child {
        margin-bottom: 0;
      }
      .menu-item {
        font-size: $font-size-content;
        background: $bg-color-white;
        .logo {
          padding: 0.5rem 1rem;
          border-bottom: $border;
          img {
            height: 2.5rem;
          }
        }
        > div {
          display: flex;
          line-height: 1;
          margin: 0 0 0 1rem;
          box-sizing: border-box;
          overflow: hidden;
          a {
            width: 100%;
            line-height: 3rem;
          }
          span {
            width: $font-size-content + 3rem;
            height: $font-size-content + 2rem;
            box-sizing: border-box;
            padding-left: 1rem;
            i {
              display: block;
              line-height: $font-size-content + 2rem;
              text-align: center;
              transition: transform 0.6s;
            }
          }
        }
      }
    }
    .sub-menu {
      height: 0;
      overflow: hidden;
      transition: height 0.6s;
      a {
        color: $color-gray;
      }
    }
  }
}
</style>