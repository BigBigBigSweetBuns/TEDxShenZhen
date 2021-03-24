<template>
  <div class="page-header">
    <div class="container">
      <div class="site-branding">
        <div class="site-title">
          <a href="#"
            ><img
              src="http://120.79.41.237/wp-content/uploads/2017/12/TEDLOGO.jpg"
              alt=""
              srcset=""
          /></a>
        </div>
        <div class="header-actions">
          <i class="icon icon-search">search</i>
        </div>
      </div>
      <b-navbar>
        <b-navbar-nav class="row container">
          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown
            :text="item.name"
            right
            v-for="(item, index) in navbar"
            :key="index"
          >
            <b-dropdown-item
              href="#"
              v-for="(dorp, i) in item.dropDown"
              :key="i"
            ></b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import { navbarData } from "@/helpers/navbarData.js";
export default {
  name: "PageHeader",
  data: function () {
    return {
      navbar: navbarData,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";
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
      position: absolute;
      right: 0;
    }
  }
  .navbar {
    padding: 0rem 1rem;
  }
}
</style>
