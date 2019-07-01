<template>
  <el-card class="box-card">
    <el-row style="margin-bottom: 10px;">
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
          <div style="text-align: center; margin-top: 20px;">
            <span style="font-size: 14px; background: #2bd710; padding: 8px 12px; border-radius:25px; color: #fff;">总加分{{ healthScore.upScoreMax }}</span>
            <span style="font-size: 14px; background: #d71f1f; padding: 8px 12px; border-radius:25px; color: #fff;">总减分{{ healthScore.downScoreMax }}</span>
          </div>
          <div style="text-align: center; margin-top: 20px;">
            <span style="font-size: 16px;">戴镜时间{{ healthScore.wearTime }}分钟 </span>
          </div>
        </el-row>
      </el-col>
      <el-col :span="14">
        <span class="des-font" style="line-height: 30px;">
          诺瞳眼健康评分（eye-health index），
          是借助“物联网”的数据采集技术和智能硬件对户外活动
          及近距离用眼等近视相关指标进行精准量化计算得出的数值。
          每⽇同步数据后起始分数设定在100分，最高分为220分，
          其中户外活动相关指标占100分（加分项），近距离⼯作
          相关指标占100分（减分项），运动步数占20分（额外加分），
          每次同步数据后根据指标达成条件进⾏增减。
        </span>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px;" class="margin-bottom">
      <el-col :span="3" class="text-center text-standard-font">户外时间</el-col>
      <el-col :span="16">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="healthScore.outTimePercent" status="success" class="progress-l-r"/>
      </el-col>
      <el-col :span="4" class="text-standard-font">{{ healthScore.outTime }}/120分钟</el-col>
    </el-row>
    <el-row class="margin-bottom">
      <el-col :span="3" class="text-center text-standard-font">光照摄入</el-col>
      <el-col :span="16">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="healthScore.luxDayPercent" status="success" class="progress-l-r"/>
      </el-col>
      <el-col :span="3" class="text-standard-font">{{ healthScore.outTimeLux }}/360000lux</el-col>
    </el-row>
    <el-row class="margin-bottom">
      <el-col :span="3" class="text-center text-standard-font">运动步数</el-col>
      <el-col :span="16">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="healthScore.stepCountPercent" status="success" class="progress-l-r"/>
      </el-col>
      <el-col :span="3" class="text-standard-font">{{ healthScore.stepCount }}/12000步</el-col>
    </el-row>
    <el-row class="margin-bottom">
      <el-col :span="3" class="text-center text-standard-font">用眼负荷</el-col>
      <el-col :span="16">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="healthScore.nearworkBurdenPercent" status="exception" class="progress-l-r"/>
      </el-col>
      <el-col :span="3" class="text-standard-font">{{ healthScore.nearworkBurdenDay }}/720D</el-col>
    </el-row>
    <el-row class="margin-bottom">
      <el-col :span="3" class="text-center text-standard-font">近距离用眼时间</el-col>
      <el-col :span="16">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="healthScore.nearworkPercent" status="exception" class="progress-l-r"/>
      </el-col>
      <el-col :span="3" class="text-standard-font">{{ healthScore.nearworkTotal }}/260分钟</el-col>
    </el-row>
    <el-row class="margin-bottom">
      <el-col :span="3" class="text-center text-standard-font">不良姿势提醒</el-col>
      <el-col :span="16">
        <el-progress :text-inside="true" :stroke-width="18" :percentage="healthScore.badPostureTimesPercent" status="exception" class="progress-l-r"/>
      </el-col>
      <el-col :span="3" class="text-standard-font">{{ healthScore.badPostureTimes }}/45次</el-col>
    </el-row>
    <HealthItem :text="textOutTime" :hours="hourOutTime"/>
    <HealthItem :text="textLux" :hours="hourLux"/>
    <HealthItem :text="textStepCount" :hours="hourStepCount"/>
    <HealthItem :text="textBurden" :hours="hourBurden"/>
    <HealthItem :text="textNearwork" :hours="hourNearwork"/>
    <HealthItem :text="textBadPosture" :hours="hourBadPosture"/>
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
        title: '用眼负荷',
        des: '用眼负荷定义：室内状态下不同的低头角度（视物距离）的时间对应关系 放松：抬头或0-14度=0.5D，轻：15-29度=2D，中：30-44度=3D。',
        unit: 'D'
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
      hourBadPosture: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      selectDate: new Date(),
      healthScore: {}
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
        this.healthScore = response.data
        this.hourOutTime = response.data.outTimeHour
        this.hourLux = response.data.luxHour
        this.hourStepCount = response.data.stepCountHour
        this.hourBurden = response.data.nearworkBurdenHour
        this.hourNearwork = response.data.nearworkHour
        this.hourBadPosture = response.data.badPostureHour
      })
    },
    changeDate() {
      this.getDaily()
    }
  }
}
</script>

<style scope>
.el-progress-bar__outer {
  background-color: gray !important;
}
.text-score {
  width: 100%; font-size: 80px; color: #2bd710;
}
.text-center {
  text-align: center;
}
.text-standard-font {
  font-size: 14px;
}
.margin-bottom {
  margin-bottom: 20px;
}
.progress-l-r {
  margin-left: 8px;
  margin-right: 8px;
}
  .des-font {
    font-size: 14px;
    color: black;
  }
</style>
