<template>
  <el-dialog :title="'确认预约'" :visible.sync="dialogFormVisible">
    <el-form :model="temp" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
      <el-form-item :label="'联系电话'" prop="timestamp">
        <el-input v-model="temp.phone" disabled/>
      </el-form-item>
      <el-form-item :label="'取消原因'" prop="timestamp">
        <el-input v-model="temp.cancelledReason" :autosize="{ minRows: 2, maxRows: 4}" type="textarea"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleClickCancel">提交</el-button>
      <el-button @click="dialogFormVisible = false">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { putCancel } from '@/api/appoints'
export default {
  data() {
    return {
      dialogFormVisible: false,
      dialogStatus: '',
      temp: {
        id: undefined,
        childName: undefined,
        cancelledReason: undefined
      }
    }
  },
  created() {
  },
  methods: {
    show: function(val) {
      this.dialogFormVisible = true
      this.temp = val
    },
    handleClickCancel() {
      this.$confirm('是否取消该用户预约?', '提示', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning'
      }).then(() => {
        putCancel({ id: this.temp.id, information: this.temp.cancelledReason }).then(response => {
          this.$emit('cancelSuccess')
          this.dialogFormVisible = false
          this.$message({
            type: 'success',
            message: '确认成功!'
          })
        })
      }).catch(() => {
      })
    }
  }
}
</script>
