<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="新增代理商账号" width="70%" top="30px">
    <el-form ref="ruleForm" :model="temp" :rules="rules" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" prop="name" label="名称">
        <el-input v-model="temp.name" autocomplete="off" clearable style="width: 50%;" placeholder="代理商名称"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="负责人" prop="gender">
        <el-input v-model="temp.principal" clearable style="width: 50%;" placeholder="负责人" />
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="联系方式">
        <el-input v-model="temp.phone" clearable style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="email" label="登录账号">
        <el-input v-model="temp.email" style="width: 50%;"/>
        <el-button type="primary" @click="onClickInspectEmail">检查账号</el-button>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="password" label="登录密码">
        <el-input v-model="temp.password" type="password" style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="password_confirmation" label="确认密码">
        <el-input v-model="temp.password_confirmation" type="password" style="width: 50%;"/>
        <el-alert v-if="passwork_valid" title="两次输入密码不一致" type="error"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="地区">
        <el-select v-model="temp.province_code" placeholder="请选择" style="width: 130px;">
          <el-option
            v-for="item in provinceData"
            :key="item.code"
            :label="item.name"
            :value="item.code"/>
        </el-select>
        <el-select v-model="temp.city_code" placeholder="请选择" style="width: 120px;">
          <el-option
            v-for="item in cityData"
            :key="item.code"
            :label="item.name"
            :value="item.code"/>
        </el-select>
        <el-select v-model="temp.district_code" placeholder="请选择" style="width: 120px;">
          <el-option
            v-for="item in districtData"
            :key="item.code"
            :label="item.name"
            :value="item.code"/>
        </el-select>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="详细地址">
        <el-input v-model="temp.address" clearable style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="简介">
        <el-input v-model="temp.description" type="textarea" style="width: 50%;"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClickCancel">取 消</el-button>
      <el-button type="primary" @click="handleClickSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { createItem } from '@/api/agents'
import { fetchChinaData } from '@/api/china_map'
import { checkEmail } from '@/api/merchants'
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      passwork_valid: false,
      temp: {
        name: undefined,
        base_type: 'agent',
        principal: undefined,
        phone: undefined,
        email: undefined,
        password: undefined,
        password_confirmation: undefined,
        description: undefined,
        start_work_date: undefined,
        province_code: undefined,
        city_code: undefined,
        district_code: undefined,
        address: undefined
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入登录账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, message: '最少6个字符', trigger: 'blur' }
        ],
        password_confirmation: [
          { required: true, message: '请输入登录确认密码', trigger: 'blur' },
          { min: 6, message: '最少6个字符', trigger: 'blur' }
        ]
      },
      loading: false,
      provinceData: [],
      cityData: [],
      districtData: []
    }
  },
  watch: {
    'temp.province_code': function(newVal, oldVal) {
      if (newVal === undefined) {
        return
      }
      this.getCityData(newVal)
      this.temp.city_code = undefined
      this.temp.district_code = undefined
    },
    'temp.city_code': function(newVal, oldVal) {
      if (newVal === undefined) {
        return
      }
      this.getDistrictData(newVal)
      this.temp.district_code = undefined
    }
  },
  created() {
  },
  methods: {
    onClickInspectEmail() { // 检查账号
      checkEmail({ email: this.temp.email }).then(res => {
        if (res.data) {
          this.$message({ message: '该账号已被注册', type: 'warning' })
        } else {
          this.$message({ message: '恭喜你，该账号可以注册', type: 'success' })
        }
      })
    },
    handleClickCancel() {
      this.resetData()
      this.dialogFormVisible = false
    },
    handleClickSubmit() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          if (this.temp.password !== this.temp.password_confirmation) {
            this.passwork_valid = true
            return
          }
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
      this.getProvinceData()
      this.dialogFormVisible = true
    },
    resetData() {
      this.$refs['ruleForm'].resetFields()
      this.temp = {
        name: undefined,
        base_type: 'agent',
        phone: undefined,
        email: undefined,
        password: undefined,
        password_confirmation: undefined,
        description: '',
        start_work_date: undefined,
        province_code: undefined,
        city_code: undefined,
        district_code: undefined
      }
    },
    getProvinceData() {
      fetchChinaData().then(response => {
        this.provinceData = response.data
      })
    },
    getCityData(val) {
      fetchChinaData({ province_code: val }).then(response => {
        this.cityData = response.data
      })
    },
    getDistrictData(val) {
      fetchChinaData({ city_code: val }).then(response => {
        this.districtData = response.data
      })
    }
  }
}
</script>
