<template>
  <div style="margin: 0px 20px 0px 20px">
    <el-row style="background-color: #eeeeee; padding: 20px 0px 0px 10px; border-radius: 6px;">
      <el-form :inline="true" :model="conditionQuery" class="demo-form-inline">
        <el-form-item label="度数">
          <el-select v-model="conditionQuery.sight_type" placeholder="请选择" style="width: 70px;">
            <el-option
              v-for="item in optionSights"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
          <el-select v-model="conditionQuery.re" placeholder="请选择" style="width: 100px;">
            <el-option
              v-for="item in options.reOptions"
              :key="item.value"
              :label="item.key"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="年龄" min-width="100">
          <el-select v-model="conditionQuery.age" placeholder="请选择" style="width: 80px;">
            <el-option
              v-for="item in options.ageStartOptions"
              :key="item"
              :label="item + '岁'"
              :value="item"/>
          </el-select>
        </el-form-item>
        <el-form-item label="防控方式">
          <el-select v-model="conditionQuery.ctrl_type" placeholder="请选择">
            <el-option
              v-for="item in options.ctrlTypeOptions"
              :key="item.value"
              :label="item.key"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="健康评分">
          <el-select v-model="conditionQuery.health_data" placeholder="请选择" style="width: 140px;">
            <el-option
              v-for="item in options.healthDataOptions"
              :key="item.value"
              :label="item.key"
              :value="item.value"/>
          </el-select>
        </el-form-item>
      </el-form>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="14" style="margin-top: 10px;">
        <ve-line v-if="conditionQuery.sight_type === 'short'" :series="series_short" :title="title" :tooltip="tooltip" :legend="legend_short" :x-axis="xAxis" :y-axis="yAxis"/>
        <ve-line v-else :series="series_long" :title="title" :tooltip="tooltip" :x-axis="xAxis" :y-axis="yAxis"/>
      </el-col>
      <el-col :span="10" style="padding: 10px 30px 0px 5px;">
        <div class="ng-binding" style="margin: 48px 0px 12px 0px; color: #4B8DF8;">亲爱的小朋友，你现在{{ textIndicator.age }}岁，{{ textIndicator.sightType }}是{{ textIndicator.re }}。</div>
        <div v-if="conditionQuery.sight_type === 'short'">
          <div class="ng-binding">
            如果没有及时进行近视防控，你在明年及17岁时近视的最终度数可能是：
          </div>
          <div class="ng-binding" style="color: red; font-size: 18px; font-weight: bold; width: 100%; text-align: center;">{{ textIndicator.badEnd }}</div>
          <br>
          <div class="ng-binding">
            如果选择
            <span style="color: #4B8DF8;">{{ textIndicator.ctrlType }}</span>
            来控制近视，与普通矫正方法（例如仅佩戴普通框架眼镜）相比，它对近视增长的减缓比率为：
            <span style="color: #4B8DF8;">{{ textIndicator.ctrl }}%</span>
            ，若同时日常眼健康评分为
            <span style="color: #4B8DF8;">{{ textIndicator.akesoScore }}</span>
            ，则在明年及17岁时近视的程度可能会是： <br>
          </div>
          <div class="ng-binding" style="width: 100%; text-align: center;">
            <span style="color: #4B8DF8;font-size: 18px; font-weight: bold;">{{ textIndicator.goodEnd }}</span> <br>
            <span>近视情况将得到改善。</span>
          </div>
        </div>
        <div v-else>
          <div class="ng-binding">
            如果没有及时进行近视防控，日常用眼健康评分为差，在17岁时近视的最终度数将会是：
          </div>
          <div class="ng-binding" style="width: 100%; text-align: center;"><span style="color: red;font-size: 18px; font-weight: bold;">{{ textIndicator.badEnd }}</span><br></div>
          <br>
          <div class="ng-binding">
            如果及时采取近视防控，例如诺瞳智能眼镜，每天户外达标2小时，并且日常眼健康评分为
            <span style="color: #4B8DF8;">{{ textIndicator.akesoScore }}</span>
            ，17岁时近视的最终度数可能是：<br>
          </div>
          <div class="ng-binding" style="width: 100%; text-align: center;"><span style="color: #4B8DF8;font-size: 18px; font-weight: bold;">{{ textIndicator.goodEnd }}</span></div>
        </div>
      </el-col>
    </el-row>
    <el-row style="background-color: #eeeeee; padding: 20px 0px 0px 10px; border-radius: 6px;">
      <div style="padding: 0px 20px 10px 20px;">
        <p style="font-size: 16px; color: #000;">
          本近视预测专为亚洲儿童设计，有着众多参考文献支持，且这些参考文献大部分是近年来的最新研究数据，可以说，“
          <a href="https://calculator.brienholdenvision.org/#!#collapseOne" style="color: #409EFF;" target="view_window">近视计算器</a>
          ”乃是站在近视科学技术尖端的最新近视防控工具。
        </p>
        <p style="font-size: 14px; color: #787878;">注：对于近视的咨询和治疗，您应该咨询专业眼科医师，他们可以进行必要的检查并提供适当的建议。随着近视眼管理研究的不断深入，我们不保证现在的信息是正确的或将来会适用。如果您因阅读内容或使用本小程序而对眼睛或一般健康有任何疑虑，应始终咨询相关眼科医师。</p>
        <p style="font-size: 14px; color: #787878;">为何要进行近视防控与管理？</p>
        <p style="font-size: 14px; color: #787878;">
          目前我国近视眼发病特点呈现一个低龄化、发展快和程度重的趋势，高度近视（600度以上）除了生活、学习、工作不便之外，还会导致其它眼病如青光眼、白内障、玻璃体混浊、视网膜出血或脱离的发生率大大增加，所以近视眼的预防控制显得特别重要。<br>
          如果孩子感觉近视，家长们就在眼镜店草率配镜，那么很可能孩子并非真性近视，或者因未经专业眼科医院做医学诊断致孩子配镜度数不准。这样孩子配戴了一副不合适的眼镜，随着学业负担不断加重，造成孩子的眼睛长期视疲劳，最终会导致孩子近视度数急剧增加。
        </p>
        <p style="width: 100%; text-align: center; font-size: 12px; color: #787878;">
          华伯恩视觉研究中心、国家眼科工程中心联合研发 <br>
          北京艾索健康科技有限公司作技术支持
        </p>
      </div>
    </el-row>
  </div>
</template>

<script>
import { fetchOptions, fetchForecasts, fetchForecastsLong } from '@/api/forecast'
const optionSights = [
  { value: 'short', label: '近视' },
  { value: 'long', label: '远视' }
]
export default {
  data() {
    this.chartSettings = {
      labelMap: {
        noCtrlData: '不进行近视防控',
        ctrlAkesoData: '健康数据分数影响'
      }
    }
    return {
      optionSights,
      options: {
        ageStartOptions: [],
        reOptions: [],
        ctrlTypeOptions: [],
        healthDataOptions: []
      },
      textIndicator: {
      },
      conditionQuery: {
        sight_type: 'short',
        age: '',
        re: '',
        ctrl_type: '',
        health_data: ''
      },
      title: {
        text: '近视预测'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend_short: {
        data: ['不采取控制', '健康数据分数影响']
      },
      xAxis: {
        type: 'category',
        // boundaryGap: false,
        data: []
      },
      yAxis: {
        type: 'value'
      },
      series_short: [
        {
          name: '不采取控制',
          type: 'line',
          stack: '总量',
          itemStyle: {
            normal: {
              color: '#ef4836'
            }
          },
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          data: []
        },
        {
          name: '采取控制最优',
          type: 'line',
          data: [],
          lineStyle: {
            normal: {
              color: '#b3e0b9'
            }
          },
          stack: 'confidence-band'
          // symbol: 'none'
        },
        {
          name: '采取控制最差',
          type: 'line',
          data: [],
          lineStyle: {
            normal: {
              color: '#b3e0b9'
            }
          },
          areaStyle: {
            normal: {
              origin: 'start',
              color: '#b3e0b9'
            }
          },
          stack: 'confidence-band'
          // symbol: 'none'
        },
        {
          name: '健康数据分数影响',
          type: 'line',
          itemStyle: {
            normal: {
              color: '#4B8DF8'
            }
          },
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          data: []
        }
      ],
      series_long: [
        {
          name: '采取控制最差',
          type: 'line',
          data: [],
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          lineStyle: {
            normal: {
              color: '#b3e0b9'
            }
          }
        },
        {
          name: '健康数据分数影响',
          type: 'line',
          itemStyle: {
            normal: {
              color: '#4B8DF8'
            }
          },
          markPoint: {
            data: [
              { type: 'max', name: '最大值' },
              { type: 'min', name: '最小值' }
            ]
          },
          data: []
        }
      ]
    }
  },
  watch: {
    'conditionQuery.sight_type': function(newVal, oldVal) {
      this.getOptions()
    },
    'conditionQuery.age': function(newVal, oldVal) {
      if (oldVal !== '') {
        this.getForecasts()
      }
    },
    'conditionQuery.re': function(newVal, oldVal) {
      if (oldVal !== '') {
        this.getForecasts()
      }
    },
    'conditionQuery.ctrl_type': function(newVal, oldVal) {
      if (oldVal !== '') {
        this.getForecasts()
      }
    },
    'conditionQuery.health_data': function(newVal, oldVal) {
      if (oldVal !== '') {
        this.getForecasts()
      }
    }
  },
  created() {
    this.getOptions()
  },
  mounted() {
  },
  methods: {
    getOptions: function() {
      fetchOptions({ sight_type: this.conditionQuery.sight_type }).then(response => {
        this.options = response.data
        this.conditionQuery.age = this.options.ageStartOptions[0]
        this.conditionQuery.re = this.options.reOptions[0].value
        this.conditionQuery.ctrl_type = this.options.ctrlTypeOptions[1].value
        this.conditionQuery.health_data = this.options.healthDataOptions[0].value
        this.getForecasts()
      })
    },
    getForecasts: function() {
      if (this.conditionQuery.sight_type === 'short') {
        fetchForecasts(this.conditionQuery).then(response => {
          this.xAxis.data = response.data.ages
          this.series_short[0].data = response.data.noCtrlData
          this.series_short[1].data = response.data.ctrlDataDefault
          this.series_short[2].data = response.data.ctrlDataSection
          this.series_short[3].data = response.data.ctrlAkesoData
          this.textIndicator = response.data.indicator
        })
      } else {
        fetchForecastsLong(this.conditionQuery).then(response => {
          this.xAxis.data = response.data.ages
          this.series_long[0].data = response.data.ctrlDataDefaultTop
          this.series_long[1].data = response.data.ctrlAkesoData
          this.textIndicator = response.data.indicator
        })
      }
    }
  }
}
</script>

<style scope>
  .el-input__inner {
    padding-left: 10px !important;
  }
  .ng-binding {
    color: #000000;
    font-size: 14px;
    /*font-weight: bold;*/
    line-height: 28px;
    line-height: 26px;
  }
  .sky {
    color: #00aeef;
  }
  .green {
    color: #00a651;
  }
  .red {
    color: #ed1c24;
  }
  .ng-binding-v {
    font-size: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
    display: block;
  }
</style>
