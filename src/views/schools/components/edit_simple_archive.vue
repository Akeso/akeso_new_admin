<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="新增筛查" width="70%" top="30px">
    <el-form :model="temp" style="width: 90%; margin-left:20px;">
      <el-form-item :label-width="formLabelWidth" prop="parent_name" label="家长姓名">
        <el-input v-model="temp.parent_name" clearable style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="phone" label="联系电话">
        <el-input v-model="temp.phone" disabled style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" prop="child_name" label="儿童姓名">
        <el-input v-model="temp.child_name" clearable style="width: 50%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="孩子性别" prop="gender">
        <el-select v-model="temp.gender" class="filter-item">
          <el-option v-for="item in genderOptions" :key="item.key" :label="item.display_name" :value="item.key"/>
        </el-select>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="出生年月日" prop="birthday">
        <el-date-picker
          v-model="temp.birthday"
          type="date"
          format="yyyy年 MM月 dd日"
          value-format="yyyy-MM-dd"
          placeholder="选择日期"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="裸眼视力(5分法)">
        左眼：<el-input v-model="temp.ucva_os" clearable style="width: 15%;"/>
        右眼：<el-input v-model="temp.ucva_od" clearable style="width: 15%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="戴镜视力(5分法)">
        左眼：<el-input v-model="temp.wear_eyesight_os" clearable style="width: 15%;"/>
        右眼：<el-input v-model="temp.wear_eyesight_od" clearable style="width: 15%;"/>
      </el-form-item>
      <el-form-item :label-width="formLabelWidth" label="电脑验光">
        右眼球镜：<el-input v-model="temp.sph_od" clearable style="width: 15%;"/>
        右眼柱镜：<el-input v-model="temp.cyl_od" clearable style="width: 15%;"/>
        右眼轴向：<el-input v-model="temp.axial_od" clearable style="width: 15%;"/>
        <p>
          左眼球镜：<el-input v-model="temp.sph_os" clearable style="width: 15%;"/>
          左眼柱镜：<el-input v-model="temp.cyl_os" clearable style="width: 15%;"/>
          左眼轴向：<el-input v-model="temp.axial_os" clearable style="width: 15%;"/>
        </p>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClickCancel">取 消</el-button>
      <el-button type="primary" @click="handleClickSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { updateItem } from '@/api/simple_archives'
const genderOptions = [
  { key: 'male', display_name: '男' },
  { key: 'female', display_name: '女' }
]
export default {
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: '120px',
      temp: {
        id: undefined,
        parent_name: undefined,
        phone: undefined,
        child_name: undefined,
        gender: undefined,
        birthday: undefined,
        ucva_od: undefined,
        ucva_os: undefined,
        wear_eyesight_od: undefined,
        wear_eyesight_os: undefined,
        sph_od: undefined,
        cyl_od: undefined,
        axial_od: undefined,
        sph_os: undefined,
        cyl_os: undefined,
        axial_os: undefined
      },
      genderOptions: genderOptions,
      num_values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      loading: false
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
      updateItem(this.temp).then(response => {
        this.resetData()
        this.dialogFormVisible = false
        this.$emit('update-success')
      })
    },
    show(val) {
      this.temp = val
      this.dialogFormVisible = true
    },
    resetData() {
      this.temp = {
        parent_name: undefined,
        phone: undefined,
        child_name: undefined,
        gender: undefined,
        birthday: undefined,
        ucva_od: undefined,
        ucva_os: undefined,
        wear_eyesight_od: undefined,
        wear_eyesight_os: undefined
      }
    }
  }
}
</script>
