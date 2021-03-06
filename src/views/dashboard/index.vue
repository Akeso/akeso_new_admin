<template>
  <div class="dashboard-container">

    <panel-group :statistics-data="statisticsData"/>

    <h3>{{ generateShow('home.time_section') }}</h3>
    <StatisticsLine/>

    <h3>开单统计</h3>
    <IndentsLine/>

    <h3>销售额统计</h3>
    <IndentPriceLine/>

    <h3>{{ generateShow('home.user_tag_statics') }}</h3>
    <el-row :gutter="20" style="margin-top:10px; margin-bottom: 10px;">
      <el-col v-for="item in userTags" :key="item.id" :span="4">
        <el-card class="box-card">
          <div slot="header" class="clearfix" style="cursor: pointer;" @click="handleClickTag('tag', item)">
            <span>{{ item.name }}</span>
          </div>
          <div class="component-item">{{ item.childrenCount }}</div>
        </el-card>
      </el-col>
    </el-row>

    <h3>{{ generateShow('home.clinical_tag_statics') }}</h3>
    <el-row :gutter="20" style="margin-top:10px; margin-bottom: 20px;">
      <el-col v-for="item in clinicalTags" :key="item.id" :span="3">
        <el-card class="box-card" >
          <div slot="header" class="clearfix" style="cursor: pointer;" @click="handleClickTag('tag', item)">
            <span>{{ item.name }}</span>
          </div>
          <div class="component-item">{{ item.childrenCount }}</div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import PanelGroup from './components/PanelGroup'
import StatisticsLine from './components/statistics_line'
import IndentsLine from './components/indents_line'
import IndentPriceLine from './components/indent_price_line'
import { fetchIndex, fetchGrowth } from '@/api/statistics'
import { fetchIndentsGrowth } from '@/api/indents_statistics'

export default {
  name: 'Dashboard',
  components: {
    PanelGroup, StatisticsLine, IndentsLine, IndentPriceLine
  },
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
      queryStatistics: {
        dateSection: [new Date(new Date() - 7 * 24 * 3600 * 1000), new Date()]
      },
      queryIndents: {
        dateSection: [new Date(new Date() - 7 * 24 * 3600 * 1000), new Date()]
      },
      statisticsData: {
        childrenCount: 0,
        deviceChildrenCount: 0,
        appointCount: 0,
        followCount: 0,
        toWeekUpdateCount: 0
      },
      userTags: [],
      clinicalTags: [],
      chartStatisticsData: {
        columns: ['date', 'newChild', 'newDeviceChild', 'syncChild'],
        rows: [
          { 'date': '2018-01-01', 'newChild': 2 },
          { 'date': '2018-01-02', 'newChild': 3 },
          { 'date': '2018-01-03', 'newChild': 9 },
          { 'date': '2018-01-05', 'newChild': 1 },
          { 'date': '2018-01-10', 'newChild': 12 },
          { 'date': '2018-01-20', 'newChild': 45 }
        ]
      },
      chartIndentsData: {
        columns: ['date', 'newChild', 'newDeviceChild', 'syncChild'],
        rows: [
          { 'date': '2018-01-01', 'newChild': 2 },
          { 'date': '2018-01-02', 'newChild': 3 },
          { 'date': '2018-01-03', 'newChild': 9 },
          { 'date': '2018-01-05', 'newChild': 1 },
          { 'date': '2018-01-10', 'newChild': 12 },
          { 'date': '2018-01-20', 'newChild': 45 }
        ]
      },
      examineChildren: []
    }
  },
  watch: {
    // 'queryStatistics.dateSection': function(val, oldVal) {
    //   this.getGrowthData()
    // }
  },
  created() {
    this.getStatisticsData()
    // this.getGrowthData()
  },
  methods: {
    handleClickTag(type, item) {
      this.$router.push({ name: 'children', query: { type: type, title: item.name, tag_id: item.id }})
    },
    getStatisticsData() {
      fetchIndex().then(response => {
        this.statisticsData.childrenCount = response.data.childrenCount
        this.statisticsData.deviceChildrenCount = response.data.deviceChildrenCount
        this.statisticsData.appointCount = response.data.appointCount
        this.statisticsData.followCount = response.data.followCount
        this.statisticsData.toWeekUpdateCount = response.data.toWeekUpdateCount
        this.userTags = response.data.userTags
        this.clinicalTags = response.data.clinicalTags
      })
    },
    getGrowthData() {
      fetchGrowth(this.queryStatistics).then(response => {
        this.chartStatisticsData.rows = response.data.items
      })
    },
    getIndentsGrowthData() {
      fetchIndentsGrowth(this.queryIndents).then(response => {
        this.chartIndentsData.rows = response.data.items
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 10px 20px 0px 20px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
