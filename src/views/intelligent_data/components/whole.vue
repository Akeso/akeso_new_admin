<template>
  <div class="container">
    <el-row :gutter="20">
      选择日期
      <el-date-picker
        :clearable="false"
        v-model="selectSection.startDate"
        type="date"
        style="width: 150px;"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
        placeholder="选择日期"/>
      至
      <el-date-picker
        :clearable="false"
        v-model="selectSection.endDate"
        type="date"
        style="width: 150px;"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
        placeholder="选择日期"/>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
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
          <td class="td-30 title-font">名称</td>
          <td class="td-70 title-font">统计值</td>
        </tr>
        <tr>
          <td class="title-font">
            <el-tooltip placement="top" effect="light">
              <div slot="content">指配戴了智能眼镜的儿童， 右边<br>数值为系统里智能儿童的总和。</div>
              <span>智能儿童</span>
            </el-tooltip>
          </td>
          <td>{{ wholeData.deviceChildrenCount }}</td>
        </tr>
        <tr>
          <td class="title-font">
            <el-tooltip placement="top" effect="light">
              <div slot="content">指绑定了该机构/医生的所有儿童，右边<br>数值包括智能儿童和非智能儿童的总和。</div>
              <span>全部儿童</span>
            </el-tooltip>
          </td>
          <td>{{ wholeData.childrenCount }}</td>
        </tr>
        <tr>
          <td class="title-font">
            <el-tooltip placement="top" effect="light">
              <div slot="content">该值代表所有智能儿童与全部儿童的比值。</div>
              <span>智能/全部儿童占比</span>
            </el-tooltip>
          </td>
          <td>{{ wholeData.deviceChildrenPercent }}%</td>
        </tr>
        <tr>
          <td class="title-font">
            <el-tooltip placement="top" effect="light">
              <div slot="content">该值代表在选择的时间段内，智能儿童<br>的每日户外活动达标2小时及以上的情况与<br>所有智能儿童户外活动情况的比值，<br>>该比值越大，说明户外达标的情况越多。</div>
              <span>户外活动情况达标率</span>
            </el-tooltip>
          </td>
          <td>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="wholeData.outTimePercent" status="success"/>
          </td>
        </tr>
        <tr>
          <td class="title-font">
            <el-tooltip placement="top" effect="light">
              <div slot="content">该值代表在选择的时间段内，智能儿童<br>的每日运动步数达标10000步及以上的情况与<br>所有智能儿童运动步数情况的比值，<br>该比值越大，说明运动达标的情况越多。</div>
              <span>体育运动情况达标率</span>
            </el-tooltip>
          </td>
          <td>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="wholeData.stepCountPercent" status="success"/>
          </td>
        </tr>
        <tr>
          <td class="title-font">
            <el-tooltip placement="top" effect="light">
              <div slot="content">该值代表在选择的时间段内，智能儿童<br>的每日近距离用眼未超过建议的参考值情况与<br>所有智能儿童近距离用眼情况的比值，<br>该值越大，说明儿童的用眼情况越好。</div>
              <span>近距用眼不良未超标率</span>
            </el-tooltip>
          </td>
          <td>
            <el-progress :text-inside="true" :stroke-width="18" :percentage="wholeData.nearworkDayPercent" status="success"/>
          </td>
        </tr>
      </table>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <StandardItemGood :title="'户外时间'" :done-count="wholeData.outTimeCount" :total-count="wholeData.totalCount" :done-percent="wholeData.outTimePercent"/>
      </el-col>
      <el-col :span="12">
        <StandardItemBad :title="'近距离用眼时长'" :done-count="wholeData.nearworkDayCount" :total-count="wholeData.totalCount" :done-percent="wholeData.nearworkDayPercent"/>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <StandardItemGood :title="'阳光摄入量'" :done-count="wholeData.luxDayCount" :total-count="wholeData.totalCount" :done-percent="wholeData.luxDayPercent"/>
      </el-col>
      <el-col :span="12">
        <StandardItemBad :title="'不良用眼姿势'" :done-count="wholeData.badPostureTimesCount" :total-count="wholeData.totalCount" :done-percent="wholeData.badPostureTimesPercent"/>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <StandardItemGood :title="'运动步数'" :done-count="wholeData.stepCountCount" :total-count="wholeData.totalCount" :done-percent="wholeData.stepCountPercent"/>
      </el-col>
      <el-col :span="12">
        <StandardItemBad :title="'颈椎与用眼负荷'" :done-count="wholeData.nearworkBurdenDayCount" :total-count="wholeData.totalCount" :done-percent="wholeData.nearworkBurdenDayPercent"/>
      </el-col>
    </el-row>
    <el-row>
      <table border="5" cellspacing="0" cellpadding="10" class="table-cls">
        <tr>
          <td class="td-20"/>
          <td class="td-20 title-font" style="width: 15%;">监测项目</td>
          <td class="td-20 title-font" style="width: 15%;">标准值</td>
          <td class="td-20 title-font" style="width: 15%;">建议达标值</td>
          <td class="td-20 title-font" style="width: 15%;">监测结果</td>
          <td class="td-20 title-font" style="width: 10%;">评分</td>
        </tr>
        <tr>
          <td rowspan="3" class="title-font">近视健康因素情况</td>
          <td class="title-font">户外时间</td>
          <td class="title-font">120分钟/天</td>
          <td>≥80分钟</td>
          <td>{{ wholeData.outTimeAvg }}分钟</td>
          <td>{{ outTimeCondition(wholeData.outTimeAvg) }}</td>
        </tr>
        <tr>
          <td class="title-font">阳光摄入</td>
          <td class="title-font">36万lux/天</td>
          <td>≥24万lux</td>
          <td>{{ wholeData.luxDayAvg }}lux</td>
          <td>{{ luxDayCondition(wholeData.luxDayAvg) }}</td>
        </tr>
        <tr>
          <td class="title-font">运动步数</td>
          <td class="title-font">12000步/天</td>
          <td>≥8000步</td>
          <td>{{ wholeData.stepCountAvg }}步</td>
          <td>{{ stepCountCondition(wholeData.stepCountAvg) }}</td>
        </tr>
        <tr>
          <td rowspan="3" class="title-font">近视危险因素情况</td>
          <td class="title-font">近距离用眼时长</td>
          <td class="title-font">240分钟/天</td>
          <td>≤160分钟</td>
          <td>{{ wholeData.nearworkDayAvg }}分钟</td>
          <td>{{ nearworkDayCondition(wholeData.nearworkDayAvg) }}</td>
        </tr>
        <tr>
          <td class="title-font">不良用眼姿态</td>
          <td class="title-font">45次/天</td>
          <td>≤30次</td>
          <td>{{ wholeData.badPostureTimesAvg }}次</td>
          <td>{{ badPostureTimesCondition(wholeData.badPostureTimesAvg) }}</td>
        </tr>
        <tr>
          <td class="title-font">颈椎与用眼负荷</td>
          <td class="title-font">720D/天</td>
          <td>≤480D</td>
          <td>{{ wholeData.nearworkBurdenDayAvg }}D</td>
          <td>{{ nearworkBurdenDayCondition(wholeData.nearworkBurdenDayAvg) }}</td>
        </tr>
        <tr>
          <td class="title-font">初步提示</td>
          <td colspan="5">若想达到近视防控效果最大化，请多去户外运动，沐浴光照，三项健康因素全部达到参考值；同时避免错误用眼习惯增加近视风险，将导致近视加深的近视危险因素下降到参考值以下。</td>
        </tr>
      </table>
    </el-row>
  </div>
</template>
<script>
import { fetchWhole } from '@/api/summary'
import StandardItemGood from './standard_item_good'
import StandardItemBad from './standard_item_bad'
import { outTimeCondition, luxDayCondition, stepCountCondition, nearworkBurdenDayCondition, nearworkDayCondition, badPostureTimesCondition } from '@/utils/standard'
const dateOptions = [
  { key: 'first', label: '近一周' },
  { key: 'second', label: '近一个月' },
  { key: 'third', label: '近三个月' }
]
export default {
  components: {
    StandardItemGood, StandardItemBad
  },
  data() {
    return {
      dateOptions,
      selectDate: '',
      // selectSection: [new Date(), new Date()],
      selectSection: {
        startDate: new Date(),
        endDate: new Date()
      },
      wholeData: {},
      outTimeCondition: outTimeCondition,
      luxDayCondition: luxDayCondition,
      stepCountCondition: stepCountCondition,
      nearworkBurdenDayCondition: nearworkBurdenDayCondition,
      nearworkDayCondition: nearworkDayCondition,
      badPostureTimesCondition: badPostureTimesCondition
    }
  },
  created() {
    this.getData()
  },
  methods: {
    handleFilter: function() {
      this.selectDate = ''
      this.getData()
    },
    getData: function() {
      fetchWhole(this.selectSection).then(response => {
        this.wholeData = response.data
      })
    },
    radioChange: function() {
      if (this.selectDate === 'first') {
        this.selectSection.endDate = new Date()
        this.selectSection.startDate = new Date(new Date().getTime() - 3600 * 1000 * 24 * 7)
      } else if (this.selectDate === 'second') {
        this.selectSection.endDate = new Date()
        this.selectSection.startDate = new Date(new Date().getTime() - 3600 * 1000 * 24 * 30)
      } else {
        this.selectSection.endDate = new Date()
        this.selectSection.startDate = new Date(new Date().getTime() - 3600 * 1000 * 24 * 90)
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
  .title-font {
    font-weight: bold;
    color: #000;
    cursor: pointer;
  }
</style>
