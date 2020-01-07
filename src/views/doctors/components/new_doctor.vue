<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="新增机构/医生账号" width="70%" top="30px">
    <el-form ref="ruleForm" :model="temp" :rules="rules" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" prop="name" label="名称">
        <el-input v-model="temp.name" autocomplete="off" clearable style="width: 50%;" placeholder="机构/医生名称"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="账户类型">
        <el-select v-model="temp.base_type" placeholder="请选择" style="width: 130px;">
          <el-option
            v-for="item in base_types"
            :key="item.key"
            :label="item.value"
            :value="item.key"/>
        </el-select>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="类别">
        <el-select v-model="temp.cate" placeholder="请选择" style="width: 130px;">
          <el-option
            v-for="item in cateNames"
            :key="item.key"
            :label="item.value"
            :value="item.key"/>
        </el-select>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="负责人" prop="gender">
        <el-input v-model="temp.principal" clearable style="width: 50%;" placeholder="负责人" />
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="联系方式">
        <el-input v-model="temp.phone" clearable style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="email" label="登录账号">
        <el-input v-model="temp.email" style="width: 50%;"/>
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
import { createItem } from '@/api/doctors'
import { fetchChinaData } from '@/api/china_map'
const base_types = [
  { key: 'organization', value: '机构' },
  { key: 'doctor', value: '医生' }
]
const cates1 = [
  { key: 'care_center', value: '视光中心' }, { key: 'eye_care', value: '眼科中心' }, { key: 'eye_hospital', value: '眼科医院' }
]
const cates2 = [
  { key: 'doctor_a', value: '主任医师' }, { key: 'doctor_b', value: '副主任医师' }, { key: 'doctor_c', value: '主治医生' }, { key: 'doctor_d', value: '眼科医生' }, { key: 'doctor_e', value: '视光师' }
]
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      passwork_valid: false,
      temp: {
        name: undefined,
        base_type: 'organization',
        cate: undefined,
        principal: undefined,
        phone: undefined,
        email: undefined,
        password: undefined,
        password_confirmation: undefined,
        organization_id: undefined,
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
      districtData: [],
      base_types: base_types
    }
  },
  computed: {
    cateNames() {
      return this.temp.base_type === 'organization' ? cates1 : cates2
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
          if (this.$store.getters.baseType === 'agent') {
            Object.assign(this.temp, { agent_id: this.$store.getters.id })
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
        base_type: 'organization',
        gender: undefined,
        phone: undefined,
        email: undefined,
        password: undefined,
        password_confirmation: undefined,
        organization_id: undefined,
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
