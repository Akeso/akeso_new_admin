<template>
  <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" title="新建儿童档案" width="70%">
    <el-form :rules="rules" :model="temp" label-position="right" label-width="100px" style="width: 60%; margin-left:80px;">
      <el-form-item label="孩子姓名">
        <el-input v-model="temp.name" class="filter-item" placeholder="输入孩子姓名"/>
      </el-form-item>
      <el-form-item label="家长姓名">
        <el-input v-model="temp.parent_name" class="filter-item" placeholder="输入家长姓名"/>
      </el-form-item>
      <el-form-item label="家长联系方式">
        <el-input v-model="temp.parent_phone" class="filter-item" placeholder="输入家长电话"/>
      </el-form-item>
      <el-form-item label="孩子联系方式">
        <el-input v-model="temp.phone" class="filter-item" placeholder="输入孩子电话"/>
      </el-form-item>
      <el-form-item label="孩子性别">
        <el-select v-model="temp.gender" class="filter-item">
          <el-option v-for="item in genderOptions" :key="item.key" :label="item.display_name" :value="item.key"/>
        </el-select>
      </el-form-item>
      <el-form-item label="出生年月日">
        <el-date-picker
          v-model="temp.brithday"
          type="date"
          format="yyyy年 MM月 dd日"
          value-format="yyyy-MM-dd"
          placeholder="选择日期"/>
      </el-form-item>
      <el-form-item label="身高">
        <el-input v-model="temp.height" class="filter-item" placeholder="输入身高"/>
      </el-form-item>
      <el-form-item label="体重" prop="type">
        <el-input v-model="temp.weight" class="filter-item" placeholder="输入体重"/>
      </el-form-item>
      <el-form-item label="民族" prop="type">
        <el-input v-model="temp.nation" class="filter-item" placeholder="输入民族"/>
      </el-form-item>
      <el-form-item label="地区" prop="type">
        <el-input v-model="temp.name" class="filter-item" placeholder="输入孩子姓名"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="handleClickSubmit">提交</el-button>
    </div>
  </el-dialog>
</template>
<script>
const genderOptions = [
  { key: 'male', display_name: '男' },
  { key: 'female', display_name: '女' }
]
export default {
  data() {
    return {
      dialogVisible: false,
      temp: {
        parent_name: ''
      },
      genderOptions: genderOptions,
      rules: {}
    }
  },
  methods: {
    handleShow() {
      this.dialogVisible = true
    },
    handleClickSubmit() {
      this.dialogVisible = false
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     done()
      //   })
      //   .catch(_ => {})
    }
  }
}
</script>
