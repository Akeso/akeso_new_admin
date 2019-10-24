<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="新增产品" width="70%" top="30px">
    <el-form ref="ruleForm" :model="temp" :rules="rules" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" prop="name" label="名称">
        <el-input v-model="temp.name" autocomplete="off" clearable style="width: 50%;" placeholder="产品名称"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="brand" label="品牌">
        <el-input v-model="temp.brand" autocomplete="off" clearable style="width: 50%;" placeholder="品牌"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="serial" label="系列">
        <el-input v-model="temp.serial" autocomplete="off" clearable style="width: 50%;" placeholder="系列"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="price" label="价格">
        <el-input v-model="temp.price" autocomplete="off" clearable style="width: 50%;" placeholder="价格"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="total" label="总量">
        <el-input v-model="temp.total" autocomplete="off" clearable style="width: 50%;" placeholder="总量"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="unit" label="单位">
        <el-input v-model="temp.unit" autocomplete="off" clearable style="width: 50%;" placeholder="单位"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="des" label="描述">
        <el-input v-model="temp.des" autocomplete="off" clearable style="width: 50%;" placeholder="描述"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClickCancel">取 消</el-button>
      <el-button type="primary" @click="handleClickSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { createItem } from '@/api/products'

export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      passwork_valid: false,
      temp: {
        name: undefined,
        brand: undefined,
        serial: undefined,
        number: undefined,
        des: undefined,
        price: undefined,
        total: 0
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ]
      },
      loading: false
    }
  },
  computed: {
  },
  watch: {
  },
  created() {
  },
  methods: {
    handleClickCancel() {
      this.resetData()
      this.dialogFormVisible = false
    },
    handleClickSubmit() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          createItem(this.temp).then(response => {
            this.resetData()
            this.dialogFormVisible = false
            this.$emit('create-success')
          })
        } else {
          return false
        }
      })
    },
    show() {
      this.dialogFormVisible = true
    },
    resetData() {
      this.$refs['ruleForm'].resetFields()
      this.temp = {
        name: undefined,
        brand: undefined,
        serial: undefined,
        number: undefined,
        des: undefined,
        price: undefined,
        total: 0
      }
    }
  }
}
</script>
