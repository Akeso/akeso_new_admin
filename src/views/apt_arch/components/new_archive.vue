<template>
  <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" title="新建儿童档案" width="70%">
    <el-form ref="ruleForm" :rules="rules" :model="temp" label-position="right" label-width="100px" style="width: 60%; margin-left:80px;">
      <el-form-item label="孩子姓名" prop="name">
        <el-input v-model="temp.name" class="filter-item" placeholder="输入孩子姓名"/>
      </el-form-item>
      <el-form-item label="家长姓名">
        <el-input v-model="temp.parent_name" class="filter-item" placeholder="输入家长姓名"/>
      </el-form-item>
      <el-form-item label="联系方式" prop="phone">
        <el-input v-model="temp.phone" class="filter-item" placeholder="输入家长电话"/>
      </el-form-item>
      <el-form-item label="孩子性别" prop="gender">
        <el-select v-model="temp.gender" class="filter-item">
          <el-option v-for="item in genderOptions" :key="item.key" :label="item.display_name" :value="item.key"/>
        </el-select>
      </el-form-item>
      <el-form-item label="出生年月日" prop="birthday">
        <el-date-picker
          v-model="temp.birthday"
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
        <!--<el-input v-model="temp.name" class="filter-item" placeholder="输入孩子姓名"/>-->
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
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handlerClickCancel">取消</el-button>
      <el-button type="primary" @click="handleClickSubmit">提交</el-button>
    </div>
  </el-dialog>
</template>
<script>
import { createChild } from '@/api/children'
import { fetchChinaData } from '@/api/china_map'
const genderOptions = [
  { key: 'male', display_name: '男' },
  { key: 'female', display_name: '女' }
]
export default {
  data() {
    return {
      dialogVisible: false,
      temp: {
        name: undefined,
        parent_name: undefined,
        phone: undefined,
        gender: 'male',
        birthday: new Date(),
        height: undefined,
        weight: undefined,
        nation: undefined,
        province_code: undefined,
        city_code: undefined,
        district_code: undefined
      },
      genderOptions: genderOptions,
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 1, max: 6, message: '长度在 1 到 6 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ]
      },
      provinceData: [],
      cityData: [],
      districtData: []
    }
  },
  watch: {
    'temp.province_code': function(newVal, oldVal) {
      this.getCityData(newVal)
      this.temp.city_code = undefined
      this.temp.district_code = undefined
    },
    'temp.city_code': function(newVal, oldVal) {
      this.getDistrictData(newVal)
      this.temp.district_code = undefined
    }
  },
  methods: {
    handlerClickCancel() {
      this.$refs['ruleForm'].resetFields()
      this.temp = {
        name: undefined,
        parent_name: undefined,
        phone: undefined,
        gender: 'male',
        birthday: new Date(),
        height: undefined,
        weight: undefined,
        nation: undefined,
        province_code: undefined,
        city_code: undefined,
        district_code: undefined
      }
      this.dialogVisible = false
    },
    handleShow() {
      this.dialogVisible = true
      this.getProvinceData()
    },
    handleClickSubmit() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          createChild(this.temp).then(response => {
            this.dialogVisible = false
          })
        } else {
          return false
        }
      })
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
