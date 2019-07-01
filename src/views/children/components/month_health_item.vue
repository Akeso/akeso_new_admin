<template>
  <div>
    <span style="font-size: 18px; font-weight: bold;">{{ text.title }}</span>
    <div style="font-size: 14px; margin: 5px 0px;">
      <span>{{ text.des }}</span>
    </div>
    <el-row>
      <el-col :span="24">
        <!--<ve-histogram :color="colorHistogram" :legend="legendHistogram" :x-axis="xAxisHistogram" :y-axis="yAxisHistogram" :series="seriesHistogram"/>-->
        <ve-histogram :color="colorHistogram" :x-axis="xAxisHistogram" :y-axis="yAxisHistogram" :series="seriesHistogram"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: Object,
      default: function() {
        return {
          title: '',
          des: '',
          unit: ''
        }
      }
    },
    hours: {
      type: Array,
      default: function() {
        return [0, 0, 0, 0, 0, 0, 0]
      }
    },
    times: {
      type: Array,
      default: function() {
        return [
          '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01',
          '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01',
          '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01',
          '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01', '2019-01-01',
          '2019-01-01', '2019-01-01'
        ]
      }
    }
  },
  data() {
    this.chartSettings = {
      labelMap: {
        score: '分数'
      }
    }
    return {
      colorHistogram: ['#26c281', '#003366'],
      xAxisHistogram: {
        type: 'category',
        show: true,
        // boundaryGap: true,
        data: this.times
      },
      // legendHistogram: {
      //   data: ['户外时长']
      // },
      yAxisHistogram: {
        name: this.text.unit,
        nameLocation: 'end',
        nameTextStyle: {
          align: 'right'
        },
        type: 'value'
      },
      seriesHistogram: [
        {
          name: this.text.title,
          type: 'bar',
          barWidth: '30%',
          label: {
            // normal: {
            show: true,
            formatter: '{c}',
            position: 'top',
            fontSize: 12,
            fontWeight: 'bold',
            color: '#000000'
          },
          itemStyle: {
            color: '#26c281'
          },
          data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
          ]
        }
      ]
    }
  },
  watch: {
    'hours': function(newVal, oldVal) {
      this.seriesHistogram[0].data = newVal
      this.xAxisHistogram.data = this.times
    }
  },
  created() {
  },
  methods: {
  }
}
</script>
