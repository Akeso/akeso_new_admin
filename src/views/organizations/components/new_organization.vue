<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="新增机构" width="70%">
    <el-form ref="ruleForm" :model="temp" :rules="rules" style="width: 60%; margin-left:80px;">
      <el-form-item :label-width="formLabelWidth" prop="title" label="名称">
        <el-input v-model="temp.title" autocomplete="off" clearable/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="联系方式">
        <el-input v-model="temp.phone" clearable/>
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
        <el-input v-model="temp.address"/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClickCancel">取 消</el-button>
      <el-button type="primary" @click="handleClickSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { createItem } from '@/api/organizations'
import { fetchChinaData } from '@/api/china_map'
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      temp: {
        title: undefined,
        phone: undefined,
        province_code: undefined,
        city_code: undefined,
        district_code: undefined,
        address: undefined
      },
      rules: {
        title: [
          { required: true, message: '请输入名称', trigger: 'blur' }
        ]
      },
      loading: false,
      organizationsData: [],
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
    this.getProvinceData()
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
        title: undefined,
        phone: undefined,
        province_code: undefined,
        city_code: undefined,
        district_code: undefined,
        address: undefined
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
