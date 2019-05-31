<template>
  <el-dialog :title="'确认预约'" :visible.sync="dialogFormVisible">
    <el-form :model="temp" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
      <el-form-item :label="'联系电话'" prop="timestamp">
        <el-input v-model="temp.phone" disabled/>
      </el-form-item>
      <el-form-item :label="'预约反馈'" prop="timestamp">
        <el-input v-model="temp.returnInformation" :autosize="{ minRows: 4, maxRows: 10}" type="textarea"/>
      </el-form-item>
      <el-form-item :label="'约定时间'" prop="timestamp">
        <el-input v-model="temp.date" disabled/>
      </el-form-item>
      <el-form-item :label="'备注'" prop="timestamp">
        <span style="color: red;">请联系用户，协商预约！预约反馈中写清楚预约的详细信息.</span>
        <!--<el-input :value="'请联系家长与机构，协商预约！预约反馈中写清楚预约的详细信息'" disabled/>-->
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleClickConfirm">确定</el-button>
      <el-button @click="dialogFormVisible = false">取消</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { putConfirm } from '@/api/appoints'
export default {
  data() {
    return {
      dialogFormVisible: false,
      dialogStatus: '',
      temp: {
        id: undefined,
        childName: undefined,
        returnInformation: undefined
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
    handleClickConfirm() {
      this.$confirm('是否确认该用户预约?', '提示', {
        confirmButtonText: '是',
        cancelButtonText: '否',
        type: 'warning'
      }).then(() => {
        putConfirm({ id: this.temp.id, information: this.temp.returnInformation }).then(response => {
          this.$emit('confirmSuccess')
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
