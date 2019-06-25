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
        return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
        data: [
          '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00',
          '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
          '20:00', '21:00', '22:00', '23:00'
        ]
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
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
      ]
    }
  },
  watch: {
    'hours': function(newVal, oldVal) {
      this.seriesHistogram[0].data = newVal
    }
  },
  created() {
  },
  methods: {
  }
}
</script>
