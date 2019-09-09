<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="创建档案" width="50%;" style="text-align:center;">
    <el-form :model="temp" style="width: 90%; margin-left:20px;">
      <el-row :gutter="20" style="margin-bottom: 20px;">
        <el-col :span="6" :offset="0" style="line-height:36px;">
          <span class="item-title">选择检查日期：</span>
        </el-col>
        <el-col :span="2" class="item-value">
          <!--<el-input v-model="title"/>-->
          <el-date-picker
            v-model="title"
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
import { fetchList, createArchives } from '@/api/eye_examinations'
export default {
  props: {
    userId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      title: '',
      dialogFormVisible: false,
      formLabelWidth: '120px',
      temp: {
        id: undefined,
        name: undefined,
        baseType: 'organization',
        serviceIds: []
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
      if (this.title === '') return
      createArchives({ child_id: this.userId, name: this.title }).then(res => {
        this.dialogFormVisible = false
        console.log('创建', res)
        this.title = ''
        this.getServiceList()
        // this.$emit('update-success')
        // this.$message({
        //   type: 'success',
        //   message: '修改成功!'
        // })
      })
    },
    handleChangeData(val) {
      console.log('val => ', val)
      console.log('checkBox => ', this.checkedOptions)
    },
    show(val) {
      // this.getServiceList()
      // this.temp = JSON.parse(JSON.stringify(val))
      this.dialogFormVisible = true
    },
    resetData() {
      this.temp = {
        id: undefined,
        name: undefined,
        base_type: 'organization'
      }
    }
  }
}
</script>
<style>
  .el-checkbox {
    display: block;
  }
</style>
