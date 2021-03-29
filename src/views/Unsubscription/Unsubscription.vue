<template>
  <div class="unsubscription">
    <b-alert v-model="showAlert" variant="primary" dismissible>
      {{ alertText }}
    </b-alert>
    <b-container>
      <h3>取消订阅邮件服务</h3>
      <b-form-group
        id="fieldset-horizontal"
        label-cols-sm="4"
        label-cols-lg="3"
        label="邮箱地址:"
        description="将在两个工作日内完成"
        label-for="input-horizontal"
      >
        <b-form-input id="input-email" type="email"></b-form-input>
      </b-form-group>

      <b-button
        block
        id="submit"
        size="lg"
        variant="outline-primary"
        @click="formPost()"
        >提交</b-button
      >
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Unsubscription",
  data: function () {
    return {
      formData: {
        email: "",
      },
      showAlert: false,
      alertText: "将在两个工作日内完成",
    };
  },
  methods: {
    formPost: function () {
      let that = this;
      that.showAlert = true;
    },
  },
};
</script>

<style scoped lang="scss">
.alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#submit {
  display: block;
  margin: 0 auto;
}
.unsubscription {
  margin: 1rem 0;
}
</style>