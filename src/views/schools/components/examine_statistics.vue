<template>
  <el-dialog :visible.sync="dialogFormVisible" :close-on-click-modal="false" title="" width="70%" top="30px">
    <el-row>
      <el-col :span="24" style="margin-bottom: 20px;">
        <div>
          <p class="header-title">班级近视筛查报告统计</p>
        </div>
        <table border="0" cellspacing="0" cellpadding="4" class="table-a">
          <tr>
            <td class="table-td">男生</td>
            <td class="table-td">10</td>
            <td class="table-td">女生</td>
            <td class="table-td">14</td>
            <td class="table-td">-</td>
            <td class="table-td">-</td>
          </tr>
          <tr>
            <td class="table-td">近视率</td>
            <td class="table-td">80%</td>
            <td class="table-td">左眼平均视力情况</td>
            <td class="table-td">4.0</td>
            <td class="table-td">右眼平均视力情况</td>
            <td class="table-td">4.0</td>
          </tr>
        </table>
      </el-col>
      <el-row>
        <el-col :span="24">
          <ve-histogram :data="chartData" :settings="chartSettings"/>
        </el-col>
      </el-row>
    </el-row>
    <div slot="footer">
      <el-button @click="dialogFormVisible = false">确    定</el-button>
    </div>
  </el-dialog>
</template>

<script>
// import { updateItem } from '@/api/examines'
export default {
  data() {
    this.grid = {
      show: true,
      top: 50,
      left: 10,
      backgroundColor: '#ccc',
      borderColor: '#000'
    }
    this.chartSettings = {
      metrics: ['左眼人数', '右眼人数'],
      dimension: ['左眼视力']
    }
    return {
      chartData: {
        columns: ['视力', '左眼人数', '右眼人数'],
        rows: [
          { '左眼视力': '4.5以下', '左眼人数': 2, '右眼人数': 2 },
          { '左眼视力': '4.6', '左眼人数': 3, '右眼人数': 2 },
          { '左眼视力': '4.7', '左眼人数': 4, '右眼人数': 2 },
          { '左眼视力': '4.8', '左眼人数': 3, '右眼人数': 2 },
          { '左眼视力': '4.9', '左眼人数': 6, '右眼人数': 2 },
          { '左眼视力': '5.0', '左眼人数': 4, '右眼人数': 2 },
          { '左眼视力': '5.0以上', '左眼人数': 5, '右眼人数': 2 }
        ]
      },
      dialogFormVisible: false,
      formLabelWidth: '120px',
      loading: false
    }
  },
  created() {
  },
  methods: {
    show(val) {
      this.dialogFormVisible = true
    }
  }
}
</script>
<style scoped>
  .header-title {
    text-align: center;
    font-size: 24px;
    justify-content: center;
    font-weight: bold;
  }
  .table-a {
    /*border:1px solid #F00;*/
    /*padding: 20px;*/
    width: 100%;
    border-right: 1px solid gray;
    border-bottom: 1px solid gray;
  }
  .table-td{
    width: 12.5%;
    font-size: 14px;
    padding: 5px;
    border-left:1px solid gray;
    border-top:1px solid gray;
  }
</style>
