<template>
  <div class="page-footer">
    <div class="container">
      <div class="footer-newsletter-form">
        <div class="form-inline">
          <b-form>
            <label for="newsletter-email">Subscribe To Our Newsletter</label>
            <b-form-input
              id="newsletter-email"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="Email Address"
            ></b-form-input>
            <b-button
              type="submit"
              class="btn btn-outline-dark"
              variant="defualt"
              >GO</b-button
            >
          </b-form>
        </div>
        <ul class="media-widgets">
          <li v-for="num in 5" :key="num">
            <a href="#"><i class="icon icon-">icon</i></a>
          </li>
        </ul>
      </div>
      <b-row class="footer-main-menu">
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
      </b-row>
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
@import "@/assets/variable.scss";
@mixin padding {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
@mixin margin-border {
  border-bottom: 2px solid $color-border;
  margin-bottom: 1.5rem;
}
.page-footer {
  border-top: 2px solid $tedx-red;
  .footer-newsletter-form {
    display: flex;
    font-size: $font-size-content;
    color: $color-semi;
    @include padding;
    @include margin-border;
    .form-inline {
      width: 70%;
      > form {
        display: flex;
        width: 100%;
        label {
          max-width: 100%;
          margin-right: 5%;
        }
      }
    }
    .media-widgets {
      display: flex;
      align-items: center;
      > li a {
        display: block;
        width: 1.6rem;
        height: 1.6rem;
        background-color: #eee;
        margin-left: 1.6rem;
      }
    }
  }
  .footer-main-menu {
    @include padding;
    @include margin-border;
    .footer-single-menu {
      font-size: $font-size-content;
      a {
        color: $color-gray;
        &:hover {
          color: $tedx-red;
          text-decoration: none;
        }
      }
      > a {
        color: $color-semi;
        line-height: 1.7;
        font-weight: 500;
      }
      ul,
      li {
        padding: 0;
      }
    }
  }
  .site-info {
    color: $color-gray;
    font-size: $font-size-description;
    text-align: center;
    padding-bottom: 1rem;
    a {
      color: $color-gray;
      text-decoration: underline;
    }
  }
}
</style>