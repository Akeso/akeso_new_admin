<template>
  <el-card class="box-card">
    <el-row class="margin-bottom">
      <el-col>
        <label for="">选择日期</label>
        <el-date-picker
          :editable="false"
          :clearable="false"
          v-model="selectDate"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd"
          @change="changeDate"/>
      </el-col>
    </el-row>
    <hr>
    <span style="font-size: 18px; font-weight: bold;">健康评分</span>
    <el-row>
      <el-col :span="8">
        <el-row>
          <div style="text-align: center;">
            <span class="text-score">{{ healthScore.healthIndex }}</span>
          </div>
          <div class="margin-bottom text-center">
            <span style="font-size: 14px; background: #2bd710; padding: 8px 12px; border-radius:25px; color: #fff;">总加分{{ healthScore.upScoreMax }}</span>
            <span style="font-size: 14px; background: #d71f1f; padding: 8px 12px; border-radius:25px; color: #fff;">总减分{{ healthScore.downScoreMax }}</span>
          </div>
          <div class="margin-bottom text-center">
            <span style="font-size: 16px; font-weight: bold;">戴镜时间{{ healthScore.wearTime }}分钟 </span>
          </div>
        </el-row>
      </el-col>
      <el-col :span="14">
        <span class="des-font margin-bottom" style="line-height: 30px;">
          诺瞳眼健康评分（eye-health index），
          是借助“物联网”的数据采集技术和智能硬件对户外活动 、近距离用眼、运动步数等近视相关指标进行精准量化计算得出的用眼健康状况量化数值，100分为满分。
        </span>
      </el-col>
    </el-row>
    <el-row class="margin-bottom">
      <el-col :span="4" class="text-right text-standard-font">户外时间</el-col>
      <el-col :span="16">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="healthScore.outTimePercent" status="success" class="progress-l-r"/>
      </el-col>
      <el-col :span="4" class="text-standard-font">{{ healthScore.outTime }}/120分钟</el-col>
    </el-row>
    <el-row class="margin-bottom">
      <el-col :span="4" class="text-right text-standard-font">光照摄入</el-col>
      <el-col :span="16">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="healthScore.luxDayPercent" status="success" class="progress-l-r"/>
      </el-col>
      <el-col :span="4" class="text-standard-font">{{ healthScore.outTimeLux }}/360000lux</el-col>
    </el-row>
    <el-row class="margin-bottom">
      <el-col :span="4" class="text-right text-standard-font">运动步数</el-col>
      <el-col :span="16">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="healthScore.stepCountPercent" status="success" class="progress-l-r"/>
      </el-col>
      <el-col :span="4" class="text-standard-font">{{ healthScore.stepCount }}/12000步</el-col>
    </el-row>
    <el-row class="margin-bottom">
      <el-col :span="4" class="text-right text-standard-font">颈椎和用眼负担/分钟</el-col>
      <el-col :span="16">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="healthScore.nearworkBurdenPercent" status="exception" class="progress-l-r"/>
      </el-col>
      <el-col :span="4" class="text-standard-font">{{ healthScore.nearworkBurdenDay }}/18公斤</el-col>
    </el-row>
    <el-row class="margin-bottom">
      <el-col :span="4" class="text-right text-standard-font">近距离用眼时间</el-col>
      <el-col :span="16">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="healthScore.nearworkPercent" status="exception" class="progress-l-r"/>
      </el-col>
      <el-col :span="4" class="text-standard-font">{{ healthScore.nearworkDay }}/260分钟</el-col>
    </el-row>
    <el-row class="margin-bottom">
      <el-col :span="4" class="text-right text-standard-font">不良姿势提醒</el-col>
      <el-col :span="16">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="healthScore.badPostureTimesPercent" status="exception" class="progress-l-r"/>
      </el-col>
      <el-col :span="4" class="text-standard-font">{{ healthScore.badPostureTimes }}/45次</el-col>
    </el-row>
    <el-row style="padding: 20px 20px 0px 20px;">
      <table border="5" cellspacing="0" cellpadding="10" class="table-cls">
        <tr>
          <td class="td-20 title-font tab-header" style="width: 16%;">光照摄入（阈值）</td>
          <td class="td-20 title-font tab-header" style="width: 16%;">>1000lux</td>
          <td class="td-20 title-font tab-header" style="width: 16%;">>2000lux</td>
          <td class="td-20 title-font tab-header" style="width: 16%;">>5000lux</td>
          <td class="td-20 title-font tab-header" style="width: 16%;">>10000lux</td>
          <td class="td-20 title-font tab-header" style="width: 16%;">>25000lux</td>
        </tr>
        <tr>
          <td class="title-font">时间（分钟）</td>
          <td>{{ healthScore.luxThreshold[0] }}</td>
          <td>{{ healthScore.luxThreshold[1] }}</td>
          <td>{{ healthScore.luxThreshold[2] }}</td>
          <td>{{ healthScore.luxThreshold[3] }}</td>
          <td>{{ healthScore.luxThreshold[4] }}</td>
        </tr>
      </table>
    </el-row>
    <div style="padding: 40px 20px 0px 20px;">
      <el-row :gutter="20">
        <el-col :span="12">
          <HealthItem :text="textOutTime" :hours="hourOutTime"/>
        </el-col>
        <el-col :span="12">
          <HealthItem :text="textLux" :hours="hourLux"/>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <HealthItem :text="textStepCount" :hours="hourStepCount"/>
        </el-col>
        <el-col :span="12">
          <HealthItem :text="textBurden" :hours="hourBurden"/>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <HealthItem :text="textNearwork" :hours="hourNearwork"/>
        </el-col>
        <el-col :span="12">
          <HealthItem :text="textBadPosture" :hours="hourBadPostureTimes"/>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
import { fetchDaily } from '@/api/reports'
import HealthItem from '../components/health_item'
export default {
  components: { HealthItem },
  props: {
    userId: {
      type: String,
      default: ''
    }
  },
  data() {
    this.chartSettings = {
      labelMap: {
        score: '分数'
      }
    }
    return {
      textOutTime: {
        title: '户外时间',
        des: '该数值指当天孩子在户外走路、玩耍、运动等累积的时间。该数值与白天户外光照强度及户外紫外线有关，傍晚及夜晚在室外不算户外时间。',
        unit: '分钟'
      },
      textLux: {
        title: '光照摄入',
        des: '总光照摄入，记录一天中暴露在所有光照的总和。白天总光照摄入，记录7:00-19:00这段时间内暴露的光照总和。白天平均光照摄入，单位分钟内的白天总光照摄入的平均值。夜晚总光照摄入，记录19:00-7:00这段时间内暴露的光照总和。夜晚平均光照摄入，单位分钟内的夜晚总光照摄入的平均值。',
        unit: 'lux勒克斯'
      },
      textStepCount: {
        title: '运动步数',
        des: '该数值指孩子当天任何运动步数的总和。',
        unit: '步数'
      },
      textBurden: {
        title: '颈椎和用眼负担/分钟',
        des: '用眼负荷定义：室内状态下不同的低头角度（视物距离）的时间对应关系。戴镜的每一分钟颈椎承担的重量压力。',
        unit: '公斤'
      },
      textNearwork: {
        title: '近距离用眼时间',
        des: '该数值指孩子看书、手机、电脑、玩乐高等近距离用眼的时间。采集计算标准： 室内情况下，低头角度大于等于15度累积的时间。',
        unit: '分钟'
      },
      textBadPosture: {
        title: '不良姿势提醒',
        des: ' 该数值指孩子近距离用眼时低头、歪头过度时智能眼镜提醒矫正姿势的次数。采集计算标准： 室内情况下，当低头超过30度或歪头超过20度时镜腿提醒的次数累积总和。',
        unit: '次数'
      },
      hourOutTime: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      hourLux: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      hourStepCount: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      hourBurden: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      hourNearwork: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      hourBadPostureTimes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      selectDate: new Date(),
      healthScore: {
        luxThreshold: [0, 0, 0, 0, 0]
      }
    }
  },
  created() {
    this.getDaily()
  },
  mounted() {
  },
  methods: {
    getDaily() {
      fetchDaily({ child_id: this.userId, selectDate: this.selectDate }).then(response => {
        console.log('data => ', response.data)
        this.healthScore = response.data
        this.hourOutTime = response.data.outTimeHour
        this.hourLux = response.data.luxHour
        this.hourStepCount = response.data.stepCountHour
        this.hourBurden = response.data.nearworkBurdenHour
        this.hourNearwork = response.data.nearworkHour
        this.hourBadPostureTimes = response.data.badPostureTimesHour
      })
    },
    changeDate() {
      this.getDaily()
    }
  }
}
</script>

<style scoped>
.el-progress-bar__outer {
  background-color: gray !important;
}
.text-score {
  width: 100%; font-size: 80px; color: #2bd710;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.text-standard-font {
  font-size: 14px;
}
.margin-bottom {
  margin-bottom: 10px;
}
.progress-l-r {
  margin-left: 8px;
  margin-right: 8px;
}
.des-font {
  font-size: 14px;
  color: black;
}
.table-cls {
  width: 100%;
  border: .5px solid #ebeef5;
  border-left: 0.5px solid #ebeef5;
  border-top: .5px;
}
</style>
