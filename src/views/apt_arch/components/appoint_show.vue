<template>
  <el-dialog :title="'预约信息'" :visible.sync="dialogFormVisible">
    <el-form :model="temp" label-position="left" label-width="70px" style="width: 400px; margin-left:50px;">
      <el-form-item :label="'儿童姓名'" prop="timestamp">
        <el-input v-model="temp.childName" disabled/>
      </el-form-item>
      <el-form-item :label="'联系方式'" prop="timestamp">
        <el-input v-model="temp.phone" disabled/>
      </el-form-item>
      <el-form-item :label="'预约时间'" prop="timestamp">
        <el-input v-model="temp.date" disabled/>
      </el-form-item>
      <el-form-item :label="'预约描述'" prop="timestamp">
        <el-input v-model="temp.note" disabled/>
      </el-form-item>
      <el-form-item :label="'状态'" prop="timestamp">
        <el-input v-model="temp.stateName" disabled/>
      </el-form-item>
      <el-form-item v-if="temp.state === 'confirmed'" :label="'预约反馈'" prop="timestamp">
        <el-input v-model="temp.returnInformation" :autosize="{ minRows: 4, maxRows: 10}" type="textarea" disabled/>
      </el-form-item>
      <el-form-item v-if="temp.state === 'user_cancelled' || temp.state === 'doctor_cancelled' || temp.state === 'admin_cancelled'" :label="'取消原因'" prop="timestamp">
        <el-input v-model="temp.cancelledReason" disabled/>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dialogFormVisible = false">确定</el-button>
      <!--<el-button v-if="dialogStatus=='create'" type="primary" @click="createData">{{ $t('table.confirm') }}</el-button>-->
      <!--<el-button v-else type="primary" @click="updateData">{{ $t('table.confirm') }}</el-button>-->
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      dialogStatus: '',
      temp: {
        id: undefined,
        childName: undefined,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      }
    }
  },
  created() {
  },
  methods: {
    show: function(val) {
      this.dialogFormVisible = true
      this.temp = val
    }
  }
}
</script>
