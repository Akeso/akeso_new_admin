<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>三代儿童指标详情</span>
        <el-button style="float: right; padding: 3px 0" type="text">导出原始数据</el-button>
      </div>
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
      <el-row>
        <el-col :span="6"><p>姓名</p></el-col>
        <el-col :span="18"><p>{{ healthScore.childName }}</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>指标</p></el-col>
        <el-col :span="18"><p>值</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>户外时间/天</p></el-col>
        <el-col :span="18"><p>{{ healthScore.outTime }} 分钟</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>护眼光照时间/天</p></el-col>
        <el-col :span="18"><p>{{ healthScore.protectLuxTime }} 分钟</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>户外阳光摄入/天</p></el-col>
        <el-col :span="18"><p>{{ healthScore.outTimeLux }} lux</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>运动步数/天</p></el-col>
        <el-col :span="18"><p>{{ healthScore.stepCount }} 步</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>用眼负荷/天</p></el-col>
        <el-col :span="18"><p>{{ healthScore.nearworkBurdenDay }} D</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>近距离用眼时间/天</p></el-col>
        <el-col :span="18"><p>{{ healthScore.nearworkTotal }} 分钟</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>不良姿势提醒/天</p></el-col>
        <el-col :span="18"><p>{{ healthScore.badPostureTimes }} 次</p></el-col>
      </el-row>
      <el-row>
        <p>= = = = = = = = = = = = = = = = = 新指标 = = = = = = = = = = = = = = = </p>
      </el-row>
      <el-row>
        <el-col :span="6"><p>平均用眼距离/天</p></el-col>
        <el-col :span="18"><p>{{ healthScore.avgEyeDistance }} cm</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>连续用眼时间/天</p></el-col>
        <el-col :span="18"><p>{{ healthScore.eyeTimeContinuously }} hours</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>连续用眼频率/天</p></el-col>
        <el-col :span="18"><p>{{ healthScore.eyeFrequencyContinuously }} times</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>视负荷/天</p></el-col>
        <el-col :span="18"><p>{{ healthScore.accommodationBurden }} D/hour</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>白天平均光照强度/天</p></el-col>
        <el-col :span="18"><p>{{ healthScore.dailyLightExposure }} lux/min</p></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"><p>夜间平均光照强度/天</p></el-col>
        <el-col :span="18"><p>{{ healthScore.dailyNightExposure }} lux/min</p></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { fetchDailyEn } from '@/api/reports'
export default {
  data() {
    return {
      userId: this.$route.params.id,
      selectDate: new Date(),
      healthScore: {}
    }
  },
  mounted() {
  },
  created() {
    this.getDaily()
  },
  methods: {
    getDaily() {
      fetchDailyEn({ child_id: this.userId, selectDate: this.selectDate }).then(response => {
        this.healthScore = response.data
      })
    },
    changeDate() {
      this.getDaily()
    }
  }
}
</script>

