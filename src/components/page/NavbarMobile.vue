<template>
  <div class="navbar-mobile">
    <div class="navbar-brand">NavBar</div>
    <div class="navbar-toggle" v-on:click="show()">
      <div class="icon icon-">icon</div>
    </div>
    <div class="navbar-collapse" v-show="expanded">
      <ul class="main-menu">
        <li
          class="menu-item"
          :class="index == acitveItem ? 'active' : ''"
          v-for="(item, index) in menu"
          :key="index"
        >
          <p>
            <a :href="item.key">{{ item.name }}</a>
            <i v-if="item.dropDown" v-on:click="toggle(index)">></i>
          </p>
          <ul
            class="sub-menu"
            v-if="item.dropDown"
            v-show="index == acitveItem"
          >
            <li
              class="sub-menu-item menu-item"
              v-for="(subItem, i) in item.dropDown"
              :key="i"
            >
              <p>
                <a :href="subItem.key">{{ subItem.name }}</a>
              </p>
            </li>
          </ul>
        </li>
        <li class="menu-item">
          <p>
            <a href="">item2</a>
          </p>
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
      acitveItem: -1,
    };
  },
  methods: {
    show() {
      this.expanded = !this.expanded;
      console.log(this.expanded);
    },
    toggle(i) {
      this.acitveItem = i == this.acitveItem ? -1 : i;
      console.log(this.acitveItem);
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
  color: $color-semi;
  line-height: 1;
  padding: 1rem 1rem;
  &:hover {
    color: $tedx-red;
    text-decoration: none;
  }
}
.active {
  a {
    color: $tedx-red;
  }
}
.navbar-mobile {
  position: relative;
  .navbar-toggle {
    background: $color-gray;
  }
  .navbar-collapse {
    width: 75vw;
    height: 100%;
    background: $color-white;
    border-right: $border;
    overflow-y: auto;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    .main-menu {
      .menu-item {
        font-size: $font-size-content;
        line-height: 1.5;
        p {
          display: flex;
          width: 100%;
          border-bottom: $border;
          margin: 0;
          i {
            line-height: $font-size-content + 2rem;
            width: $font-size-content + 2rem;
            height: $font-size-content + 2rem;
            text-align: center;
            float: right;
          }
        }
      }
    }
    .sub-menu {
      height: auto;
      overflow: hidden;
      transition: height 1s;
      a {
        color: $color-gray;
      }
    }
  }
}
</style>