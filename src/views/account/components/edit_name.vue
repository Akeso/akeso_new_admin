<template>
  <!-- Table -->
  <el-dialog :visible.sync="dialogVisible" title="修改名称">
    <el-row>
      <el-input
        v-model="value"
        placeholder="请输入名称"/>
    </el-row>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleClickSubmit">提交</el-button>
      <el-button @click="dialogVisible = false">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { updateData } from '@/api/accounts'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      dialogVisible: false,
      value: undefined,
      loading: false
    }
  },
  computed: {
    ...mapGetters([
      'id',
      'name'
    ])
  },
  methods: {
    handleShow() {
      this.value = this.name
      this.dialogVisible = true
    },
    handleClickSubmit() {
      updateData({ id: this.id, name: this.value }).then(response => {
        console.log('res => ', response)
        this.$store.commit('updateUserInfo', response.data)
        this.$emit('update-success', this.value)
        this.dialogVisible = false
      })
    }
  }
}
</script>
