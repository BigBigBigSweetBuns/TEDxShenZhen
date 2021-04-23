<template>
  <div class="subscription">
    <b-container>
      <div class="table">
        <div class="tr" v-for="(e, index) in list" :key="index">
          <div class="td">
            <p>{{ e.name }}</p>
          </div>
          <div class="td">
            <div class="botton" @click="getFile(e.id, index)">下载</div>
            <a ref="download" style="display: none"></a>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "subcription",
  data: function () {
    return {
      list: [
        {
          name: "1234",
        },
        {
          name: "1234",
        },
      ],
    };
  },
  methods: {
    // 获取列表
    getFileList() {
      this.$axios.get("/tools/subscription/list").then((res) => {
        if (res.data.code == 0) {
          this.list = res.data.result;
        }
      });
    },
    // 下载单个文件
    getFile(id, idx) {
      this.$axios
        .post("/tools/download", {
          id: id,
        })
        .then((res) => {
          const blob = new Blob([res.data]);
          const fileName = id + ".txt";
          this.$refs.download[idx].download = fileName;
          this.$refs.download[idx].href = URL.createObjectURL(blob);
          this.$refs.download[idx].click();
          URL.revokeObjectURL(blob);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.subscription {
  .table {
    border: 1px solid #666;
    .tr {
      display: flex;
      justify-content: space-between;
      border: 1px solid #666;
      border-left: none;
      border-right: none;
    }
  }
}
</style>