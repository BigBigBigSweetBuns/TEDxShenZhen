<template>
  <div class="page-footer">
    <div class="footer-newsletter-form">
      <div class="form-inline">
        <form action="" method="post">
          <label for="newsletter-email">Subscribe To Our Newsletter</label>
          <input type="email" name="EMAIL" id="newsletter-email" />
          <input type="submit" value="GO" />
        </form>
      </div>
      <ul class="media-widgets">
        <li v-for="num in 5" :key="num"><i class="icon icon-">icon</i></li>
      </ul>
    </div>
    <div class="footer-main-menu">
      <div class="col-md-4" v-for="(item, index) in navbar" :key="index">
        <div class="footer-single-menu">
          <router-link to="item.key">{{ item.name }}</router-link>
          <ul>
            <li v-for="(drop, i) in item.dropDown" :key="i">
              <router-link to="drop.key">{{ drop.name }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="site-info">
      <span>
        © Copyright 2018 TedxFutian All rights reserved tedxfutian.com.
        <a href="#" target="_blank" rel="noopener noreferrer">
          网站备案粤ICP备17159193号
        </a>
      </span>
      - Enfold WordPress Theme by Kriesi
    </div>
  </div>
</template>

<script>
import { navbarData } from "@/helpers/navbarData.js";
export default {
  name: "PageFooter",
  data: function () {
    return {
      navbar: navbarData,
    };
  },
};
</script>

<style scoped lang="scss">
</style>