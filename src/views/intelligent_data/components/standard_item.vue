<template>
  <div>
    <table border="5" cellspacing="0" cellpadding="10" class="table-cls">
      <tr>
        <td>{{ title }}</td>
        <td>筛查人数</td>
        <td>对应占比</td>
      </tr>
      <tr>
        <td>达标</td>
        <td>{{ doneCount }}</td>
        <td>{{ 100 - undonePercent }}%</td>
      </tr>
      <tr>
        <td>不达标</td>
        <td>{{ totalCount - doneCount }}</td>
        <td>{{ undonePercent }}%</td>
      </tr>
      <tr>
        <td>合计人数</td>
        <td>{{ totalCount }}</td>
        <td>100%</td>
      </tr>
    </table>
    <ve-pie :title="titlePie" :tooltip="tooltip" :legend="legend" :series="series"/>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '户外时间'
    },
    doneCount: {
      type: Number,
      default: 0
    },
    totalCount: {
      type: Number,
      default: 0
    },
    donePercent: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      titlePie: {
        text: this.title,
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['达标', '未达标']
      },
      series: {
        name: '是否达标',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 0, name: '达标' },
          { value: 0, name: '未达标' }
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    }
  },
  computed: {
    undonePercent() {
      return this.totalCount === 0 ? 50 : 100 - this.donePercent
    }
  },
  watch: {
    'doneCount': function() {
      this.series.data = [
        { value: this.doneCount, name: '达标' },
        { value: this.totalCount - this.doneCount, name: '未达标' }
      ]
    }
  }
}
</script>
<style scoped>
.table-cls {
  margin-top: 20px;
  width: 100%;
  border: 1px solid #409EFF;
}
</style>
