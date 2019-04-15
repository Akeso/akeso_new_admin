<template>
  <!-- Table -->
  <el-dialog :visible.sync="dialogVisible" title="选择机构">
    <el-select
      v-model="value"
      :remote-method="remoteMethod"
      :loading="loading"
      filterable
      remote
      reserve-keyword
      clearable
      placeholder="请输入关键词">
      <el-option
        v-for="item in optionsData"
        :key="item.id"
        :label="item.title"
        :value="item.id"/>
    </el-select>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleClickSubmit">提交</el-button>
      <el-button @click="dialogVisible = false">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { fetchOrganizations } from '@/api/selects'
export default {
  data() {
    return {
      dialogVisible: false,
      optionsData: [],
      value: undefined,
      loading: false
    }
  },
  methods: {
    handleShow() {
      this.value = undefined
      this.dialogVisible = true
    },
    handleClickSubmit() {
      this.$emit('select-success', this.value)
      this.dialogVisible = false
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true
        fetchOrganizations({ title: query }).then(response => {
          this.optionsData = response.data
          this.loading = false
        })
        // setTimeout(() => {
        //   this.loading = false
        //   this.options4 = this.list.filter(item => {
        //     return item.label.toLowerCase()
        //       .indexOf(query.toLowerCase()) > -1
        //   })
        // }, 200)
      } else {
        this.optionsData = []
      }
    }
  }
}
</script>
