<template>
  <div class="page-footer">
    <transition name="test-fade">
      <b-alert
        :show="dismissCountDown"
        variant="danger"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged"
      >
        {{ alertText }}
      </b-alert>
    </transition>
    <div class="container">
      <b-row class="footer-newsletter-form">
        <b-form>
          <div class="form-inline">
            <label class="" for="newsletter-email">订阅我们的邮件服务</label>
            <b-form-input
              id="newsletter-email"
              class=""
              placeholder="邮箱地址"
            ></b-form-input>
            <b-button
              @click="refuseAlert()"
              class="btn btn-outline-dark"
              variant="defualt"
              >GO</b-button
            >
          </div>
        </b-form>
        <div class="media-widgets" v-if="is_mobilewidth">
          <div class="li" v-for="(icon, index) in mediaIcons" :key="index">
            <a target="_blank" :href="icon.href"
              ><i class="iconfont" :class="icon.icon"></i
            ></a>
          </div>
        </div>
      </b-row>
      <div class="media-widgets row" v-if="!is_mobilewidth">
        <div class="li col-4" v-for="(icon, index) in mediaIcons" :key="index">
          <a :href="icon.href" target="_blank"
            ><i class="iconfont" :class="icon.icon"></i>{{ icon.name }}</a
          >
        </div>
      </div>

      <b-row class="footer-main-menu" v-if="is_mobilewidth">
        <b-col cols="12" sm="4" v-for="(item, index) in navbar" :key="index">
          <div class="footer-single-menu">
            <router-link :to="item.path">{{ item.name }}</router-link>
            <ul>
              <li v-for="(drop, i) in item.dropDown" :key="i">
                <router-link :to="drop.path">{{ drop.name }}</router-link>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
      <div class="site-info">
        <span>
          © Copyright 2018 TedxShenzhen All rights reserved tedxShenzhen.com.
          <a
            href="http://beian.miit.gov.cn"
            target="_blank"
            rel="noopener noreferrer"
          >
            网站备案粤ICP备17159193号-1
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { navbarData } from "@/helpers/navbarData.js";
import { mediaIcons } from "@/assets/data/mediaicons.js";
export default {
  name: "PageFooter",
  data: function () {
    return {
      navbar: navbarData,
      mediaIcons: mediaIcons,
      // alert
      dismissCountDown: 0,
      dismissSecs: 3,
      alertText: "该功能尚未实现",
    };
  },
  computed: {
    is_mobilewidth() {
      return window.innerWidth >= 576;
    },
  },
  methods: {
    // alert
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    refuseAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
};
</script>

<style scoped lang="scss">
.test-fade-enter-active,
.test-fade-leave-active {
  transition: all 0.5s;
}
.test-fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@import "@/assets/variable.scss";
@mixin padding {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
@mixin margin-border {
  border-bottom: 2px solid $color-border;
}
ul,
li {
  padding: 0;
}
.page-footer {
  border-top: 2px solid $tedx-red;
  background-color: $bg-color-white;
  padding-top: 2rem;
  padding-bottom: 2rem;
  > .container {
    border-radius: 0.25rem;
    > .row {
      margin-left: 0;
      margin-right: 0;
    }
  }
  .footer-newsletter-form {
    display: flex;
    justify-content: space-between;
    font-size: $font-size-content;
    color: $color-semi;
    @include padding;
    @include margin-border;
    form {
      width: 70%;

      .form-inline {
        display: flex;
        width: 100%;
        label,
        input {
          margin-right: 1rem;
        }
      }
    }
    @media (max-width: 576px) {
      form {
        width: 100%;
        .form-inline {
          .label {
            width: 100%;
            margin-right: 0;
          }
          .form-control {
            width: calc(100% - 1rem - 51px);
          }
        }
      }
    }
    .media-widgets {
      border: none;
      padding: 0;
      margin: 0;
    }
  }
  .media-widgets {
    display: flex;
    align-items: center;
    @include padding;
    @include margin-border;

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
    }
  }
  .site-info {
    @include padding;
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