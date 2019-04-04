<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="14">
        选择日期
        <el-date-picker
          :clearable="false"
          v-model="selectSection"
          format="yyyy-MM-dd"
          value-format="yyyy-MM-dd"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"/>
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
      </el-col>
    </el-row>
    <el-row style="margin-top: 10px;">
      <el-radio-group v-model="selectDate" @change="radioChange">
        <el-radio-button label="first">近一周</el-radio-button>
        <el-radio-button label="second">近一个月</el-radio-button>
        <el-radio-button label="third">近三个月</el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row>
      <table border="5" cellspacing="0" cellpadding="10" class="table-cls">
        <tr>
          <td class="td-30">名称</td>
          <td class="td-70">统计值</td>
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
          <td>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="wholeData.outTimePercent" status="success"/>
          </td>
        </tr>
        <tr>
          <td>体育运动情况达标率</td>
          <td>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="wholeData.stepCountPercent" status="success"/>
          </td>
        </tr>
        <tr>
          <td>近视用眼不良未达标率</td>
          <td>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="wholeData.nearworkDayPercent" status="success"/>
          </td>
        </tr>
      </table>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <StandardItem :title="'户外时间'" :done-count="wholeData.outTimeCount" :total-count="wholeData.totalCount" :done-percent="wholeData.outTimePercent"/>
      </el-col>

      <el-col :span="12">
        <StandardItem :title="'阳光摄入量'" :done-count="wholeData.luxDayCount" :total-count="wholeData.totalCount" :done-percent="wholeData.luxDayPercent"/>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <StandardItem :title="'运动步数'" :done-count="wholeData.stepCountCount" :total-count="wholeData.totalCount" :done-percent="wholeData.stepCountPercent"/>
      </el-col>

      <el-col :span="12">
        <StandardItem :title="'护眼光照时间'" :done-count="wholeData.protectLuxTimeCount" :total-count="wholeData.totalCount" :done-percent="wholeData.protectLuxTimePercent"/>
      </el-col>
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
import StandardItem from './standard_item'
const dateOptions = [
  { key: 'first', label: '近一周' },
  { key: 'second', label: '近一个月' },
  { key: 'third', label: '近三个月' }
]
export default {
  components: {
    StandardItem
  },
  data() {
    return {
      dateOptions,
      selectDate: '',
      selectSection: [new Date(), new Date()],
      wholeData: {}
    }
  },
  created() {
    this.getData()
  },
  methods: {
    handleFilter: function() {
      this.getData()
    },
    getData: function() {
      fetchWhole({ selectSection: this.selectSection }).then(response => {
        this.wholeData = response.data
      })
    },
    radioChange: function() {
      if (this.selectDate === 'first') {
        const end = new Date()
        const start = new Date(end.getTime() - 3600 * 1000 * 24 * 7)
        this.selectSection = [start, end]
      } else if (this.selectDate === 'second') {
        const end = new Date()
        const start = new Date(end.getTime() - 3600 * 1000 * 24 * 30)
        this.selectSection = [start, end]
      } else {
        const end = new Date()
        const start = new Date(end.getTime() - 3600 * 1000 * 24 * 90)
        this.selectSection = [start, end]
      }
      this.getData()
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 20px 5px 10px 5px;
  }
  .table-cls {
    margin-top: 20px;
    width: 100%;
    border: 1px solid #409EFF;
  }
  .td-70 {
    width: 70%;
  }
  .td-50 {
    width: 50%;
  }
  .td-30 {
    width: 30%;
  }
  .td-20 {
    width: 20%;
  }
</style>
