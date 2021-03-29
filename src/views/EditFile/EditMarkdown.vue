<template>
  <div class="edit-markdown">
    <transition>
      <b-alert
        :show="dismissCountDown"
        variant="primary"
        @dismissed="dismissCountDown = 0"
        @dismiss-count-down="countDownChanged"
      >
        {{ alertText }}
      </b-alert>
    </transition>
    <b-container>
      <h2>markdown 编辑</h2>
      <div id="editor">
        <textarea :value="input" @input="update"></textarea>
        <div v-html="compiledMarkdown"></div>
      </div>
      <div class="copyString">
        <b-input-group class="mt-3">
          <b-form-input
            id="foo"
            placeholder="转化成单行字符串"
            :value="input"
          ></b-form-input>
          <b-input-group-append>
            <b-button
              class="clipboard"
              :data-clipboard-text="input"
              v-b-modal.modal-center
              >复制</b-button
            >
          </b-input-group-append>
        </b-input-group>
        <!-- Target -->

        <!-- <input id="foo" :value="input" /> -->
        <!-- Trigger -->
        <!-- <button class="btn clipboard" :data-clipboard-text="input">copy</button> -->
        <!-- <p class="copy">{{ input }}</p>
        <button @click="copyLink()">copy</button> -->
      </div>
    </b-container>
  </div>
</template>

<script>
import _ from "lodash";
import Clipboard from "clipboard";
import marked from "marked";
export default {
  name: "EditMarkdown",
  data: function () {
    return {
      input: "",

      // alert
      dismissCountDown: 0,
      dismissSecs: 1,
      alertText: "复制失败",
    };
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true });
    },
  },
  methods: {
    update: _.debounce(function (e) {
      console.log(e.target.value);
      this.input = e.target.value;
    }, 300),
    // alert
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs;
    },
  },
  mounted: function () {
    const btnCopy = new Clipboard(".clipboard");
    btnCopy.on("success", () => {
      this.showAlert();
      this.alertText = "复制成功";
    });
    btnCopy.on("error", () => {
      this.showAlert();
      this.alertText = "复制失败";
    });
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";

.alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.edit-markdown {
  margin-top: 1rem;
  margin-bottom: 1rem;
  .copyString {
    .copy {
      width: 100%;
      border: 1px solid $color-border;
      overflow-x: auto;
    }
  }
}
#editor {
  height: 50rem;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
  margin: 0;
  margin-bottom: 1rem;
  textarea,
  div {
    display: inline-block;
    width: 49%;
    height: 50rem;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
  }
  textarea {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: "Monaco", courier, monospace;
    padding: 20px;
  }
  textarea + div {
    padding: 20px;
  }

  code {
    color: #f66;
  }
}
</style>