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
          :class="index == activeItem ? 'active' : ''"
          v-for="(item, index) in menu"
          :key="index"
        >
          <div>
            <router-link
              :to="item.path"
              v-on:click.native="toggle(index), expandedToggle()"
              >{{ item.name }}</router-link
            >
            <i
              v-if="item.dropDown"
              v-on:click="toggle(index)"
              class="iconfont icon-right"
            ></i>
          </div>
          <ul
            class="sub-menu"
            v-if="item.dropDown"
            :style="
              index == activeItem
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
export default {
  name: "NavbarMobile",
  data: function () {
    return {
      expanded: false, //默认隐藏
      menu: navbarData,
      activeItem: -1,
      logoSrc:
        "logo-white.jpg?versionId=CAEQHRiBgMDym7WjwxciIGQzYjYwZDhmNWMyYzQ2ZWU4OGQxNjMxNGNiNzZlODNl",
    };
  },
  computed: {},
  methods: {
    init_ActiveItem() {
      const pathName = this.$route.path.split("/", 2);
      const path = "/" + pathName[pathName.length - 1].toLowerCase();
      this.menu.forEach((e, i) => {
        if (e.path == path) {
          this.activeItem = i;
        }
      });
    },
    expandedToggle() {
      //控制 左侧导航栏
      this.expanded = !this.expanded;
    },
    toggle(i) {
      this.activeItem = i == this.activeItem ? -1 : i;
    },
  },
  created: function () {
    this.init_ActiveItem();
  },
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
  width: 100%;
  font-size: $font-size-content;
  color: $color-black;
  line-height: 1;
  &:hover {
    color: $tedx-red;
    text-decoration: none;
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
.navbar-mobile {
  position: relative;
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
    background: $color-white;
    border-right: $border;
    overflow-y: auto;
    position: fixed;
    left: -75vw;
    top: 0;
    z-index: 999;
    transition: left 1s;
    .main-menu {
      .menu-item {
        font-size: $font-size-content;
        .logo {
          padding: 0.5rem 1rem;
          border-bottom: $border;
          img {
            height: 2.5rem;
            // width: 70%;
          }
        }
        > div {
          display: flex;
          width: 100%;
          line-height: 1;
          border-bottom: $border;
          margin: 0;
          box-sizing: border-box;
          overflow: hidden;
          a {
            padding: 1rem;
          }

          i {
            width: $font-size-content + 2rem;
            height: $font-size-content + 2rem;
            font-size: 1rem;
            line-height: $font-size-content + 2rem;
            text-align: center;
            box-sizing: border-box;
            transition: transform 0.6s;
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