<template>
  <div class="navbar-mobile">
    <b-container fluid class="site-branding">
      <div class="site-title">
        <router-link to="/">
          <img :src="logoSrc | imageBaseURL" alt="" srcset=""
        /></router-link>
      </div>
      <div class="header-actions">
        <div class="navbar-toggle" v-on:click="show()">
          <i class="iconfont icon-menu-hamburger"></i>
        </div>
      </div>
    </b-container>
    <div class="navbar-collapse" :style="expanded ? { left: 0 + 'vw' } : ''">
      <ul class="main-menu">
        <li
          class="menu-item"
          :class="index == activeItem ? 'active' : ''"
          v-for="(item, index) in menu"
          :key="index"
        >
          <div>
            <a :href="item.key">{{ item.name }}</a>
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
                <a :href="subItem.key">{{ subItem.name }}</a>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
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
  methods: {
    show() {
      this.expanded = !this.expanded;
      console.log(this.expanded);
    },
    toggle(i) {
      this.activeItem = i == this.activeItem ? -1 : i;
      console.log(this.activeItem);
    },
    submenu_collapse() {},
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";
$border: 1px solid $color-light;

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
      .navbar-toggle {
        border: 1px solid $color-border;
        :active {
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