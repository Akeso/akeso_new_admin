<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="新增课程标题" width="70%" top="30px">
    <el-form :model="temp" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" label="题目">
        <el-input v-model="temp.title" autocomplete="off" clearable style="width: 50%;" placeholder="问题标题"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="题目位置">
        <!--<el-input v-model="temp.position" autocomplete="off" clearable style="width: 50%;" placeholder="第几题"/>-->
        <el-input-number v-model="temp.position" :min="1" :max="10" label="位置"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="选项">
        <div v-for="(p, i) in temp.answers" :key="i">
          <el-input v-model="p.alias" placeholder="选项值" style="width: 8%;"/>
          <el-input v-model="p.text" placeholder="选项内容" style="width: 50%;"/>
          <el-checkbox v-model="p.state">正确答案</el-checkbox>
          <el-button type="primary" icon="el-icon-delete" @click="handleClickDelete(i)"/>
        </div>
        <el-button type="primary" icon="el-icon-plus" circle @click="handleClickAdd"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="解析">
        <el-input v-model="temp.explain" autocomplete="off" clearable style="width: 50%;" type="textarea" placeholder="解析"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClickCancel">取 消</el-button>
      <el-button type="primary" @click="handleClickSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { createItem } from '@/api/questions'
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '160px',
      passwork_valid: false,
      temp: {
        course_id: undefined,
        title: undefined,
        explain: undefined,
        position: undefined,
        answers: [{
          alias: 'A',
          text: '',
          state: false,
          show_index: false
        }]
      },
      loading: false
    }
  },
  created() {
  },
  methods: {
    handleClickAdd() {
      this.temp.answers.push({
        alias: 'A',
        text: '',
        state: false,
        show_index: false
      })
    },
    handleClickDelete(index) {
      console.log('index => ', index)
      this.temp.answers.splice(index, 1)
    },
    handleClickCancel() {
      this.resetData()
      this.dialogFormVisible = false
    },
    handleClickSubmit() {
      if (this.temp.title !== undefined && this.temp.title !== '') {
        createItem(this.temp).then(response => {
          this.resetData()
          this.dialogFormVisible = false
          this.$emit('create-success')
        })
      }
    },
    show(val) {
      this.temp.course_id = val
      this.dialogFormVisible = true
    },
    resetData() {
      this.temp = {
        title: undefined
      }
    }
  }
}
</script>
<style scoped>
.el-input {
  /*width: 30% !important;*/
}
</style>
