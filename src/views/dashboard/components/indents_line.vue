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
import { fetchIndentsGrowth } from '@/api/indents_statistics'
export default {
  name: 'IndentsLine',
  data() {
    this.chartSettings = {
      labelMap: {
        identsCount: '订单数量'
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
        columns: ['date', 'identsCount'],
        rows: [
          { 'date': '2018-01-01', 'identsCount': 2 },
          { 'date': '2018-01-02', 'identsCount': 3 },
          { 'date': '2018-01-03', 'identsCount': 9 },
          { 'date': '2018-01-05', 'identsCount': 1 },
          { 'date': '2018-01-10', 'identsCount': 12 },
          { 'date': '2018-01-20', 'identsCount': 45 }
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
      fetchIndentsGrowth(this.query).then(response => {
        this.chartData.rows = response.data.items
      })
    }
  }
}
</script>
