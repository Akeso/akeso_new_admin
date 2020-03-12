<template>
  <div class="">
    <el-row>
      <table border="5" cellspacing="0" cellpadding="10" class="table-cls">
        <tr>
          <td rowspan="4" class="td-20 title-font">健康因素</td>
          <td class="td-20 title-font tab-header" style="width: 16%;">监测项目</td>
          <td class="td-20 title-font tab-header" style="width: 16%;">标准值</td>
          <td class="td-20 title-font tab-header" style="width: 16%;">建议达标值</td>
          <td class="td-20 title-font tab-header" style="width: 10%;">达标天数</td>
          <td class="td-20 title-font tab-header" style="width: 16%;">监测结果</td>
          <td class="td-20 title-font tab-header" style="width: 10%;">评分</td>
        </tr>
        <tr>
          <td class="title-font">户外时间</td>
          <td>120分钟/天</td>
          <td>≥60分钟/天</td>
          <td>{{ reachDays.outTime }}天</td>
          <td class="c-blue">{{ outTime }}分钟/天</td>
          <td class="c-blue">{{ outTimeCondition(outTime) }}</td>
        </tr>
        <tr>
          <td class="title-font">阳光摄入</td>
          <td>36W lux/天</td>
          <td>≥24W lux/天</td>
          <td>{{ reachDays.outTimeLux }}天</td>
          <td class="c-blue">{{ outTimeLux }}lux/天</td>
          <td class="c-blue">{{ outTimeLuxCondition(outTimeLux) }}</td>
        </tr>
        <tr>
          <td class="title-font">运动步数</td>
          <td>12000步/天</td>
          <td>≥8000步/天</td>
          <td>{{ reachDays.stepCount }}天</td>
          <td class="c-blue">{{ stepCount }}步/天</td>
          <td class="c-blue">{{ stepCountCondition(stepCount) }}</td>
        </tr>
        <tr>
          <td rowspan="3" class="title-font">危险因素</td>
          <td class="title-font">颈椎与用眼负荷</td>
          <td>720D/天</td>
          <td>≤480D/天</td>
          <td>{{ reachDays.nearworkBurdenDay }}天</td>
          <td class="c-blue">{{ nearworkBurdenDay }}D/天</td>
          <td class="c-blue">{{ nearworkBurdenDayCondition(nearworkBurdenDay) }}</td>
        </tr>
        <tr>
          <td class="title-font">不良用眼姿势</td>
          <td>45次/天</td>
          <td>≤30次/天</td>
          <td>{{ reachDays.badPostureTimes }}天</td>
          <td class="c-blue">{{ badPostureTimes }}次/天</td>
          <td class="c-blue">{{ badPostureTimesCondition(badPostureTimes) }}</td>
        </tr>
        <tr>
          <td class="title-font">近距离用眼时间</td>
          <td>240分钟/天</td>
          <td>≤160分钟/天</td>
          <td>{{ reachDays.nearworkDay }}天</td>
          <td class="c-blue">{{ nearworkDay }}分钟/天</td>
          <td class="c-blue">{{ nearworkDayCondition(nearworkDay) }}</td>
        </tr>
        <!--<tr>
          <td class="title-font">初步提示</td>
          <td colspan="4">若想达到近视防控效果最大化，请多去户外运动，沐浴光照，三项健康因素全部达到参考值；同时避免错误用眼习惯增加近视风险，将导致近视加深的近视危险因素下降到参考值以下。</td>
        </tr>-->
      </table>
    </el-row>
  </div>
</template>

<script>
import {
  outTimeCondition,
  outTimeLuxCondition,
  stepCountCondition,
  nearworkBurdenDayCondition,
  nearworkDayCondition,
  badPostureTimesCondition
} from '@/utils/standard'

export default {
  props: {
    reachDays: {
      type: Object,
      default: function() {
        return {
          outTime: 0,
          stepCount: 0,
          outTimeLux: 0,
          nearworkDay: 0,
          nearworkBurdenDay: 0,
          badPostureTimes: 0
        }
      }
    },
    outTime: {
      type: Number,
      default: 0
    },
    stepCount: {
      type: Number,
      default: 0
    },
    outTimeLux: {
      type: Number,
      default: 0
    },
    nearworkBurdenDay: {
      type: Number,
      default: 0
    },
    nearworkDay: {
      type: Number,
      default: 0
    },
    badPostureTimes: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      list: null,
      total: null,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10
      },
      // sortable: null,
      oldList: [],
      newList: [],
      outTimeCondition: outTimeCondition,
      outTimeLuxCondition: outTimeLuxCondition,
      stepCountCondition: stepCountCondition,
      nearworkBurdenDayCondition: nearworkBurdenDayCondition,
      nearworkDayCondition: nearworkDayCondition,
      badPostureTimesCondition: badPostureTimesCondition
    }
  },
  created() {
    // this.getList()
  },
  methods: {
    // getList() {
    //   this.listLoading = true
    //   fetchList(this.listQuery).then(response => {
    //     this.list = response.data.items
    //     this.total = response.data.total
    //     this.listLoading = false
    //     this.oldList = this.list.map(v => v.id)
    //     this.newList = this.oldList.slice()
    //     this.$nextTick(() => {
    //       // this.setSort()
    //     })
    //   })
    // }
    // setSort() {
    //   const el = document.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
    //   this.sortable = Sortable.create(el, {
    //     ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
    //     setData: function(dataTransfer) {
    //       dataTransfer.setData('Text', '')
    //       // to avoid Firefox bug
    //       // Detail see : https://github.com/RubaXa/Sortable/issues/1012
    //     },
    //     onEnd: evt => {
    //       const targetRow = this.list.splice(evt.oldIndex, 1)[0]
    //       this.list.splice(evt.newIndex, 0, targetRow)

    //       // for show the changes, you can delete in you code
    //       const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
    //       this.newList.splice(evt.newIndex, 0, tempIndex)
    //     }
    //   })
    // }
  }
}
</script>

<style scoped>
  .icon-star {
    margin-right: 2px;
  }

  .drag-handler {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .show-d {
    margin-top: 15px;
  }

  .table-cls {
    width: 100%;
    border: .5px solid #ebeef5;
    border-left: 0.5px solid #ebeef5;
    border-top: .5px;
  }

  .table-cls td, .table-cls tr {
    border-right: 0.5px solid #ebeef5;
    border-bottom: 0.5px;
    border-left: 0.5px;
    border-top: 0.5px solid #ebeef5;
    border-color: #ebeef5;
  }

  .tab-header {
    background: #27adff;
    color: #fff;
  }
</style>
