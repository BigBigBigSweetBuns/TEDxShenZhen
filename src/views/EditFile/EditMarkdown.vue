<template>
  <div class="edit-markdown">
    <div>
      <b-modal id="modal-center" centered title="复制成功" hide-footer>
        <b-button class="mt-3" block @click="$bvModal.hide('modal-center')"
          >Close Me</b-button
        >
      </b-modal>
    </div>
    <b-container>
      <h2>markdown 编辑</h2>
      <div id="editor">
        <textarea :value="input" @input="update"></textarea>
        <div v-html="compiledMarkdown"></div>
      </div>
      <div class="copyString">
        <h5>转化成单行字符串</h5>
        <!-- Target -->
        <input id="foo" :value="input" />

        <!-- Trigger -->
        <b-button
          class="clipboard"
          :data-clipboard-text="input"
          v-b-modal.modal-center
          >copy</b-button
        >
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
      input: "# hello",
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
    // copyLink() {
    //   let clipboard = new ClipboardJS(".btn");
    //   clipboard.destroy();
    // },
  },
  mounted: function () {
    const btnCopy = new Clipboard(".clipboard");
    btnCopy.on("success", (e) => {
      console.info("Action:", e.action);
      console.info("Text:", e.text);
      console.info("Trigger:", e.trigger);
    });
    btnCopy.on("error", (e) => {
      console.error("Action:", e.action);
      console.error("Trigger:", e.trigger);
    });
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/variable.scss";
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

  code {
    color: #f66;
  }
}
</style>