<template>
  <div class="page-header">
    <b-container>
      <div class="site-branding">
        <div class="site-title">
          <router-link to="/">
            <img :src="logoSrc | imageBaseURL" alt="" srcset=""
          /></router-link>
        </div>
        <div class="header-actions">
          <i class="icon icon-search">search</i>
        </div>
      </div>
      <navbar-mobile v-if="is_mobilewidth"></navbar-mobile>
      <b-navbar v-else>
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
    </b-container>
  </div>
</template>

<script>
import { navbarData } from "@/helpers/navbarData.js";
import NavbarMobile from "./NavbarMobile.vue";
export default {
  name: "PageHeader",
  components: { NavbarMobile },
  data: function () {
    return {
      screenWidth: document.body.clientWidth,
      navbar: navbarData,
      logoSrc:
        "logo-white.jpg?versionId=CAEQHRiBgMDym7WjwxciIGQzYjYwZDhmNWMyYzQ2ZWU4OGQxNjMxNGNiNzZlODNl",
    };
  },
  computed: {
    is_mobilewidth() {
      return window.innerWidth <= 767;
    },
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
        height: 2rem;
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
