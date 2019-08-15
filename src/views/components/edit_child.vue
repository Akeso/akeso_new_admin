<template>
  <el-dialog :visible.sync="dialogVisible" :modal="true" :close-on-click-modal="false" title="编辑儿童信息" width="70%">
    <el-form ref="ruleForm" :model="temp" label-position="right" label-width="100px" style="width: 60%; margin-left:80px;">
      <el-form-item label="孩子姓名" prop="name">
        <el-input v-model="temp.name" class="filter-item" placeholder="输入孩子姓名"/>
      </el-form-item>
      <!--<el-form-item label="家长姓名">-->
      <!--<el-input v-model="temp.parent_name" class="filter-item" placeholder="输入家长姓名"/>-->
      <!--</el-form-item>-->
      <!--<el-form-item label="联系方式" prop="phone">-->
      <!--<el-input v-model="temp.phone" class="filter-item" placeholder="输入家长电话"/>-->
      <!--</el-form-item>-->
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
      <el-form-item label="地区" prop="type">
        {{ temp.locationString }}
        <br>
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
import { updateChild } from '@/api/children'
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
        id: undefined,
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
      aa: undefined,
      genderOptions: genderOptions,
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
  created() {
  },
  methods: {
    handlerClickCancel() {
      this.$refs['ruleForm'].resetFields()
      this.resetData()
      this.dialogVisible = false
    },
    handleShow(val) {
      console.log('aaaaaaaaaaaaaa => ', val)
      this.temp = Object.assign(this.temp, val)
      this.dialogVisible = true
      this.getProvinceData()
    },
    handleClickSubmit() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          updateChild(this.temp).then(res => {
            this.eventBus.$emit('updateChildInformation', res.data)
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
    },
    resetData() {
      this.temp = {
        name: undefined,
        parent_name: undefined,
        phone: undefined,
        gender: 'male',
        birthday: new Date(),
        height: undefined,
        weight: undefined,
        province_code: undefined,
        city_code: undefined,
        district_code: undefined
      }
    }
  }
}
</script>
<style>
  .filter-item {
    margin-left: 0px !important;
  }
</style>
