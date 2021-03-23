<template>
  <div class="page-header">
    <div>
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
            <i class="icon icon-search"></i>
          </div>
        </div>
      </div>
    </div>
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
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
    <div class="cs"></div>
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
.site-branding {
  display: flex;
}
</style>
