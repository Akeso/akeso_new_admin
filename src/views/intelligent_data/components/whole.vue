<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="12">
        选择日期
        <el-select v-model="selectDate" placeholder="请选择">
          <el-option
            v-for="item in dateOptions"
            :key="item.key"
            :label="item.label"
            :value="item.key"/>
        </el-select>
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
      </el-col>
    </el-row>
    <el-row>
      <table border="5" cellspacing="0" cellpadding="10" class="table-cls">
        <tr>
          <td class="td-50">名称</td>
          <td class="td-50">统计值</td>
        </tr>
        <tr>
          <td>智能儿童</td>
          <td>{{ wholeData.deviceChildrenCount }}</td>
        </tr>
        <tr>
          <td>全部儿童</td>
          <td>{{ wholeData.childrenCount }}</td>
        </tr>
        <tr>
          <td>智能/全部儿童占比</td>
          <td>{{ wholeData.deviceChildrenPercent }}%</td>
        </tr>
        <tr>
          <td>户外活动情况达标率</td>
          <td>{{ wholeData.outTimePercent }}%</td>
        </tr>
        <tr>
          <td>体育运动情况达标率</td>
          <td>{{ wholeData.stepCountPercent }}%</td>
        </tr>
        <tr>
          <td>近视用眼不良未达标率</td>
          <td>{{ wholeData.nearworkDayPercent }}%</td>
        </tr>
      </table>
    </el-row>
    <el-row>
      <table border="5" cellspacing="0" cellpadding="10" class="table-cls">
        <tr>
          <td class="td-20"/>
          <td class="td-20">监测项目</td>
          <td class="td-20">监测结果</td>
          <td class="td-20">建议参考值</td>
          <td class="td-20">异常描述</td>
        </tr>
        <tr>
          <td rowspan="3">近视健康因子情况</td>
          <td>户外时间/天</td>
          <td>{{ wholeData.outTimeAvg }}分钟</td>
          <td>≥120分钟</td>
          <td/>
        </tr>
        <tr>
          <td>阳光摄入/天</td>
          <td>{{ wholeData.luxDayAvg }}lux</td>
          <td>≥30万lux</td>
          <td/>
        </tr>
        <tr>
          <td>运动步数/天</td>
          <td>{{ wholeData.stepCountAvg }}步</td>
          <td>≥10000步</td>
          <td/>
        </tr>
        <tr>
          <td rowspan="3">近视危险因子情况</td>
          <td>近距离用眼时长/天</td>
          <td>{{ wholeData.nearworkDayAvg }}分钟</td>
          <td>≤240分钟</td>
          <td/>
        </tr>
        <tr>
          <td>不良用眼姿态/天</td>
          <td>{{ wholeData.badPostureTimesAvg }}次</td>
          <td>≤90分钟</td>
          <td/>
        </tr>
        <tr>
          <td>颈椎与用眼负荷/天</td>
          <td>{{ wholeData.nearworkBurdenDayAvg }}D</td>
          <td>≤750D</td>
          <td/>
        </tr>
        <tr>
          <td>初步提示</td>
          <td colspan="4">若想达到近视防控效果最大化，请多去户外运动，沐浴光照，三项健康因子全部达到参考值；同时避免错误用眼习惯增加近视风险，将导致近视加深的近视危险因子下降到参考值以下。</td>
        </tr>
      </table>
    </el-row>
  </div>
</template>
<script>
import { fetchWhole } from '@/api/summary'
const dateOptions = [
  { key: 'first', label: '近一周' },
  { key: 'second', label: '近一个月' },
  { key: 'third', label: '近三个月' }
]
export default {
  data() {
    return {
      dateOptions,
      selectDate: 'first',
      wholeData: {}
    }
  },
  created() {
    this.getData()
  },
  methods: {
    handleFilter: function() {
      console.log('aaaaaaaaa')
      this.getData()
    },
    getData: function() {
      fetchWhole({ selectDate: this.selectDate }).then(response => {
        this.wholeData = response.data
      })
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 20px 5px 10px 5px;
  }
  .breadcrumb {
    line-height: 35px;
  }
  .table-cls {
    margin-top: 20px;
    width: 100%;
  }
  .td-50 {
    width: 50%;
  }
  .td-20 {
    width: 20%;
  }
</style>
