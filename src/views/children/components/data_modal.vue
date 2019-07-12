<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" :title="stateName" style="text-align:center;">
    <el-form :model="temp" style="">
      <div class="box-con">
        <optometric-data v-if="state == 'optometry'"/>
        <visual-data v-if="state == 'visual'" />
        <review-data v-if="state == 'review'" />
        <ocular-examination v-if="state == 'eye'" />
      </div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClickCancel">取 消</el-button>
      <el-button type="primary" @click="handleClickSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { fetchList, createEyeExaminations, reviewOptometry } from '@/api/eye_examinations'
import optometricData from './optometric_data'
import reviewData from './review_data'
import ocularExamination from './ocular_examination_data'
import visualData from './visual_function_examination_data'
export default {
  components: {
    optometricData,
    visualData,
    reviewData,
    ocularExamination
  },
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
      checkedOptions: [],
      state: '',
      stateName: '',
      listId: '', // 档案ID
      editTestedData: {} // 验光数据视力检查
    }
  },
  created() {
  },
  methods: {
    getServiceList() {
      fetchList().then(res => {
        this.dataOptions = res.data
        console.log('data => ', this.dataOptions)
      })
    },
    handleClickCancel() {
      this.resetData()
      this.dialogFormVisible = false
    },
    handleClickSubmit() {
      switch (this.state) {
        case 'optometry':
          this.createEyeExaminations()
          break
      }
    },
    // 创建视光档案
    createEyeExaminations: function() {
      const data = this.$store.getters.eyeExation
      createEyeExaminations(data).then(res => {
        // console.log('添加验光数据===》》', data)
        this.dialogFormVisible = false
        // this.$emit('update-success')
        // this.$message({
        //   type: 'success',
        //   message: '修改成功!'
        // })
      })
    },
    // 创建复查验光
    reviewOptometry: function() {
      const data = this.$store.getters.eyeExation
      reviewOptometry(data).then(res => {
        this.dialogFormVisible = false
      })
    },
    handleChangeData(val) {
      console.log('val => ', val)
      console.log('checkBox => ', val)
    },
    show(val, id) {
      // this.getServiceList()
      // this.temp = JSON.parse(JSON.stringify(val))
      this.listId = id
      this.state = val
      switch (val) {
        case 'optometry':
          this.stateName = '验光数据档案'
          break
        case 'visual':
          this.stateName = '视功能检查档案'
          break
        case 'review':
          this.stateName = '复查验光档案'
          break
        case 'eye':
          this.stateName = '眼部检查（主观、客观）档案'
          break
        case 'all':
          this.stateName = '全部档案'
          break
      }
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
  .box-con{
    max-height: 65vh;
    overflow-y:scroll;
  }
  .icon-star{
  margin-right:2px;
}
.drag-handler{
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.show-d{
  margin-top: 15px;
}
.modal-w .table-cls{
  width: 100%;
  border:.5px solid #ebeef5;
  border-left: 0.5px solid #ebeef5;
  border-top: .5px;
}
.modal-w .table-cls td,.modal-w .table-cls tr,.modal-w .table-cls th{
  border-right: 0.5px solid #ebeef5;
  border-bottom: 0.5px;
  border-left: 0.5px;
  border-top: 0.5px solid #ebeef5;
  border-color:#ebeef5;
}
.modal-w .table-cls tr{
  height: 40px;
}
.modal-w .table-cls td{
  padding: 6px;
}
.modal-w .table-cls td .label input{
  height: 32px;
  width:100%;
  box-sizing:border-box;
}
.modal-w .table-cls td .about input{
  height: 32px;
  width:62%;
  box-sizing:border-box;
  margin-left:10px;
}
.modal-w .table-cls td select{
  width: 100%;
  height: 32px;
}
.tab-header{
  background: #27adff;
  color: #fff;
}
.text-left{
  text-align: left;
}
.title-font{
  font-weight: 600;
}
</style>
