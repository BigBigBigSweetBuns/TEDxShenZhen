import Vue from "vue"

let imgBaseURL = 'https://tedxshenzhen.oss-cn-shenzhen.aliyuncs.com/images/';

Vue.filter("imageBaseURL", function (string) {
  if (typeof (string) == "string") {
    return imgBaseURL + string;
  } else {
    console.error("该数据不是array类型");
  }
})