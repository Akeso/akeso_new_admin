<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-date-picker
        v-model="query.dateSection"
        :picker-options="pickerOptions2"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd"/>
    </el-row>
    <ve-line :data="chartData" :settings="chartSettings" :set-option-opts="true"/>
  </div>
</template>
<script>
import { fetchGrowth } from '@/api/statistics'
export default {
  name: 'StatisticsLine',
  data() {
    this.chartSettings = {
      labelMap: {
        newChild: '新增用户量',
        newDeviceChild: '新增智能用户量',
        syncChild: '同步数据用户'
      },
      area: true
    }
    return {
      pickerOptions2: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      query: {
        dateSection: [new Date(new Date() - 7 * 24 * 3600 * 1000), new Date()]
      },
      chartData: {
        columns: ['date', 'newChild', 'newDeviceChild', 'syncChild'],
        rows: [
          { 'date': '2018-01-01', 'newChild': 2 },
          { 'date': '2018-01-02', 'newChild': 3 },
          { 'date': '2018-01-03', 'newChild': 9 },
          { 'date': '2018-01-05', 'newChild': 1 },
          { 'date': '2018-01-10', 'newChild': 12 },
          { 'date': '2018-01-20', 'newChild': 45 }
        ]
      }
    }
  },
  watch: {
    'query.dateSection': function(val, oldVal) {
      this.getGrowthData()
    }
  },
  created() {
    this.getGrowthData()
  },
  methods: {
    getGrowthData() {
      fetchGrowth(this.query).then(response => {
        this.chartData.rows = response.data.items
      })
    }
  }
}
</script>
