<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="下次复查日期" width="50%;" style="text-align:center;">
    <el-form :model="temp" style="width: 90%; margin-left:20px;">
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="6" :offset="0" style="line-height:36px;">
          <span class="item-title">选择下次复查日期：</span>
        </el-col>
        <el-col :span="2" class="item-value">
          <el-date-picker
            v-model="temp.last_update_at"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"/>
        </el-col>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClickCancel">取 消</el-button>
      <el-button type="primary" @click="handleClickSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { fetchList, updateDate } from '@/api/eye_examinations'
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      temp: {
        id: undefined,
        last_update_at: undefined
      },
      loading: false,
      dataOptions: [],
      checkedOptions: []
    }
  },
  created() {
  },
  methods: {
    getServiceList() {
      fetchList({ child_id: this.userId }).then(res => {
        this.$emit('handleDateList', res.data)
      })
    },
    handleClickCancel() {
      this.resetData()
      this.dialogFormVisible = false
    },
    handleClickSubmit() {
      console.log('aa => ', this.temp)
      if (this.temp.last_update_at === '' || this.temp.last_update_at === undefined) return
      updateDate(this.temp).then(res => {
        this.dialogFormVisible = false
        this.$emit('update-success')
        // this.$message({
        //   type: 'success',
        //   message: '修改成功!'
        // })
      })
    },
    show(val) {
      this.temp.id = val.id
      this.temp.last_update_at = val.lastUpdateAt
      this.dialogFormVisible = true
    },
    resetData() {
      this.temp = {
        id: undefined,
        last_update_at: undefined
      }
    }
  }
}
</script>
<style>
</style>
